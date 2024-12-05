import React, { useContext, useEffect, useState } from 'react';
import StockIn from '../StockIn/StockIn';
import { AuthContext } from '../../Provider/AuthProvider';

const StockInEquip = () => {
   const {user} = useContext(AuthContext);
    const [stockInEquip, setStockInEquip] = useState([]);
console.log(stockInEquip);
    useEffect(() =>{
        const fetchData = async()=>{
            const response = await fetch(`http://localhost:5000/api/equipments/queryStock?userEmail=${user.email}&stockStatusType=stockIn`);
            const data = await response.json();
            setStockInEquip(data.data);
        }
        fetchData();
    },[]);

   
    return (
        <div className='lg:w-[80%] grid lg:grid-cols-3 grid-cols-1 gap-4'>
        {
                stockInEquip.map(equip => 
                <StockIn
                key={equip._id}
                equip={equip}
                // handleUpdateEquipment = {handleUpdateEquipment}
                // handleDeleteEquipment = {handleDeleteEquipment}
                ></StockIn>)
        }
  

                  
        </div>
                        
                        
         
        
    );
};

export default StockInEquip;