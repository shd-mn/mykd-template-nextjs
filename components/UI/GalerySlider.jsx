"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

export default function GalerySlider({ data }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={40}
      centeredSlides={true}
      scrollbar={{
        hide: false,
        draggable: true,
      }}
      modules={[Scrollbar]}
      className="galery-swiper h-full w-full"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx} className="h-full w-full">
          <button
            type="button"
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="mb-6 h-[360px] w-full scale-90 border-[8px] border-[#2c3137] object-cover duration-300 sm:h-[440px] md:h-[540px]"
            />
            <div className="galery-content invisible flex w-full scale-0 items-center justify-between opacity-0 transition-all duration-300">
              <h3 className="text-xl font-extrabold tracking-widest md:text-[26px]">
                {item.title}
              </h3>
              <span className="font-bold text-t-gray-clr">
                RATE {item.rate}
              </span>
            </div>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
