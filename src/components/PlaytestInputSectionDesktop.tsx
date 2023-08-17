import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { joinPlaytest } from "~/utils/playtest";

const PlaytestInputSectionDesktop = () => {
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (validateEmail(email)) joinPlaytest(email);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="mx-auto mt-[3%] flex w-full max-w-[900px] gap-[2%] 2xl:mt-[3%] 2xl:max-w-[1080px]"
    >
      <div className="flex aspect-[962/90] w-[75%] flex-shrink-0 items-center bg-ready-email-input bg-contain bg-no-repeat">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="ml-[12%] w-[85%] bg-transparent font-primary-cond text-2xl text-white outline-none"
          placeholder="EMAIL ADDRESS"
        />
      </div>
      <button className="flex w-full translate-y-[5%] scale-[1.075] items-center justify-center bg-button bg-contain bg-no-repeat font-primary-cond text-xl font-semibold uppercase text-black 2xl:text-2xl">
        <span className="-translate-y-[8%]">Join the Playtest</span>
      </button>
    </form>
  );
};

export default PlaytestInputSectionDesktop;
