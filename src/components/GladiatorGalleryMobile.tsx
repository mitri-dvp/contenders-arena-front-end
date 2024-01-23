/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import type Swiper from "swiper";

const GladiatorGalleryMobile = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
}) => {
  const [swiper, setSwiper] = useState<Swiper>();

  const mapSwiperIndexToActiveIndex = (swipereIndex: number) => {
    if (swipereIndex === 0) return 1;
    if (swipereIndex === 1) return 0;
    return -1;
  };
  const mapActiveIndexToSwiperIndex = (activeIndex: number) => {
    if (activeIndex === 1) return 0;
    if (activeIndex === 0) return 1;
    return 2;
  };

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(mapActiveIndexToSwiperIndex(activeIndex));
    }
  }, [activeIndex]);

  return (
    <div className="relative">
      <Image
        className="w-full"
        src={"/assets/png/mobile-stricker-background.png"}
        alt="mobile-stricker-background.png"
        width={393}
        height={510}
        draggable={false}
        quality={100}
      />
      <div className="absolute top-0 h-full w-full">
        <Image
          className="absolute left-[5%] top-1/2 z-10 w-[50px] -translate-y-1/2 cursor-pointer"
          onClick={() => swiper?.slidePrev()}
          src={"/assets/svg/arrow-left.svg"}
          alt="arrow-left.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
        <Image
          className="absolute right-[5%] top-1/2 z-10 w-[50px] -translate-y-1/2 cursor-pointer"
          onClick={() => swiper?.slideNext()}
          src={"/assets/svg/arrow-right.svg"}
          alt="arrow-right.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
      </div>
      <div className="absolute top-[50%] h-full w-full -translate-y-[50%] scale-75">
        <SwiperReact
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(mapSwiperIndexToActiveIndex(swiper.realIndex));
          }}
          className="h-full"
          centeredSlides={true}
          slidesPerView={1}
          initialSlide={1}
          pagination={true}
          loop={true}
        >
          <SwiperSlide>
            <Image
              className={`w-full ${activeIndex === 1 ? "" : "grayscale"}`}
              src={"/assets/png/robot-DEFENDER.png"}
              alt="DEFENDER.png"
              width={1907}
              height={1003}
              draggable={false}
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={`w-full ${activeIndex === 0 ? "" : "grayscale"}`}
              src={"/assets/png/robot-STRIKER.png"}
              alt="STRIKER.png"
              width={1907}
              height={1003}
              draggable={false}
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={`w-full ${activeIndex === -1 ? "" : "grayscale"}`}
              src={"/assets/png/robot-RUNNER.png"}
              alt="RUNNER.png"
              width={1907}
              height={1003}
              draggable={false}
              quality={100}
            />
          </SwiperSlide>
        </SwiperReact>
      </div>
    </div>
  );
};

export default GladiatorGalleryMobile;
