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

const GladiatorGalleryDesktop = ({
  activeIndex,
  slidePrev,
  slideNext,
}: {
  activeIndex: number;
  slidePrev: () => void;
  slideNext: () => void;
}) => {
  const getContenderStyles = () => {
    return {
      center: {
        imageStyles: "scale-[75%] z-10",
        containerStyles:
          "transition-transform duration-500 translate-x-[50%] -translate-x-[50%] z-10",
      },

      right: {
        imageStyles: "scale-[60%] grayscale",
        containerStyles: "transition-transform duration-500  translate-x-[90%]",
      },

      left: {
        imageStyles: "scale-[60%] grayscale",
        containerStyles: "transition-transform duration-500  translate-x-[10%]",
      },
    };
  };

  const getDefenderStyles = () => {
    if (activeIndex === 0) return getContenderStyles().left;
    if (activeIndex === 1) return getContenderStyles().center;
    return getContenderStyles().right;
  };
  const getStrikerStyles = () => {
    if (activeIndex === 0) return getContenderStyles().center;
    if (activeIndex === 1) return getContenderStyles().right;
    return getContenderStyles().left;
  };
  const getRunnerStyles = () => {
    if (activeIndex === 0) return getContenderStyles().right;
    if (activeIndex === 1) return getContenderStyles().left;
    return getContenderStyles().center;
  };

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
          className="absolute left-[15%] top-1/2 z-10 w-[80px] -translate-y-1/2 cursor-pointer transition hover:opacity-50"
          onClick={() => slidePrev()}
          src={"/assets/svg/arrow-left.svg"}
          alt="arrow-left.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
        <Image
          className="absolute right-[15%] top-1/2 z-10 w-[80px] -translate-y-1/2 cursor-pointer transition hover:opacity-50"
          onClick={() => slideNext()}
          src={"/assets/svg/arrow-right.svg"}
          alt="arrow-right.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />

        <Image
          className="absolute right-[20%] top-[15%] z-10 w-[30px] -translate-y-1/2 cursor-pointer"
          src={"/assets/svg/corner-right.svg"}
          alt="corner-right.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
        <Image
          className="absolute bottom-[15%] right-[20%] z-10 w-[30px] -translate-y-1/2 cursor-pointer"
          src={"/assets/svg/corner-right.svg"}
          alt="corner-right.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
        <Image
          className="absolute left-[20%] top-[15%] z-10 w-[30px] -translate-y-1/2 cursor-pointer"
          src={"/assets/svg/corner-left.svg"}
          alt="corner-left.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
        <Image
          className="absolute bottom-[15%] left-[20%] z-10 w-[30px] -translate-y-1/2 cursor-pointer"
          src={"/assets/svg/corner-left.svg"}
          alt="corner-left.svg"
          width={100}
          height={40}
          draggable={false}
          quality={100}
        />
      </div>
      <div className="absolute top-[50%] h-full w-full -translate-y-[50%]">
        <div
          className={`absolute flex h-full w-1/2 items-center justify-center ${
            getDefenderStyles().containerStyles
          }`}
        >
          <Image
            className={`w-full transition-all ${
              getDefenderStyles().imageStyles
            }`}
            src={
              activeIndex === 1
                ? "/assets/png/robot-DEFENDER-front.png"
                : "/assets/png/robot-DEFENDER.png"
            }
            alt="DEFENDER.png"
            width={1907}
            height={1003}
            draggable={false}
            quality={100}
          />
        </div>

        <div
          className={`absolute flex h-full w-1/2 items-center justify-center ${
            getStrikerStyles().containerStyles
          }`}
        >
          <Image
            className={`w-full transition-all ${
              getStrikerStyles().imageStyles
            }`}
            src={
              activeIndex === 0
                ? "/assets/png/robot-STRIKER-front.png"
                : "/assets/png/robot-STRIKER.png"
            }
            alt="STRIKER.png"
            width={1907}
            height={1003}
            draggable={false}
            quality={100}
          />
        </div>

        <div
          className={`absolute flex h-full w-1/2 items-center justify-center ${
            getRunnerStyles().containerStyles
          }`}
        >
          <Image
            className={`w-full transition-all ${getRunnerStyles().imageStyles}`}
            src={
              activeIndex === -1
                ? "/assets/png/robot-RUNNER-front.png"
                : "/assets/png/robot-RUNNER.png"
            }
            alt="RUNNER.png"
            width={1907}
            height={1003}
            draggable={false}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default GladiatorGalleryDesktop;
