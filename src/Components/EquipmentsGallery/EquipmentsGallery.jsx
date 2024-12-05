import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const EquipmentsGallery = () => {


    const images = [
        {
          src: "https://clevercloset.co.uk/wp-content/uploads/2023/06/shutterstock_1562568346.jpg",
          alt: "Equipment 1",
        },
        {
          src: "https://st2.depositphotos.com/1177973/5232/i/450/depositphotos_52324617-stock-photo-sports-equipment-on-grass-background.jpg",
          alt: "Equipment 2",
        },
        {
          src: "https://www.holidaysafe.co.uk/wp-content/uploads/2016/03/Sports-Equipment-1-1.jpg",
          alt: "Equipment 3",
        },
        {
          src: "https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-an-image-of-sports-equipment-and-equipment-image_13168221.jpg",
          alt: "Equipment 4",
        },
      ];
    
      return (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Equipment Gallery
            </h2>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                loop
                className="rounded-lg"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default EquipmentsGallery;