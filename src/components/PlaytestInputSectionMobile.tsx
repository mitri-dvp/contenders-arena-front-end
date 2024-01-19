import Image from "next/image";
import React, { useState } from "react";
import { validateEmail } from "~/utils/email";
import { EmailResponse, joinPlaytest } from "~/utils/playtest";
import LoadingSpinner from "./LoadingSpinner";

const PlaytestInputSectionMobile = ({
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
      className="absolute top-[50%] w-full"
    >
      <div className="relative mx-auto w-max">
        <Image
          className="mx-auto mb-[2.5%]"
          src={"/assets/svg/mobile-ready-email.svg"}
          alt="mobile-ready-email.svg"
          width={337}
          height={40}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="absolute left-[20%] top-[8%] h-[80%] w-[70%] bg-transparent font-primary-cond text-white outline-none"
          placeholder="EMAIL ADDRESS"
        />
      </div>
      <div className="relative">
        <Image
          className="mx-auto"
          src={"/assets/svg/mobile-ready-playtest.svg"}
          alt="mobile-ready-playtest.svg"
          width={337}
          height={40}
        />
        <button className="absolute left-[7%] top-[0%] flex h-[100%] w-[86%] items-center justify-center bg-transparent font-primary-cond text-xl font-semibold uppercase text-black 2xl:text-2xl">
          {loading ? (
            <LoadingSpinner className="h-6 w-6 animate-spin fill-dark-primary text-white" />
          ) : (
            "Join"
          )}
        </button>
      </div>
    </form>
  );
};

export default PlaytestInputSectionMobile;
