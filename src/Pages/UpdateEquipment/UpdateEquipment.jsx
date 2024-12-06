import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateEquipment = () => {

  const {user} = useContext(AuthContext);
const navigate = useNavigate();
   const equipData = useLoaderData();




   const { _id,itemName, category, price, rating, stockStatus, processingTime, description, customization, imageURL} = equipData?.data;


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
            const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/equipments/${_id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(equipments),
            });
            const data = await response.json();
            // console.log(data)
            toast.success('Equipment has been updated successfully');
            navigate(-1);
        }
        fetchData();

    }
    return (
      <div>
        <Helmet>
        <title>Update Equipment Page</title>
      </Helmet>
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Update Equipment
          </h1>
          <form className="space-y-6" onSubmit={handleUpdateEquipment}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName || ""}
                  readOnly
                  placeholder="User Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={user?.email || ""}
                  readOnly
                  placeholder="User Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
  
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  name="itemName"
                  defaultValue={itemName}
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled defaultValue={category}>
                    Select Category
                  </option>
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Run Race</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Processing Time
                </label>
                <select
                  name="processingTime"
                  
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled defaultValue={processingTime}>
                    Select Time
                  </option>
                  <option value="1-2 Days">1-2 Days</option>
                  <option value="3-5 Days">3-5 Days</option>
                  <option value="1 Week">1 Week</option>
                </select>
              </div>
            </div>
  
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Rating
                </label>
                <input
                  type="text"
                  step="0.1"
                  max="5"
                  min="0"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Stock Status
                </label>
                <input
                  type="text"
                  name="stockStatus"
                  defaultValue={stockStatus}
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
  
        
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                rows="3"
                required
              ></textarea>
            </div>
  
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Customization
              </label>
              <textarea
                name="customization"
                defaultValue={customization}
                placeholder="Special features or customizations"
                className="textarea textarea-bordered w-full"
                rows="3"
              ></textarea>
            </div>
  
        
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="imageURL"
                defaultValue={imageURL}
                placeholder="Image URL"
                className="input input-bordered w-full"
                required
              />
            </div>
  
            
            <div className="mt-6 text-center">
              <button className="btn btn-primary w-full md:w-1/3">Update</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      
    );
};

export default UpdateEquipment;