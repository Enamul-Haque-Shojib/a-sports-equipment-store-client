import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const CategoriesBanner = () => {
    

    const categories = [
        {
          name: "Cricket",
          image: "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=",
        },
        {
          name: "Badminton",
          image: "https://via.placeholder.com/150?text=Badminton",
        },
        {
          name: "Football",
          image: "https://via.placeholder.com/150?text=Football",
        },
        {
          name: "Running",
          image: "https://via.placeholder.com/150?text=Running",
        },
        {
          name: "Tennis",
          image: "https://via.placeholder.com/150?text=Tennis",
        },
        {
          name: "Tennis",
          image: "https://via.placeholder.com/150?text=Tennis",
        },
        {
          name: "Tennis",
          image: "https://via.placeholder.com/150?text=Tennis",
        },
        {
          name: "Tennis",
          image: "https://via.placeholder.com/150?text=Tennis",
        },
      ];
    
      return (
        <div className="max-w-[95%] mx-auto py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Categories
          </h2>
          <Swiper
            modules={[Pagination]}
            
            pagination={{ clickable: true }}
            
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
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-lg font-medium text-gray-700 mt-4">
                  {category.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );



};

export default CategoriesBanner;