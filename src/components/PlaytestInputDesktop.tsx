import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { joinPlaytest } from "~/utils/playtest";

const PlaytestInputDesktop = () => {
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
        className="absolute left-[14%] top-[8%] h-[12%] w-[25%] bg-transparent font-primary-cond text-white outline-none"
        placeholder="EMAIL ADDRESS"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        typeof="submit"
        className="absolute left-[43.3%] top-[2%] flex h-[28%] w-[37%] items-center justify-center bg-transparent font-primary-cond text-xl font-semibold uppercase text-black 2xl:text-2xl"
      >
        Join
      </button>
    </form>
  );
};

export default PlaytestInputDesktop;
