import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { auth } from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

const Profile = () => {
    const {user,setUser, updateUserProfile, loading, deleteUserProfile} = useContext(AuthContext);
    
    if(loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    const {displayName, email, photoURL} = user;

   

    const handleUpdateProfile =(e)=>{
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo_url.value;

        const userUpdateData = {name: displayName, email}
       
        
        
            updateUserProfile( displayName, photoURL)
                .then(() => {
                  
                  const fetchData = async()=>{
                    const response = await fetch(`http://localhost:5000/api/users/${email}`,{
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                        body: JSON.stringify(userUpdateData),
                    });
                    const data = await response.json();
                    console.log(data)
                }
                fetchData();

                    toast.success("Profile updated successfully");
                    setUser((prevUser) => ({
                        ...prevUser,
                        displayName: displayName,
                        photoURL: photoURL,
                    }));
                    document.getElementById('my_modal_1').close()
                })
                .catch((error) => {
                    console.error("Error updating profile:", error.message);
                });
       
};

const handleDeleteAccount=async()=>{

  const password = prompt("Please enter your password to confirm account deletion:");
  const credential = EmailAuthProvider.credential(email, password);
  reauthenticateWithCredential(user, credential)
  .then(() => {
  deleteUserProfile()
  .then(() => {
                  
    const fetchData = async()=>{
      const response = await fetch(`http://localhost:5000/api/users/${email}`,{
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json', 
          },
      });
      const data = await response.json();
      console.log(data)
  }
  fetchData();

      toast.success("Profile deleted successfully");
  })
  .catch((error) => {
      console.error("Error deleting profile:", error.message);
  });
  }).catch((error) => {
    console.error("Error re authenticate profile:", error.message);
  });
  
}

    return (
        <div>
          <Helmet>
        <title>Profile Page</title>
        
      </Helmet>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col justify-center items-center">

{
    photoURL ?  
    <img
      src={photoURL}
      className="w-[200px] h-[200px] rounded-full shadow-2xl" />
    : 
    <img
      src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
      className="w-[500px] h-[500px] rounded-full shadow-2xl" />
}
    
    
      <h1 className="text-3xl font-bold">{displayName}</h1>
      <p className="py-2 text-xl">
        {email}
      </p>
      <div>
      <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update Profile</button>
      <button className="btn bg-red-600 text-white" onClick={()=>handleDeleteAccount()}>Delete Account</button>
      </div>
      
    
  </div>
</div>




{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Profile</h3>
    <div className="modal-action">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_1').close()}>✕</button>
      <form method="dialog" onSubmit={handleUpdateProfile} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" defaultValue={displayName} name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" defaultValue={photoURL} name='photo_url' className="input input-bordered" />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    
     
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Profile;