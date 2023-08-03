"use client";

import React from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Slider from "./Slider";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Slider from "./Slider";
import "../app/swiper.css";

const banner = [
  { name: "Men suit", image: "/banner1.jpg" },
  { name: "Men suit pro", image: "/banner2.jpg" },
  { name: "Women classic", image: "/femaleexc4.jpg" },
  { name: "Only the best", image: "/fashionwork.jpg" },
];
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation, EffectFade]);
function Banner() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      effect="fade"
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, EffectFade]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="w-screen"
    >
      {banner.map((banr, i) => (
        <SwiperSlide key={i} className="swiperslide">
          <Slider img={banr.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
