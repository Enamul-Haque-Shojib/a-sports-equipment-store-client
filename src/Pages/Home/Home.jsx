import React from 'react';
import { Helmet } from 'react-helmet-async';
import Categories from '../../Components/Categories/Categories';
import Equipments from '../../Components/Equipments/Equipments';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Slider></Slider>
            <div className='py-[15px] lg:w-[85%] w-[95%] mx-auto'>
                <h1 className='text-3xl font-bold text-center pb-8'>Sports Equipments</h1>
                <div className='flex lg:flex-row flex-col lg:justify-center lg:items-start gap-x-5'>
                <Categories></Categories>
                <Equipments></Equipments>
                </div>
          
            </div>
            
        </div>
    );
};

export default Home;