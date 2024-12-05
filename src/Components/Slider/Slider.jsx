import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {
    return (
        <div className='lg:w-[85%] w-[95%] mx-auto rounded-2xl border'>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='w-[1000px]' src="https://www.blazingcoders.com/appdata/blogs/130/carrierguidenceblazingcoders.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px]' src="https://media.licdn.com/dms/image/D5612AQF5zJwY1m0JoA/article-cover_image-shrink_600_2000/0/1716375187041?e=2147483647&v=beta&t=WiwhopNwWGyKNgtaDUYxCOtPSge9jK0HwlAylBLU1AE" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px]' src="https://miro.medium.com/v2/resize:fit:543/1*CRIUB3VMicWCVZEBpZOXqg.png" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Slider;