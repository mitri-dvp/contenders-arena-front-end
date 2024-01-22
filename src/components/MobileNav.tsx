import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Cross2Icon } from "@radix-ui/react-icons";

import { useScrollPosition } from "~/hooks/useScrollPosition";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { isAtTopOfPage } = useScrollPosition(64);

  const router = useRouter();
  const isHome = router.pathname === "";

  useEffect(() => {
    if (open) document.body.classList.add("ovh");
    if (!open) document.body.classList.remove("ovh");
  }, [open]);

  return (
    <nav
      className={`${
        isAtTopOfPage ? "bg-transparent" : "bg-dark-primary pb-4"
      } fixed w-full transition-all lg:hidden`}
    >
      <Link href={"/"}>
        <Image
          className="mx-auto w-1/2 pt-8"
          src={"/assets/svg/logo.svg"}
          alt="contenders-arena-logo.svg"
          width={300}
          height={100}
        />
      </Link>

      <Image
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-8 mx-auto w-8 cursor-pointer"
        src={"/assets/svg/mobile-menu.svg"}
        alt="mobile-menu.svg"
        width={32}
        height={32}
      />
      <div
        className={`absolute right-0 top-0 min-h-screen w-full ${
          open ? "translate-x-0" : "translate-x-full"
        } bg-dark-primary text-green-primary transition-transform`}
      >
        <button
          className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <Cross2Icon />
        </button>
        <ul className="flex min-h-screen flex-col items-center justify-center gap-4  font-primary text-lg font-light uppercase text-white">
          <Link
            onClick={() => setOpen(false)}
            href={isHome ? "#video" : "/#video"}
          >
            Gameplay
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={isHome ? "#community" : "/#community"}
          >
            Community
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={isHome ? "#striker" : "/#striker"}
          >
            More
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={
              "https://store.steampowered.com/app/2445510/Contenders_Arena/"
            }
            className="flex h-14 items-center bg-button bg-contain bg-center bg-no-repeat px-12 font-primary-cond font-semibold text-black xl:px-16 xl:text-2xl"
          >
            Wishlist Now
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
