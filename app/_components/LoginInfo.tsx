"use client";
// import Image from "next/image";
import React from "react";
// import RegisterImage from "@/assents/register.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";
import { slides } from "@/app/_lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RegisterInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:flex text-sm justify-self-center self-center origin-center place-self-center hidden text-primary-200 gap-3 flex-col items-center"
    >
      <h2 className="text-3xl">ألقِ نظرة على آخر تحديثات سلة</h2>

      <Swiper
        loop
        effect={"cards"}
        grabCursor={true}
        pagination={true}
        modules={[EffectCards, Pagination]}
        className="infoSwiper"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="bg-white relative">
            <figure>
              <SwiperSlide
                key={slide.id}
                className="bg-white p-4 shadow-[0px_4px_14px_0px_rgb(0,0,0,0.1)] opacity-1 "
              >
                <Image src={slide.image} alt="photo" width={600} height={400} />
                <div className="text-sm fade leading-6 mt-4 space-y-3 font-normal before:absolute before:w-full before:bg-[linear-gradient(0deg,#fffffff0,35%,transparent)] before:h-[70px] before:bottom-0">
                  {slide.text.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </SwiperSlide>
            </figure>
          </div>
        ))}
      </Swiper>
      <p className="text-accent-200 mt-14 underline">عرض كل التحديثات</p>
    </motion.div>
  );
}
