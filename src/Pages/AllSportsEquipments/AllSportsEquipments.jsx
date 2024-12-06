

import React, { useState, useEffect } from 'react';
import Categories from '../../Components/Categories/Categories';
import Equipments from '../../Components/Equipments/Equipments';

import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AllSportsEquipments = () => {

    const loadEquipmentsData = useLoaderData();
 
    const [equip, setEquip] = useState([]);

    
    useEffect(() => {
        setEquip(loadEquipmentsData.data); 
    }, []);


    const handleSort = (order) => {
        

        if (order === 'asc') {
            setEquip([...equip].sort((a, b) => a.price - b.price));
        } else if (order === 'desc') {
            setEquip([...equip].sort((a, b) => b.price - a.price));
        } else {
            setEquip(loadEquipmentsData.data); 
        }
    };

    const handleCategories=(categoryName)=>{
        let url = '';
        if(categoryName === 'All'){
            url = `https://a-sports-equipment-store-server-side.vercel.app/api/equipments/queryEquipments`;
        }else{
            url=`https://a-sports-equipment-store-server-side.vercel.app/api/equipments/queryEquipments?category=${categoryName}`
        }
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setEquip([...data.data])
        };
        fetchData();
            
      
    }

    return (
        <div>
            <Helmet>
                <title>All Sports Equipments</title>
            </Helmet>
            <div className="py-6 lg:w-[85%] w-[95%] mx-auto">
            <h1 className="text-3xl font-bold text-center pb-8">ALL Sports Equipments</h1>
            <div className="flex justify-end gap-4 mb-4">
                <button
                    onClick={() => handleSort('asc')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Ascending Order
                </button>
                <button
                    onClick={() => handleSort('desc')}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    Descending Order
                </button>
                <button
                    onClick={() => handleSort(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
            <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start gap-x-5">
                <Categories handleCategories={handleCategories}/>
                <Equipments equipments={equip} />
            </div>
        </div>
        </div>
        
    );
};

export default AllSportsEquipments;
