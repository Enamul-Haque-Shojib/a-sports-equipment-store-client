import React, { useContext, useEffect, useState } from 'react';
import StockOut from '../StockOut/StockOut';
import { AuthContext } from '../../Provider/AuthProvider';

const StockOutEquip = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email)
    const [stockInEquip, setStockInEquip] = useState([]);
    console.log(stockInEquip);
        useEffect(() =>{
            const fetchData = async()=>{
                const response = await fetch(`http://localhost:5000/api/equipments/queryStock?userEmail=${user.email}&stockStatusType=stockOut`);
                const data = await response.json();
                setStockInEquip(data.data);
            }
            fetchData();
        },[]);
    
       
        return (
            <div className=''>
            {
                    stockInEquip.map(equip => 
                    <StockOut
                    key={equip._id}
                    equip={equip}
                    // handleUpdateEquipment = {handleUpdateEquipment}
                    // handleDeleteEquipment = {handleDeleteEquipment}
                    ></StockOut>)
            }
      
    
                      
            </div>
                            
                            
             
            
        );
};

export default StockOutEquip;