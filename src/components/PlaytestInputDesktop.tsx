import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { EmailResponse, joinPlaytest } from "~/utils/playtest";
import LoadingSpinner from "./LoadingSpinner";

const PlaytestInputDesktop = ({
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
        {loading ? (
          <LoadingSpinner className="h-5 w-5 animate-spin fill-dark-primary text-white xl:h-8 xl:w-8" />
        ) : (
          "Join"
        )}
      </button>
    </form>
  );
};

export default PlaytestInputDesktop;
