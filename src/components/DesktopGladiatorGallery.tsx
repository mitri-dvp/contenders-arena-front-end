/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Image from "next/image";
import React, { useState } from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import type Swiper from "swiper";

const DesktopGladiatorGallery = () => {
  const [swiper, setSwiper] = useState<Swiper>();
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative">
      <Image
        className="w-full"
        src={"/assets/png/stricker-section.png"}
        alt="stricker-section.png"
        width={1920}
        height={1084}
        draggable={false}
        quality={100}
      />
      <div className="absolute top-0 h-full w-full">
        <Image
          className="absolute left-[15%] top-1/2 z-10 w-[50px] -translate-y-1/2 cursor-pointer"
          onClick={() => swiper?.slidePrev()}
          src={"/assets/svg/arrow-left.svg"}
          alt="arrow-left.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
        <Image
          className="absolute right-[15%] top-1/2 z-10 w-[50px] -translate-y-1/2 cursor-pointer"
          onClick={() => swiper?.slideNext()}
          src={"/assets/svg/arrow-right.svg"}
          alt="arrow-right.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
      </div>
      <div className="absolute top-[50%] h-full w-full -translate-y-[50%] scale-125">
        <SwiperReact
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 1200,
            modifier: 1,
            slideShadows: false,
            scale: 1.5,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
        >
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                className={`w-full ${activeIndex === 0 ? "" : "grayscale"}`}
                src={"/assets/png/robot-DEFENDER.png"}
                alt="DEFENDER.png"
                width={1907}
                height={1003}
                draggable={false}
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                className={`w-full ${activeIndex === 1 ? "" : "grayscale"}`}
                src={"/assets/png/robot-STRIKER.png"}
                alt="STRIKER.png"
                width={1907}
                height={1003}
                draggable={false}
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                className={`w-full ${activeIndex === 2 ? "" : "grayscale"}`}
                src={"/assets/png/robot-RUNNER.png"}
                alt="RUNNER.png"
                width={1907}
                height={1003}
                draggable={false}
                quality={100}
              />
            </div>
          </SwiperSlide>
        </SwiperReact>
      </div>
    </div>
  );
};

export default DesktopGladiatorGallery;
