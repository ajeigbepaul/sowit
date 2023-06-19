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
import banner1 from "../public/banner1.jpg";
import banner2 from "../public/banner2.jpg";
import banner3 from "../public/banner3.jpg";
import Image from 'next/image'

const banner = [
  { name: "Men suit", image: '/banner1.jpg' },
  { name: "Men suit pro", image: '/banner2.jpg' },
  { name: "Men suit intense", image:'/banner3.jpg' },
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
