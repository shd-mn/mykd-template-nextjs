"use client";

import { topTrending } from "./data/topTrending";
import TrendingCard from "@/components/UI/TrendingCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TopTrending() {
  return (
    <section className="pb-[90px] pt-[120px]">
      <div className="container">
        <div className="flex relative items-center gap-4 -mb-16">
          <h2 className="text-4xl font-extrabold">TOP TRENDING</h2>
          <span
            className="inline-block bg-contain bg-no-repeat w-9 h-9"
            style={{ backgroundImage: 'url("../images/fire.png")' }}
          ></span>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="trending-swipper h-full w-full"
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {topTrending.map((item, idx) => (
            <SwiperSlide key={idx} className="h-full w-full pt-24">
              <TrendingCard key={idx} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
