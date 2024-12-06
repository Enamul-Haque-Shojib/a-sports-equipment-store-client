import React, { useContext, useEffect, useState } from 'react';
import MyEquip from '../MyEquip/MyEquip';
import { AuthContext } from '../../Provider/AuthProvider';
import useStateHook from '../../CustomHook/useStateHook';
import Swal from 'sweetalert2';



const MyEquipmentsList = () => {
     const {user, loading,equipments, setEquipments} = useContext(AuthContext);



     useEffect(()=>{
      const fetchData=async()=>{
        const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/equipments/queryEquipments?userEmail=${user.email}`)
        const data = await response.json();
        setEquipments(data.data)
      }
      fetchData();
     },[]);


    const handleDeleteEquipment=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        const fetchData = async()=>{
            const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/equipments/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json', 
                },
            });
            const data = await response.json();
            console.log(data.data)
            if(data.data.deletedCount > 0){
              const deleteEquipment = equipments.filter(equip => equip._id != id);

              setEquipments(deleteEquipment);
              Swal.fire({
                  title: "Deleted!",
                  text: "Equipment has been deleted.",
                  icon: "success"
              });
          }
        }
        fetchData();
      }
    })
       
        
        // const deleteEquipment = equipments.filter(equip => equip._id != id);
        
        
        // setEquipments(deleteEquipment);
    
    }


    return (
        <div className="min-h-screen bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
              My Equipments
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipments.map((equip) => (
                <MyEquip
                  key={equip._id}
                  equip={equip}
                  handleDeleteEquipment={handleDeleteEquipment}
                />
              ))}
            </div>
            {equipments.length === 0 && (
              <p className="text-center text-gray-600 mt-10">
                You haven't added any equipment yet.
              </p>
            )}
          </div>
        </div>
      );
};

export default MyEquipmentsList;