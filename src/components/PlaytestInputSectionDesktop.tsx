import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { EmailResponse, joinPlaytest } from "~/utils/playtest";
import LoadingSpinner from "./LoadingSpinner";

const PlaytestInputSectionDesktop = ({
  setEmailReponse,
}: {
  setEmailReponse: (emailResponse: EmailResponse) => void;
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    if (loading) return;
    if (!validateEmail(email)) return;

    setLoading(true);
    setEmailReponse(await joinPlaytest(email));
    setLoading(false);
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
        <span className="-translate-y-[8%]">
          {loading ? (
            <LoadingSpinner className="h-6 w-6 animate-spin fill-dark-primary text-white xl:h-8 xl:w-8" />
          ) : (
            "Join"
          )}
        </span>
      </button>
    </form>
  );
};

export default PlaytestInputSectionDesktop;
