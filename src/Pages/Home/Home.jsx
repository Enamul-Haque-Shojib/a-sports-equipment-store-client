import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Categories from '../../Components/Categories/Categories';
import Equipments from '../../Components/Equipments/Equipments';
import Slider from '../../Components/Slider/Slider';
import FaqHelp from '../../Components/faqHelp/faqHelp';

import CategoriesBanner from '../../Components/CategoriesBanner/CategoriesBanner';
import EquipmentsGallery from '../../Components/EquipmentsGallery/EquipmentsGallery';
import ContactAndSupport from '../../Components/ContactAndSupport/ContactAndSupport';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const{equipments, setEquipments} = useContext(AuthContext);
    const equipmentsList = equipments.slice(0,3)
    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Sports Gear Hub - Home</title>
                <link rel="canonical" href="https://www.example.com/" />
            </Helmet>
            {/* Hero Slider */}
            <Slider />

            {/* Categories Banner */}
            <section className="py-12 bg-gray-100">
                <CategoriesBanner />
            </section>

            {/* Sports Equipment Section */}
            <section className="py-12 lg:w-[85%] w-[95%] mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 pb-8">
                    Explore Our Sports Equipment
                </h1>
                <div className="flex lg:flex-row flex-col lg:justify-center gap-8">
                
                    <Equipments equipments={equipmentsList}/>
                </div>
                <div className='w-full flex justify-center items-center my-10 '>
                    <Link to='/allsportsequipments'><button className='btn text-xl bg-green-500 text-white'>View All</button></Link>
                </div>
                
            </section>

            {/* Equipment Gallery */}
            <section className="py-12 bg-gray-100">
                <EquipmentsGallery />
            </section>

            {/* FAQ Section */}
            <section className="py-12">
                <FaqHelp />
            </section>

            {/* Contact and Support */}
            <section className="py-12 bg-gray-100">
                <ContactAndSupport />
            </section>
        </div>
    );
};

export default Home;





