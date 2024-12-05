import React, { useContext, useEffect, useState } from 'react';
import MyEquip from '../MyEquip/MyEquip';
import { AuthContext } from '../../Provider/AuthProvider';
import useStateHook from '../../CustomHook/useStateHook';



const MyEquipmentsList = () => {
     const {user, loading,equipments, setEquipments} = useContext(AuthContext);



     useEffect(()=>{
      const fetchData=async()=>{
        const response = await fetch(`http://localhost:5000/api/equipments/queryEquipments?userEmail=${user.email}`)
        const data = await response.json();
        setEquipments(data.data)
      }
      fetchData();
     },[]);


    const handleDeleteEquipment=(id)=>{


        const fetchData = async()=>{
            const response = await fetch(`http://localhost:5000/api/equipments/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json', 
                },
            });
            const data = await response.json();
            console.log(data)
        }
        fetchData();
       
        
        const deleteEquipment = equipments.filter(equip => equip._id != id);
        
        
        setEquipments(deleteEquipment);
    
    }


    return (
        
        <div className='lg:w-[85%] w-[95%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4'>
            {
        equipments.map(equip => 
          <MyEquip
          key={equip._id}
          equip={equip}
          handleDeleteEquipment = {handleDeleteEquipment}
          ></MyEquip>)
      }
      
     
        </div>
    );
};

export default MyEquipmentsList;