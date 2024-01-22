import Image from "next/image";
import React, { useState } from "react";

const VideoOne = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <Image
        className="w-full"
        src={"/assets/png/video-section.png"}
        alt="video-section.png"
        width={1920}
        height={1903}
        draggable={false}
        quality={100}
      />
      {clicked ? (
        <iframe
          className={`absolute top-0 aspect-[1920/1084] w-full ${
            clicked ? "block" : "hidden"
          }`}
          src="https://www.youtube.com/embed/gq_s3AN1Le0?autoplay=1&controls=0&rel=0&mute=1"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay; modestbranding;"
          allowFullScreen
        />
      ) : null}
    </div>
  );
};

export default VideoOne;
