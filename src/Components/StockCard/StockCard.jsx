import React from 'react';

const StockCard = ({equip, handleDeleteEquipment}) => {
    const { _id,itemName, category, price, rating, stockStatus, processingTime, description, customization, imageURL} = equip;
    return (
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <img
              src={imageURL}
              alt={itemName}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-semibold text-gray-800">{itemName}</h1>
              <p className="text-sm text-gray-600">Category: {category}</p>
              <p className="text-sm text-gray-600">Stock: {stockStatus}</p>
            </div>
            <button
              className="ml-auto text-red-500 hover:text-red-700"
              onClick={() => handleDeleteEquipment(_id)}
            >
              <i className="fa-solid fa-trash text-xl"></i>
            </button>
          </div>
        </div>
      );
};

export default StockCard;