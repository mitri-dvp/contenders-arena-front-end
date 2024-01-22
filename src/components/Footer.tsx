import Image from "next/image";
import Link from "next/link";

const Footer = ({ className }: { className: string }) => {
  return (
    <footer className={className}>
      <div className="mx-auto flex w-full max-w-[1472px] flex-col items-center gap-10 px-[10%] md:flex-row md:justify-between md:gap-0">
        <Image
          src={"/assets/svg/logo.svg"}
          alt="contenders-arena-logo.svg"
          width={400}
          height={100}
        />
        <div className="relative flex w-1/2 justify-between gap-4 md:w-[27%] md:gap-2">
          <div>
            <div className="font-primary text-xs text-green-primary md:text-sm">
              From:
            </div>
            <Image
              className="w-[200px] md:w-[150px]"
              src={"/assets/svg/gamecan-logo.svg"}
              alt="gamecan-logo.svg"
              width={300}
              height={100}
            />
          </div>
          <div>
            <Image
              className="mt-2.5 w-[100px] md:mt-[15%] md:w-[75px]"
              src={"/assets/png/gamecan-rating.png"}
              alt="gamecan-rating.png"
              width={300}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1472px] flex-col items-center justify-between gap-10 px-[10%] font-primary text-xs uppercase text-zinc-300 md:flex-row md:justify-between md:gap-2 xl:text-sm 2xl:gap-8 2xl:text-sm">
        <div className="relative w-5/6 md:w-1/3">
          <Image
            className="w-full"
            src={"/assets/svg/footer-socials.svg"}
            alt="footer-socials.svg"
            width={350}
            height={100}
          />
          <div className="absolute left-0 top-0 flex h-full w-full justify-between gap-[2%] px-[5%]">
            <Link
              href={"https://www.tiktok.com/@contendersarena"}
              className="block h-full w-full"
            />
            <Link
              href={"https://twitter.com/contendersarena"}
              className="block h-full w-full"
            />
            <Link
              href={"https://www.youtube.com/@ContendersArena"}
              className="block h-full w-full"
            />
            <Link
              href={"https://www.facebook.com/contendersarena"}
              className="block h-full w-full"
            />
            <Link
              href={"https://www.instagram.com/contendersarena/"}
              className="block h-full w-full"
            />
            <Link
              href={"https://www.reddit.com/r/contendersuniverse/"}
              className="block h-full w-full"
            />
            <Link
              href={"https://www.twitch.tv/directory/category/contenders-arena"}
              className="block h-full w-full"
            />
            <Link
              href={"https://discord.com/invite/contenders"}
              className="block h-full w-full"
            />
          </div>
        </div>
        <div className="w-max">
          <ul className="flex flex-col justify-around gap-4 text-center font-light md:flex-row md:text-center lg:gap-2 xl:gap-4">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"https://careers.gamecan.eu/"}>Carrers</Link>
            <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
          </ul>
        </div>
        <div className="w-max text-center font-light text-green-primary md:text-right">
          &copy; 2023 Galaxy Racer. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
