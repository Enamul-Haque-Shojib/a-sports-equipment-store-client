import { useContext, useEffect, useState } from "react";
import Equipment from "../Equipment/Equipment";
import { AuthContext } from "../../Provider/AuthProvider";


const Equipments = () => {
    const { appointmentsList, paymentList, setPaymentList } = useContext(AuthContext);
  
    
const [equipments, setEquipments] = useState([])


    useEffect(() =>{

    const fetchData = async()=>{
          const response = await fetch('http://localhost:5000/api/equipments/');
          const data = await response.json();
          setEquipments(data.data);
      }
      fetchData();
  
     
  },[]);
  


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
    
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      {
        equipments.map(equip => 
          <Equipment
          key={equip._id}
          equip={equip}
        
          ></Equipment>
        )
      }
    </tbody>

  </table>
</div>
        </div>
    );
   
};

export default Equipments;