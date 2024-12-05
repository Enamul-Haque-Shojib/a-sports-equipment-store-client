// import { useContext, useEffect, useState } from "react";
// import Equipment from "../Equipment/Equipment";
// import { AuthContext } from "../../Provider/AuthProvider";


// const Equipments = () => {
//     const { equipments,  setEquipments} = useContext(AuthContext);
  

//     useEffect(() =>{

//     const fetchData = async()=>{
//           const response = await fetch('http://localhost:5000/api/equipments/');
//           const data = await response.json();
//           setEquipments(data.data);
//       }
//       fetchData();
  
     
//   },[]);
  


// return (
//   <div className="lg:w-[80%] w-full">
   
//     <div className="overflow-x-auto rounded-lg shadow-lg">
//       <table className="table w-full text-left border-collapse">
//         {/* Table Header */}
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-4 text-sm text-gray-700">Name</th>
//             <th className="p-4 text-sm text-gray-700">Price</th>
//             <th className="p-4 text-sm text-gray-700">Category</th>
//             <th className="p-4 text-sm text-gray-700">Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {equipments.map((equip) => (
//             <Equipment key={equip._id} equip={equip} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );
   
// };

// export default Equipments;




import React from "react";
import Equipment from "../Equipment/Equipment";

const Equipments = ({ equipments }) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-4">
                Equipment List
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="p-4 text-sm">Name</th>
                            <th className="p-4 text-sm">Price</th>
                            <th className="p-4 text-sm">Category</th>
                            <th className="p-4 text-sm">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((equip) => (
                            <Equipment key={equip._id} equip={equip} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Equipments;
