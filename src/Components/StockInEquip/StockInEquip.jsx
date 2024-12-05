import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';

import StockCard from '../StockCard/StockCard';
import Swal from 'sweetalert2';

const StockInEquip = () => {
   const {user} = useContext(AuthContext);
    const [stockInEquip, setStockInEquip] = useState([]);

    useEffect(() =>{
        const fetchData = async()=>{
            const response = await fetch(`http://localhost:5000/api/equipments/queryStock?userEmail=${user.email}&stockStatusType=stockIn`);
            const data = await response.json();
            setStockInEquip(data.data);
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
          const response = await fetch(`http://localhost:5000/api/equipments/${id}`,{
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json', 
              },
          });
          const data = await response.json();
          console.log(data.data)
          if(data.data.deletedCount > 0){
            const deleteEquipment = stockInEquip.filter(equip => equip._id != id);

            setStockInEquip(deleteEquipment);

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
  
  }

   
    
    return (
      <div className="">
        {stockInEquip.map((equip) => (
          <StockCard
            key={equip._id}
            equip={equip}
            handleDeleteEquipment={handleDeleteEquipment}
          />
        ))}
      </div>
    );
};

export default StockInEquip;