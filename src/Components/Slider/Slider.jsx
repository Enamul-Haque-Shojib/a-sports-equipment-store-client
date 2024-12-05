import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {
    return (
        <div className='lg:w-[85%] w-[95%] mx-auto rounded-2xl'>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='w-[1000px]' src="https://t3.ftcdn.net/jpg/02/57/49/32/360_F_257493248_exlhRge9HrHPAUu2d8vRGEWAaqXmTotx.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px]' src="https://4.imimg.com/data4/XO/TR/MY-30165244/team-sports-goods-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px]' src="https://mrcheckout.net/wp-content/uploads/2014/10/Sporting-Goods-Sportswear-Wholesale-Distributors.jpg" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Slider;