import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';




const AddEquipment = () => {

const {user, categories} = useContext(AuthContext);




    const handleAddEquipment = (e) => {
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

         const equipments = {equipment:{userName,userEmail, itemName,category,price,rating,stockStatus,processingTime,description, customization,imageURL}};

        
        const fetchData = async()=>{
            const response = await fetch('http://localhost:5000/api/equipments/create-equipment',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(equipments),
            });
            const data = await response.json();
            console.log(data)
            toast.success('Equipment has been Added successfully');
            e.target.reset();
        }

        fetchData()
        

    }





    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Add New Equipment
          </h1>
          <form onSubmit={handleAddEquipment} className="space-y-6">
            {/* User Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-medium">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName || ""}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label font-medium">User Email</label>
                <input
                  type="email"
                  name="userEmail"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered"
                />
              </div>
            </div>
  
            {/* Equipment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="form-control">
                <label className="label font-medium">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  placeholder="Enter item name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-medium">Category</label>
                <select
                  name="category"
                  className="select select-bordered"
                  required
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option key={category._id} value={category.categoryName}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label font-medium">Processing Time</label>
                <select
                  name="processingTime"
                  className="select select-bordered"
                  required
                >
                  <option disabled selected>
                    Select Processing Time
                  </option>
                  <option>1-2 Days</option>
                  <option>3-5 Days</option>
                  <option>1 Week</option>
                  <option>More than 1 Week</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label font-medium">Price ($)</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-medium">Rating</label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Enter rating (1-5)"
                  className="input input-bordered"
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-medium">Stock Quantity</label>
                <input
                  type="text"
                  name="stockStatus"
                  placeholder="Enter stock quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
  
            {/* Description */}
            <div className="form-control">
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Enter item description"
              ></textarea>
            </div>
  
            {/* Customization */}
            <div className="form-control">
              <label className="label font-medium">Customization Options</label>
              <textarea
                name="customization"
                className="textarea textarea-bordered"
                placeholder="Enter customization details"
              ></textarea>
            </div>
  
            {/* Image */}
            <div className="form-control">
              <label className="label font-medium">Image URL</label>
              <input
                type="text"
                name="imageURL"
                placeholder="Enter image URL"
                className="input input-bordered"
                required
              />
            </div>
  
            {/* Submit Button */}
            <div className="form-control">
              <button className="btn btn-primary w-full">Add Equipment</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddEquipment;