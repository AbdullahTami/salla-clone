// some-inner-component.jsx
import React from "react";
import { useSwiper } from "swiper/react";

export default function SlideButtons() {
  //   const swiper = useSwiper();

  return (
    <div className="bg-red-400">
      <button className="swiper-button-next">Slide to the next slide</button>
      <button className="swiper-button-prev">
        Slide to the previous slide
      </button>
    </div>
  );
}
