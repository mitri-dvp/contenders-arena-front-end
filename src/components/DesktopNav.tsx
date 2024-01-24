import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNav = () => {
  const router = useRouter();
  const isHome = router.pathname === "";

  return (
    <nav className="mx-auto hidden w-full max-w-[1472px] justify-between px-8 pt-16 lg:flex">
      <Link href={"/"}>
        <Image
          src={"/assets/svg/logo.svg"}
          alt="contenders-arena-logo.svg"
          width={300}
          height={100}
        />
      </Link>

      <ul className="flex items-center gap-4 font-primary text-lg uppercase text-white xl:text-xl 2xl:gap-8">
        <Link className="hover:underline" href={isHome ? "#video" : "/#video"}>
          Gameplay
        </Link>
        <Link
          className="hover:underline"
          href={isHome ? "#community" : "/#community"}
        >
          Community
        </Link>
        <Link
          className="hover:underline"
          href={isHome ? "#striker" : "/#striker"}
        >
          More
        </Link>
        <Link
          href={"https://store.steampowered.com/app/2445510/Contenders_Arena/"}
          className="flex h-14 items-center bg-button bg-contain bg-center bg-no-repeat px-12 font-primary-cond font-semibold text-black xl:px-16 xl:text-2xl"
        >
          Wishlist Now
        </Link>
        <div className="relative">
          <div className="text-sm text-green-primary">From:</div>
          <Image
            className="w-[150px]"
            src={"/assets/svg/gamecan-logo.svg"}
            alt="gamecan-logo.svg"
            width={300}
            height={100}
          />
        </div>
      </ul>
    </nav>
  );
};

export default DesktopNav;
