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
        onChange={(e) => setEmail(e.target.value)}
        className="absolute bottom-[20%] left-[10%] w-[40%] bg-transparent font-primary-cond text-sm text-white outline-none"
        placeholder="EMAIL ADDRESS"
      />
      <button className="absolute bottom-[5%] right-[1%] h-[85%] w-[49%] items-center justify-center  bg-transparent font-primary-cond text-sm font-semibold uppercase text-black">
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
