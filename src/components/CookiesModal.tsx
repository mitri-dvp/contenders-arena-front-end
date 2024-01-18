import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

type CookiesOptions = "accept" | "reject";

const CookiesModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cookies = localStorage.getItem("cookies") as CookiesOptions | null;
    setTimeout(() => {
      if (cookies !== "accept" && cookies !== "reject") setOpen(true);
    }, 1000);
  }, []);

  const setCookies = (value: CookiesOptions) => {
    localStorage.setItem("cookies", value);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-25 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border border-green-primary bg-dark-secondary p-[25px] font-primary-cond text-xl text-green-primary shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium">
            Notice
          </Dialog.Title>
          <Dialog.Description className=" mb-5 mt-[10px] text-base leading-normal">
            We and selected third parties use cookies or similar technologies
            for technical purposes only and, with your consent, for other
            purposes as specified in the{" "}
            <Link className="underline" href={"#"}>
              Cookie Policy
            </Link>
            .
            <br />
            Use the &quot;Accept&quot; button to consent. use the
            &quot;Reject&quot; button or close this notice without accepting.
          </Dialog.Description>
          <div className="mt-[25px] flex justify-end gap-4">
            <button
              className="inline-flex items-center justify-center rounded-[4px]  border border-green-primary px-8 py-2 font-medium leading-none text-green-primary focus:shadow-[0_0_0_2px] focus:outline-none"
              onClick={() => setCookies("reject")}
            >
              Reject
            </button>
            <button
              className="inline-flex items-center justify-center rounded-[4px] bg-green-primary px-8 py-2 font-medium leading-none text-dark-secondary focus:shadow-[0_0_0_2px] focus:outline-none"
              onClick={() => setCookies("accept")}
            >
              Accept
            </button>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CookiesModal;
