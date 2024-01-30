import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { EmailResponse, joinPlaytest } from "~/utils/playtest";
import LoadingSpinner from "./LoadingSpinner";
import Image from "next/image";

const PlaytestInputDesktop = ({
  setEmailReponse,
}: {
  setEmailReponse: (emailResponse: EmailResponse) => void;
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (loading) return;
    if (!validateEmail(email)) return;

    setLoading(true);
    joinPlaytest(email)
      .then((value) => setEmailReponse(value))
      .catch((err) => console.log(err));
    setLoading(false);
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
        className="absolute left-[43.3%] top-[2%] flex h-[28%] w-[37%] items-center justify-center bg-transparent font-primary-cond text-xl font-semibold uppercase text-black transition hover:opacity-75 2xl:text-2xl"
      >
        <Image
          className="absolute right-[-1px] top-[0%] aspect-[367/76] w-[100.25%] max-w-none"
          src={"/assets/png/hero-decoration-email-button-background.png"}
          alt="hero-decoration-email-button-background.png"
          width={367}
          height={76}
          draggable={false}
          quality={100}
        />
        <div className="z-10">
          {loading ? (
            <LoadingSpinner className="h-5 w-5 animate-spin fill-dark-primary text-white xl:h-8 xl:w-8" />
          ) : (
            "Join"
          )}
        </div>
      </button>
    </form>
  );
};

export default PlaytestInputDesktop;
