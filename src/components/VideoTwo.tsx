import Image from "next/image";
import React, { useState } from "react";

const VideoTwo = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <div className="hidden lg:block">
        <Image
          className="w-full"
          src={"/assets/png/video2-section.png"}
          alt="video2-section.png"
          width={1920}
          height={1702}
          draggable={false}
          quality={100}
        />
      </div>
      <div className="relative lg:hidden">
        <Image
          className="w-full"
          src={"/assets/png/mobile-video.png"}
          alt="mobile-video.png"
          width={393}
          height={219}
          draggable={false}
          quality={100}
        />
      </div>
      {clicked ? (
        <iframe
          className={`absolute top-0 aspect-[1920/1084] w-full ${
            clicked ? "block" : "hidden"
          }`}
          src="https://www.youtube.com/embed/eawbigugTDI?autoplay=1&controls=0&rel=0&mute=1"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay; modestbranding;"
          allowFullScreen
        />
      ) : null}
    </div>
  );
};

export default VideoTwo;
