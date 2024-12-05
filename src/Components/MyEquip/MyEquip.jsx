import React from 'react';
import { Link } from 'react-router-dom';

const MyEquip = ({equip,handleDeleteEquipment}) => {


    const {_id, imageURL, itemName, price, category, stockStatus} = equip;
    return (
        <div className="w-full p-[20px] border rounded-xl h-[420px]" >
  
            <div className="w-full h-[100px] mb-3">
                <img className="rounded-2xl w-full h-full" src={imageURL} alt="player" />     
            </div>
  
            <div className="">
            
                    <h2 className=" font-bold">{itemName}</h2>
            
                    <p>Price: ${price}</p>
                    <p>Category: {category}</p>
                    <p>Stock Status: {stockStatus}</p>
                    
                <Link to={`/equipmentdetails/${_id}`}><button className="btn p-[12px] border font-bold rounded-3xl">View Details</button></Link>
                <Link to={`updateequipment/${_id}`}><button className="btn p-[12px] border font-bold rounded-3xl">Update</button></Link>
                <button className="btn p-[12px] border font-bold rounded-3xl" onClick={()=>{handleDeleteEquipment(_id)}}>Delete</button>

                        
            </div>
</div>
    );

};

export default MyEquip;