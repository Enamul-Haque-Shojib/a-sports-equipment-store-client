import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AuthContext } from '../../Provider/AuthProvider';

const CategoriesBanner = () => {
    
  const {categories} = useContext(AuthContext);
    
      return (
        <div className="max-w-[95%] mx-auto py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Categories
          </h2>
          <Swiper
            modules={[Navigation,Pagination, Autoplay]}
            
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={10}
            slidesPerView={4}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-lg"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <div className="w-[250px] h-[250px] mx-auto rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src={category.imageURL}
                    alt={category.categoryName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-lg font-medium text-gray-700 mt-4">
                  {category.categoryName}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );



};

export default CategoriesBanner;