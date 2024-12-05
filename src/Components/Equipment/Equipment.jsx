import React from 'react';
import { Link } from 'react-router-dom';

const Equipment = ({equip}) => {
    const {_id, imageURL, itemName, category, price}  = equip;
    return (
        <>
            <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={imageURL}
                  alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{itemName}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
       
        <td>${price}</td>
        <td>{category}</td>
        <td>
          <Link to={`/equipmentdetails/${_id}`}><button className="btn">View Details</button></Link>  
        </td>
       
      </tr>
        </>
    );
};

export default Equipment;