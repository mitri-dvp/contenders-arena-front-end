import Image from "next/image";
import React, { useState } from "react";

const VideoOne = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <iframe
        className={`aspect-[1920/1084] w-full`}
        src="https://www.youtube.com/embed/gq_s3AN1Le0?autoplay=1&controls=0&rel=0&mute=1&loop=1&controls=0&showinfo=0&playlist=gq_s3AN1Le0"
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay; modestbranding;"
        allowFullScreen
      />
    </div>
  );
};

export default VideoOne;
