import React from 'react';
import { Link } from 'react-router-dom';

const StockIn = ({equip}) => {
    const {_id,imageURL, itemName, category} = equip;
    
    return (
        <div>
            <div  className="border p-[20px] rounded-2xl w-full">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img src={imageURL} className="rounded-lg w-[100px]" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl">{itemName}</h1>
                    
                    </div>
                    
                </div>
                <div>
           
                <button className="text-3xl text-red-400"
                 onClick={()=>handleDeleteEquipment(_id)}
                 ><i className="fa-solid fa-x"></i></button>
                
                </div>
            </div>
        </div>
        </div>
    );
};

export default StockIn;