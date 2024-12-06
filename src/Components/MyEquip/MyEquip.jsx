import React from 'react';
import { Link } from 'react-router-dom';

const MyEquip = ({equip,handleDeleteEquipment}) => {


    const {_id, imageURL, itemName, price, category, stockStatus} = equip;
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border transition-transform duration-300 hover:scale-105">
          
          <div className="h-48 w-full bg-gray-100">
            <img
              className="h-full w-full object-cover"
              src={imageURL}
              alt={itemName}
            />
          </div>
    
          
          <div className="p-5">
            <h2 className="text-lg font-bold text-gray-800">{itemName}</h2>
            <p className="text-sm text-gray-600">Category: {category}</p>
            <p className="text-sm text-gray-600">Stock: {stockStatus}</p>
            <p className="text-md font-semibold text-blue-600">Price: ${price}</p>
    
            
            <div className="mt-4 flex gap-3">
              <Link to={`/equipmentdetails/${_id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Details
                </button>
              </Link>
              <Link to={`/updateequipment/${_id}`}>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDeleteEquipment(_id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );

};

export default MyEquip;