import React from 'react';
import { Link } from 'react-router-dom';

const Equipment = ({equip}) => {
    const {_id, imageURL, itemName, category, price}  = equip;
    

  return (
    <tr className="hover:bg-gray-100 transition">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg overflow-hidden shadow-md">
            <img
              src={imageURL}
              alt={itemName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-800">{itemName}</p>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-gray-800">${price}</td>
      <td className="p-4 text-gray-800">{category}</td>
      <td className="p-4">
        <Link to={`/equipmentdetails/${_id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Equipment;