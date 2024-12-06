import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import './Profile.css'
import Swal from 'sweetalert2';

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
                    const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/users/${email}`,{
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

  Swal.fire({
    title: "Are you sure?",
    text: "If you delete your account, your 'Sports Equipment Store's equipments and user data will be lost and cannot be restore from database forever!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      

      const password = prompt("Please enter your password to confirm account deletion:");
      const credential = EmailAuthProvider.credential(email, password);
      reauthenticateWithCredential(user, credential)
      .then(() => {
      deleteUserProfile()
      .then(() => {
                      
        const fetchData = async()=>{
          const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/users/${email}`,{
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json', 
              },
          });
          const data = await response.json();
      }
      fetchData();
      
      })
      .catch((error) => {
          console.error("Error deleting profile:", error.message);
      });
      }).catch((error) => {
        console.error("Error re authenticate profile:", error.message);
      });
      
        Swal.fire({
          title: "Deleted!",
          text: "Your Account has been deleted.",
          icon: "success"
        });
      
    }
  });









  // const password = prompt("Please enter your password to confirm account deletion:");
  // const credential = EmailAuthProvider.credential(email, password);
  // reauthenticateWithCredential(user, credential)
  // .then(() => {
  // deleteUserProfile()
  // .then(() => {
                  
  //   const fetchData = async()=>{
  //     const response = await fetch(`http://localhost:5000/api/users/${email}`,{
  //         method: 'DELETE',
  //         headers: {
  //             'Content-Type': 'application/json', 
  //         },
  //     });
  //     const data = await response.json();
  //     console.log(data)
  // }
  // fetchData();

  //     // toast.success("Profile deleted successfully");
  // })
  // .catch((error) => {
  //     console.error("Error deleting profile:", error.message);
  // });
  // }).catch((error) => {
  //   console.error("Error re authenticate profile:", error.message);
  // });
  
}

return (
  <div>
    <Helmet>
      <title>Profile Page</title>
    </Helmet>

    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] lg:w-[40%] text-center">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={
              photoURL ||
              "https://via.placeholder.com/200?text=No+Image+Available"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />
        </div>
        {/* User Info */}
        <h1 className="mt-4 text-2xl font-bold text-gray-800">{displayName}</h1>
        <p className="text-gray-500 text-sm">{email}</p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <button
            className="btn btn-primary px-6 py-2 rounded-lg text-white shadow-md hover:shadow-lg"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Update Profile
          </button>
          <button
            className="btn bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>

    {/* Update Profile Modal */}
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-white rounded-lg shadow-xl">
        <h3 className="font-bold text-lg text-gray-800">Update Profile</h3>
        <form onSubmit={handleUpdateProfile} className="mt-4 space-y-4">
          <div className="form-control">
            <label className="label text-sm font-semibold text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={displayName}
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-control">
            <label className="label text-sm font-semibold text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              defaultValue={photoURL}
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">
              Save Changes
            </button>
          </div>
        </form>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={() => document.getElementById("my_modal_1").close()}
        >
          ✕
        </button>
      </div>
    </dialog>
  </div>
);
};

export default Profile;