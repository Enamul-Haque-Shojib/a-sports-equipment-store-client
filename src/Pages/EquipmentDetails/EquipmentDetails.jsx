import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
       
    const {data} = useLoaderData();
    
    
    const {_id,imageURL, category, customization, description, itemName, price, rating, processingTime, stockStatus} = data;

   ;
   return (
    <div className="min-h-screen bg-gray-100 py-10">
    
      <Helmet>
        <title>{itemName} - Equipment Details</title>
      </Helmet>

      
      <div className="lg:w-[80%] w-[95%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white p-5">
          <h1 className="text-3xl font-bold">{itemName}</h1>
          <p className="text-lg opacity-80">Category: {category}</p>
        </div>

        
        <div className="flex flex-col lg:flex-row">
        
          <div className="lg:w-[50%] w-full">
            <img
              src={imageURL}
              alt={itemName}
              className="w-full h-[400px] object-center rounded-bl-lg"
            />
          </div>

          
          <div className="lg:w-[50%] w-full p-12 flex flex-col gap-y-6">
            {/* Price */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Price</h2>
              <span className="text-2xl font-semibold text-green-600">
                ${price}
              </span>
            </div>

            
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                Stock Status: <span>{stockStatus}</span>
              </h2>
              <span
                className={`${
                  stockStatus > 0
                    ? "text-green-600 bg-green-100"
                    : "text-red-600 bg-red-100"
                } px-3 py-1 rounded-full text-sm font-medium`}
              >
                {stockStatus > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-700">Rating</h2>
              <span className="bg-yellow-300 text-yellow-800 px-3 py-1 rounded-xl font-medium">
                {rating}
              </span>
            </div>

          
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Customization
              </h2>
              <p className="text-gray-600">{customization}</p>
            </div>

            
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Processing Time
              </h2>
              <p className="text-gray-600">{processingTime}</p>
            </div>

          
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Description
              </h2>
              <p className="text-gray-600">{description}</p>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;