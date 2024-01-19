import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

import { EmailResponse } from "~/utils/playtest";

const EmailModal = ({ emailResponse }: { emailResponse: EmailResponse }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (emailResponse.success) setOpen(true);
    if (emailResponse.error) setOpen(true);
  }, [emailResponse]);

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-25 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border border-green-primary bg-dark-secondary p-[25px] font-primary-cond text-xl text-green-primary shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-mauve12 m-0 text-2xl font-medium">
            {emailResponse.success ? "Success!" : ""}
            {emailResponse.error ? "Error" : ""}
          </Dialog.Title>
          <Dialog.Description className=" mb-5 mt-[10px] text-base leading-normal">
            {emailResponse.message}
          </Dialog.Description>
          <div className="mt-[25px] flex justify-end gap-4">
            {emailResponse.success && (
              <button
                className="inline-flex items-center justify-center rounded-[4px] bg-green-primary px-8 py-2 font-medium leading-none text-dark-secondary focus:shadow-[0_0_0_2px] focus:outline-none"
                onClick={() => setOpen(false)}
              >
                Okay
              </button>
            )}
            {emailResponse.error && (
              <button
                className="inline-flex items-center justify-center rounded-[4px] bg-green-primary px-8 py-2 font-medium leading-none text-dark-secondary focus:shadow-[0_0_0_2px] focus:outline-none"
                onClick={() => setOpen(false)}
              >
                Try Again
              </button>
            )}
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

export default EmailModal;
