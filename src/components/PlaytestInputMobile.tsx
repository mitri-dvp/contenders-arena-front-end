import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { EmailResponse, joinPlaytest } from "~/utils/playtest";
import LoadingSpinner from "./LoadingSpinner";

const PlaytestInputMobile = ({
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
        onChange={(e) => setEmail(e.target.value)}
        className="absolute bottom-[20%] left-[10%] w-[40%] bg-transparent font-primary-cond text-sm text-white outline-none sm:text-3xl md:text-4xl"
        placeholder="EMAIL ADDRESS"
      />
      <button className="absolute bottom-[5%] right-[1%] h-[85%] w-[49%] items-center justify-center  bg-transparent font-primary-cond text-sm font-semibold uppercase text-black sm:text-3xl md:text-4xl">
        {loading ? (
          <LoadingSpinner className="absolute left-[25%] top-[25%] h-[50%] w-[50%]  animate-spin fill-dark-primary text-white xl:h-8 xl:w-8" />
        ) : (
          "Join"
        )}
      </button>
    </form>
  );
};

export default PlaytestInputMobile;
