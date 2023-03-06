import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import banner from "../../.././assets/banner-4.jpg";
import "./hero.css";
import { heroImg } from "../../../dummy/heroImg";

const Hero = () => {
  const progressCircle = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    /*  progressCircle.current.style.setProperty("--progress", 1 - progress); */
  };
  return (
    <section className="hero-continer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {heroImg.map((img) => {
          return (
            <SwiperSlide className="swiper-slide">
              <img src={img.img} alt="hero" className="swiper-slide__img" />
              <div className="text-container">
                <p>SHAYO FASHION PRESENTS</p>
                <h1>
                  REDFINING <span>{img.cat}</span> WEAR
                </h1>
                <p className="second-pargrafe">
                  From the new trench to statement overshirts, it’s definitely
                  time to embrace jacket season.
                </p>
                <button className="hero-button">SHOP NOW</button>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
