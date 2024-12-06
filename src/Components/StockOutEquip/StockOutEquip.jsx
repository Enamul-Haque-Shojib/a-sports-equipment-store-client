import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import StockCard from '../StockCard/StockCard';
import Swal from 'sweetalert2';

const StockOutEquip = () => {
    const {user} = useContext(AuthContext);
    // console.log(user.email)
    const [stockOutEquip, setStockOutEquip] = useState([]);
    
        useEffect(() =>{
            const fetchData = async()=>{
                const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/equipments/queryStock?userEmail=${user.email}&stockStatusType=stockOut`);
                const data = await response.json();
                setStockOutEquip(data.data);
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
                // console.log(data.data)
                if(data.data.deletedCount > 0){
                  const deleteEquipment = stockOutEquip.filter(equip => equip._id != id);
    
                  setStockOutEquip(deleteEquipment);

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
            {stockOutEquip.map((equip) => (
              <StockCard
                key={equip._id}
                equip={equip}
                handleDeleteEquipment={handleDeleteEquipment}
              />
            ))}
          </div>
        );
};

export default StockOutEquip;