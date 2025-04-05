import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Базовые стили Swiper
import "swiper/css/navigation"; // Стили для кнопок (если используешь навигацию)
import "swiper/css/pagination"; // Стили для пагинации (если нужна)

import { Navigation, Pagination } from "swiper/modules"; // Модули для Swiper
import carLogos from '../data/carLogos';

const Slider = () => {
  return (
    <>

       <Swiper
        slidesPerView={5}
        pagination={false}
        loop={true}
        modules={[Pagination]}
        className="flex w-[95%] h-[266px] mt-10 mb-20  space-x-2"
        
      >
        {carLogos.map((car, index) => (
            <SwiperSlide key={index}>
            <div className="flex items-center justify-center  w-[232px] h-[266px] shadow-2xl rounded-xl">
                <img
                src={car.src}
                alt={car.alt}
                className="w-[128px] h-[128px] object-contain rounded-xl "
                />
            </div>
            </SwiperSlide>
        ))}
        
        
      </Swiper>
    </>
  )
}

export default Slider