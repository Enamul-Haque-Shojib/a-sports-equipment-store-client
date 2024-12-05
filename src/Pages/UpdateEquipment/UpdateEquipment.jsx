import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateEquipment = () => {


   const equipData = useLoaderData();


//    useEffect(() => {

//    },[])

   const { _id,itemName, category, price, rating, stockStatus, processingTime, description, customization, imageURL} = equipData.data;


    const handleUpdateEquipment = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const itemName = e.target.itemName.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const stockStatus = e.target.stockStatus.value;
        const processingTime = e.target.processingTime.value;
        const description = e.target.description.value;
        const customization = e.target.customization.value;
        const imageURL = e.target.imageURL.value;

        const equipments = {userName,userEmail, itemName,category,price,rating,stockStatus,processingTime,description, customization,imageURL};
        
        const fetchData = async()=>{
            const response = await fetch(`http://localhost:5000/api/equipments/${_id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(equipments),
            });
            const data = await response.json();
            console.log(data)
        }
        fetchData();

    }
    return (
        <div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleUpdateEquipment}>
        <div className='flex'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="User Name" name='userName'  defaultValue='' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="email" placeholder="User Email" defaultValue='' name='userEmail' className="input input-bordered" required />
        </div>
        </div>
       <div className='flex'>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" placeholder="Item Name" name='itemName' defaultValue={itemName}  className="input input-bordered" required />
        </div>
        


        <div className="form-control">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <select
    className="select select-bordered w-full"
    name="category"
    defaultValue={category} // Set defaultValue to the fetched category
  >
    <option disabled value="">
      Select Category
    </option>
    <option value="Football">Football</option>
    <option value="Cricket">Cricket</option>
    <option value="Basketball">Basketball</option>
    <option value="Tennis">Run Race</option>
  </select>
</div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <select className="select select-bordered w-full" name='processingTime' defaultValue={processingTime}>
            <option disabled selected>Select Time</option>
            <option>Han Solo</option>
            <option>Greedo</option>
            </select>
        </div>
       </div>
        <div className='flex'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" name='price' className="input input-bordered" defaultValue={price} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" defaultValue={rating} name='rating' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Stock Status</span>
          </label>
          <input type="text" placeholder="Quantity" defaultValue={stockStatus} name='stockStatus' className="input input-bordered" required />
        </div>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea className="textarea textarea-bordered" name='description' defaultValue={description} placeholder="Description"></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <textarea className="textarea textarea-bordered" name='customization' placeholder="Describe any special features or customizations available (e.g., extra grip, personalized engraving, favorite colors, weight, logo engraving etc.)" defaultValue={customization}></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" placeholder="Image URL" name='imageURL' defaultValue={imageURL} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Equipment</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateEquipment;