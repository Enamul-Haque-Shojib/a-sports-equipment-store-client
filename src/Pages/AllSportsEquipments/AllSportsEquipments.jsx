import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Equipments from '../../Components/Equipments/Equipments';

const AllSportsEquipments = () => {
    return (
        <div className='py-[15px] lg:w-[85%] w-[95%] mx-auto'>
                <h1 className='text-3xl font-bold text-center pb-8'>ALL Sports Equipments</h1>
                <div className='flex lg:flex-row flex-col lg:justify-center lg:items-start gap-x-5'>
                <Categories></Categories>
                <Equipments></Equipments>
                </div>
          
            </div>
    );
};

export default AllSportsEquipments;