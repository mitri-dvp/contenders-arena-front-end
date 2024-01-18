import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { joinPlaytest } from "~/utils/playtest";

const PlaytestInputMobile = () => {
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
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="absolute bottom-[20%] left-[10%] w-[40%] bg-transparent font-primary-cond text-sm text-white outline-none"
        placeholder="EMAIL ADDRESS"
      />
      <button className="absolute bottom-[5%] right-[1%] h-[85%] w-[49%] items-center justify-center  bg-transparent font-primary-cond text-sm font-semibold uppercase text-black">
        Join
      </button>
    </form>
  );
};

export default PlaytestInputMobile;
