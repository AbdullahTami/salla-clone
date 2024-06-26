"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Grid, Navigation } from "swiper/modules";
import { partners } from "@/app/_lib/data";
import Image from "next/image";
export default function Partners() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 3,
          fill: "row",
        }}
        centerInsufficientSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={"10px"}
        modules={[Grid, Navigation]}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="flex items-center justify-center ">
              <div className="flex w-[80px] h-[80px] items-center justify-center">
                <Image
                  src={partner.logo}
                  alt="partner logo"
                  className="object-cover"
                  width={80}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-24 left-1/2 -translate-x-12">
        <div className="swiper__navigation justify-center relative mt-auto flex gap-5">
          <button className="swiper-button-next  border border-[#bababa80] rounded-full"></button>
          <button className="swiper-button-prev border border-[#bababa80] rounded-full"></button>
        </div>
      </div>
    </>
  );
}
