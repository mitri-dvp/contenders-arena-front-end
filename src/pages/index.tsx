import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import MobileNav from "~/components/MobileNav";
import DesktopNav from "~/components/DesktopNav";

import GladiatorCardsDesktop from "~/components/GladiatorCardsDesktop";
import GladiatorGalleryDesktop from "~/components/GladiatorGalleryDesktop";
import GladiatorGalleryMobile from "~/components/GladiatorGalleryMobile";
import PlaytestInputDesktop from "~/components/PlaytestInputDesktop";
import PlaytestInputSectionDesktop from "~/components/PlaytestInputSectionDesktop";
import PlaytestInputMobile from "~/components/PlaytestInputMobile";
import PlaytestInputSectionMobile from "~/components/PlaytestInputSectionMobile";
import VideoOne from "~/components/VideoOne";
import VideoTwo from "~/components/VideoTwo";
import CookiesModal from "~/components/CookiesModal";
import EmailModal from "~/components/EmailModal";
import { EmailResponse } from "~/utils/playtest";
import Footer from "~/components/Footer";

export default function Home() {
  // Slides
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    if (activeIndex === 1) return setActiveIndex(-1);
    setActiveIndex(activeIndex + 1);
  };
  const slideNext = () => {
    if (activeIndex === -1) return setActiveIndex(1);
    setActiveIndex(activeIndex - 1);
  };

  // Email
  const [emailReponse, setEmailReponse] = useState<EmailResponse>({
    message: "",
    success: false,
    error: false,
  });

  return (
    <>
      <Head>
        <title>Contenders Arena</title>
        <meta
          name="description"
          content="Contenders: Arena is an exhilarating 3v3 shooter that takes you into a world of fast-paced action, strategic gameplay, and thrilling competition. Become the skilled pilot of a new kind of gladiator and prepare to engage in intense battles unlike anything you've experienced before!"
        />
        <meta
          name="keywords"
          content="contenders, contenders arena, Gamecan, galaxy racer, contenders steam, contenders arena steam, contenders arena beta, contenders steam nextfest"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="absolute z-20 w-full">
        <DesktopNav />
        <MobileNav />
      </header>
      <main className="min-h-screen w-[100vw] overflow-hidden">
        <section className="w-full">
          <div className="relative hidden lg:block">
            <Image
              className="relative w-full select-none object-contain"
              src={"/assets/png/contenders_hero_robot_1.png"}
              alt="contenders_hero_robot_1.png"
              width={1920}
              height={1104}
              draggable={false}
              quality={100}
            />
            <Image
              className="absolute top-0 z-10 w-full select-none object-contain"
              src={"/assets/png/contenders_hero_robot_2.png"}
              alt="contenders_hero_robot_2.png"
              width={1920}
              height={1104}
              draggable={false}
              quality={100}
            />
            <div className="absolute top-0 h-full w-full">
              <h1 className="relative left-[10%] top-[25%] mx-auto w-full max-w-[1150px] font-primary-cond text-7xl font-extrabold uppercase italic text-green-primary xl:text-8xl 2xl:left-[5%] 2xl:text-9xl 2xl:leading-[0.85] 3xl:left-0">
                a new <br /> class
              </h1>
              <h1 className="relative left-[10%] top-[25%] z-10 mx-auto w-full max-w-[1150px] font-primary-cond text-7xl font-extrabold uppercase italic text-white xl:text-8xl 2xl:left-[5%] 2xl:text-9xl 3xl:left-0">
                of gladiators
              </h1>
              <h1 className="relative left-[15%] top-[25%] z-10 mx-auto w-full max-w-[1150px] translate-x-[64px] translate-y-[16px] font-primary-cond text-2xl font-extrabold uppercase italic text-white lg:text-3xl xl:left-[10%] xl:text-4xl 2xl:left-[5%] 2xl:text-6xl 3xl:left-0">
                {/* are you ready for */}
                <br />
                <Link href={"#video"}>
                  <Image
                    className="absolute bottom-0 translate-y-[60px] xl:translate-y-[70px] 3xl:translate-y-[88px]"
                    src={"/assets/svg/chevron-down.svg"}
                    alt="chevron-down.svg"
                    width={50}
                    height={37}
                    draggable={false}
                    quality={100}
                  />
                </Link>
              </h1>
            </div>
            <div className="absolute bottom-[6%] right-0 z-10 w-full">
              <Image
                className="absolute bottom-[6%] right-[3.75%] aspect-[987/277] w-[51%]"
                src={"/assets/png/hero-decoration-email.png"}
                alt="hero-decoration-email.png"
                width={987}
                height={277}
                draggable={false}
                quality={100}
              />
              <div className="absolute bottom-[6%] right-[4%] aspect-[987/277] w-[51%]">
                <Image
                  className="absolute left-[8%] top-[8%] w-[3.5%]"
                  src={"/assets/svg/email.svg"}
                  alt="email.svg"
                  width={33}
                  height={33}
                  draggable={false}
                  quality={100}
                />
                <PlaytestInputDesktop setEmailReponse={setEmailReponse} />
              </div>
            </div>
          </div>
          <div className="relative aspect-[393/350] w-full bg-mobile-hero-background bg-contain bg-no-repeat lg:hidden">
            <div className="absolute bottom-8 w-full">
              <div className="relative w-full px-7">
                <h1 className="px-4 font-primary-cond text-4xl uppercase italic text-green-primary sm:text-6xl md:text-7xl">
                  a new class
                </h1>
                <h1 className="px-4 text-right font-primary-cond text-4xl uppercase italic text-white sm:text-6xl md:text-7xl">
                  of gladiators
                </h1>
                <div className="relative">
                  <Image
                    className="mx-auto mt-2 w-full"
                    src={"/assets/svg/mobile-menu-email.svg"}
                    alt="mobile-menu-email.svg"
                    width={300}
                    height={100}
                  />
                  <PlaytestInputMobile setEmailReponse={setEmailReponse} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="video">
          <VideoOne />
        </section>
        <section>
          <div className="relative lg:hidden">
            <div className="absolute h-full w-full">
              ``{" "}
              <h1 className="absolute top-[40%] w-full text-center font-primary-cond text-4xl font-bold uppercase italic leading-8 text-green-primary sm:text-5xl md:text-6xl">
                fast-paced action,
                <br /> strategic gameplay,
                <br /> thrilling competition.
              </h1>
              <p className="absolute top-[66%] w-full text-center font-primary-cond text-sm font-light leading-4 text-white sm:text-xl sm:leading-5 md:text-2xl md:leading-6">
                Contenders: Arena is an exhilarating 3v3 shooter that takes you
                into a world of <br /> fast-paced action, strategic gameplay,
                and thrilling competition. Become the <br /> skilled pilot of a
                new kind of gladiator and prepare to engage in intense <br />
                battles unlike anything you&apos;ve experienced before!
              </p>
              <div className="absolute top-[85%] flex w-full justify-between px-7">
                <Link
                  href={
                    "https://store.steampowered.com/app/2445510/Contenders_Arena/"
                  }
                  className="flex h-8 w-max items-center bg-button-steam bg-contain bg-center bg-no-repeat pl-4 pr-20 font-primary-cond text-xs font-light uppercase tracking-tight text-white sm:h-16 sm:pr-28 sm:text-lg"
                >
                  coming soon to
                </Link>
                <Link
                  href={
                    "https://store.steampowered.com/app/2445510/Contenders_Arena/"
                  }
                  className="flex h-8 items-center bg-button bg-contain bg-center bg-no-repeat px-8 font-primary-cond text-xs font-semibold uppercase text-black sm:h-16 sm:text-lg"
                >
                  Wishlist Now!
                </Link>
              </div>
            </div>
            <Image
              className="w-full"
              src={"/assets/png/mobile-steam-section.png"}
              alt="mobile-steam-section.png"
              width={393}
              height={426}
              draggable={false}
              quality={100}
            />
          </div>
        </section>
        <section className="relative" id="community">
          <div className="hidden lg:block">
            <div className="absolute mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-[10%]">
              <h1 className="font-primary-cond text-5.5xl font-bold uppercase italic text-green-primary xl:text-6xl 2xl:left-0 2xl:text-7xl ">
                fast-paced action, <br /> strategic gameplay, <br />
                thrilling competition.
              </h1>
              <p className="mt-[1.5%] font-primary-cond text-xl font-light text-white xl:mt-[3%] 2xl:text-2xl">
                Contenders: Arena is an exhilarating 3v3 shooter that takes you
                into a world of fast-paced <br /> action, strategic gameplay,
                and thrilling competition. Become the skilled pilot of a new{" "}
                <br />
                kind of gladiator and prepare to engage in intense battles
                unlike anything you&apos;ve <br /> experienced before!
              </p>
              <div className="mt-[1.5%] flex gap-[2%] xl:mt-[3%]">
                <Link
                  href={
                    "https://store.steampowered.com/app/2445510/Contenders_Arena/"
                  }
                  className="flex h-16 w-max items-center bg-button-steam bg-contain bg-center bg-no-repeat pl-4 pr-36 font-primary-cond text-xl font-light uppercase tracking-tight text-white"
                >
                  coming soon to
                </Link>
                <Link
                  href={
                    "https://store.steampowered.com/app/2445510/Contenders_Arena/"
                  }
                  className="flex h-16 items-center bg-button bg-contain bg-center bg-no-repeat px-12 font-primary-cond text-xl font-semibold uppercase text-black"
                >
                  Wishlist Now!
                </Link>
              </div>
            </div>

            <Image
              className="w-full"
              src={"/assets/png/steam-section.png"}
              alt="steam-section.png"
              width={1920}
              height={1084}
              draggable={false}
              quality={100}
            />

            <Image
              className="absolute left-[43.3%] top-[16.4%] z-20 w-[11.56%]"
              src={"/assets/png/stricker-section-hand.png"}
              alt="stricker-section-hand.png"
              width={1920}
              height={1084}
              draggable={false}
              quality={100}
            />

            <GladiatorGalleryDesktop
              activeIndex={activeIndex}
              slidePrev={slidePrev}
              slideNext={slideNext}
            />
          </div>
        </section>
        <section id="striker">
          <div className="hidden lg:block">
            <GladiatorCardsDesktop
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <Image
              className="w-full"
              src={"/assets/png/corporate-section.png"}
              alt="corporate-section.png"
              width={1920}
              height={932}
              draggable={false}
              quality={100}
            />
          </div>
          <div className="relative lg:hidden">
            <GladiatorGalleryMobile />
          </div>
        </section>
        <div className="relative lg:hidden">
          <div className="absolute w-full">
            <div className="relative aspect-[393/241] w-full bg-mobile-card-background bg-contain bg-no-repeat">
              <div className="absolute h-full w-full">
                <Image
                  className="ml-[9%] mt-[15%] w-[20%]"
                  src={"/assets/svg/corporate-vector.svg"}
                  alt="corporate-vector.svg"
                  width={254}
                  height={202}
                  draggable={false}
                  quality={100}
                />
                <h1 className="absolute left-[35%] top-[24%] font-owners-wide text-xl font-bold uppercase leading-4 text-green-primary sm:text-4xl sm:leading-8">
                  VECTOR <br />
                  CORP.
                </h1>
                <p className="absolute left-[35%] top-[42%] font-primary-cond text-xs font-light uppercase leading-3 text-white sm:text-xl sm:leading-5">
                  Vector gladiators are built for pursuit <br /> and seizure,
                  applying superior agility
                  <br /> and tracking capabilities.
                </p>
              </div>
            </div>
            <div className="relative aspect-[393/241] w-full -translate-y-[35%] bg-mobile-card-background bg-contain bg-no-repeat">
              <div className="absolute h-full w-full">
                <Image
                  className="ml-[9%] mt-[18%] w-[20%]"
                  src={"/assets/svg/corporate-gunn.svg"}
                  alt="corporate-gunn.svg"
                  width={284}
                  height={184}
                  draggable={false}
                  quality={100}
                />
                <h1 className="absolute left-[35%] top-[24%] font-owners-wide text-xl font-bold uppercase leading-4 text-green-primary sm:text-4xl sm:leading-8">
                  GUNN <br />
                  INDUSTRIES
                </h1>
                <p className="absolute left-[35%] top-[42%] font-primary-cond text-xs font-light uppercase leading-3 text-white sm:text-xl sm:leading-5">
                  GUNN gladiators are built to withstand attacks
                  <br /> and inflict maximum damage. They may not be as
                  <br /> agile as others, but they can pack a punch.
                </p>
              </div>
            </div>
            <div className="relative aspect-[393/241] w-full -translate-y-[70%] bg-mobile-card-background bg-contain bg-no-repeat">
              <div className="absolute h-full w-full">
                <Image
                  className="ml-[9%] mt-[18%] w-[20%]"
                  src={"/assets/svg/corporate-shift.svg"}
                  alt="corporate-shift.svg"
                  width={326}
                  height={196}
                  draggable={false}
                  quality={100}
                />
                <h1 className="absolute left-[35%] top-[24%] font-owners-wide text-xl font-bold uppercase leading-4 text-green-primary sm:text-4xl sm:leading-8">
                  SHIFT
                </h1>
                <p className="absolute left-[35%] top-[38%] font-primary-cond text-xs font-light uppercase leading-3 text-white sm:text-xl sm:leading-5">
                  Shift gladiators are built for support. capable <br /> of
                  self-repair and protecting teammates.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="w-full"
            src={"/assets/png/mobile-corporate-background.png"}
            alt="mobile-corporate-background.png"
            width={393}
            height={510}
            draggable={false}
            quality={100}
          />
        </div>
        <section>
          <div className="hidden lg:block">
            <div className="absolute mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-[5%]">
              <h1 className="font-primary-cond text-4.5xl font-bold uppercase italic text-green-primary xl:text-5xl 2xl:left-0 2xl:text-7xl ">
                do you have <br />
                what it takes?
              </h1>
              <p className="mt-[1%] font-primary-cond text-xl font-light uppercase text-white 2xl:mt-[1.5%] 2xl:text-2xl 3xl:mt-[3%]">
                We are working with experts and the community to build the
                <br />
                ultimate combat experience. If you think you&apos;ve got what it
                <br />
                takes, join our Test-Pilot Program for insider information and
                <br />
                early access.
              </p>
              <div className="mt-[1%] flex gap-[2%] 2xl:mt-[1.5%] 3xl:mt-[3%]">
                <Link
                  href={"https://discord.com/invite/contenders"}
                  className="flex h-16 w-max items-center bg-button-discord bg-contain bg-center bg-no-repeat pl-20 pr-8 font-primary-cond text-xl font-bold uppercase tracking-tight text-green-primary"
                >
                  Join Discord Community
                </Link>
              </div>
            </div>

            <Image
              className="w-full"
              src={"/assets/png/discord-section.png"}
              alt="discord-section.png"
              width={1920}
              height={754}
              draggable={false}
              quality={100}
            />
          </div>
          <div className="relative lg:hidden">
            <div>
              <Image
                className="w-full"
                src={"/assets/png/mobile-discord-robots.png"}
                alt="mobile-discord-robots.png"
                width={393}
                height={296}
                draggable={false}
                quality={100}
              />
            </div>
            <div className="relative">
              <Image
                className="h-[40vh] w-full"
                src={"/assets/png/mobile-discord-background.png"}
                alt="mobile-discord-background.png"
                width={393}
                height={296}
                draggable={false}
                quality={100}
              />
              <div className="absolute top-0 h-full w-full">
                <h1 className="absolute top-[10%] w-full text-center font-primary-cond text-4xl font-bold uppercase italic leading-9 text-green-primary sm:text-5xl md:text-6xl">
                  do you have <br />
                  what it takes?
                </h1>
                <p className="absolute top-[45%] w-full text-center font-primary-cond text-sm font-light leading-4 text-white sm:text-xl sm:leading-5 md:text-2xl md:leading-6">
                  We are working with experts and the community to build the
                  <br />
                  ultimate combat experience. If you think you&apos;ve got what
                  it
                  <br />
                  takes, join our Test-Pilot Program for insider information and
                  <br />
                  early access.
                </p>
                <div className="absolute top-[75%] mx-auto w-full">
                  <button className="mx-auto flex h-16 w-max scale-75 items-center bg-button-discord bg-contain bg-center bg-no-repeat pl-20 pr-8 font-primary-cond text-xl font-bold uppercase tracking-tight text-green-primary sm:scale-100">
                    Join Discord Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="playtest">
          <div className="hidden lg:block">
            <div className="absolute mx-auto w-full  justify-between px-[10%] pt-[8%] 2xl:pt-[12%]">
              <h1 className="text-center font-primary-cond text-8xl font-bold uppercase italic text-green-primary xl:text-9xl 2xl:left-0 2xl:text-11xl">
                ARE YOU READY
              </h1>
              <p className="mt-[2%] text-center font-primary-cond text-4xl font-light uppercase text-white xl:text-4.5xl 2xl:mt-[7%] 2xl:text-5.5xl">
                A NEW CLASS OF GLADIATORS ARE READY FOR THEIR ARENA!
              </p>
              <PlaytestInputSectionDesktop setEmailReponse={setEmailReponse} />
            </div>

            <Image
              className="w-full"
              src={"/assets/png/ready-section.png"}
              alt="ready-section.png"
              width={1920}
              height={1702}
              draggable={false}
              quality={100}
            />
          </div>
          <div className="relative lg:hidden">
            <Image
              className="h-[40vh] w-full"
              src={"/assets/png/mobile-ready-background.png"}
              alt="mobile-ready-background.png"
              width={393}
              height={296}
              draggable={false}
              quality={100}
            />
            <div className="absolute top-0 h-full w-full">
              <h1 className="absolute top-[15%] w-full text-center font-primary-cond text-5xl font-bold uppercase italic text-green-primary sm:text-5xl md:text-6xl">
                ARE YOU READY
              </h1>
              <p className="absolute top-[35%] w-full text-center font-primary-cond text-lg font-light uppercase text-white  sm:text-xl sm:leading-5 md:text-2xl md:leading-6">
                A NEW CLASS OF GLADIATORS ARE READY FOR THEIR ARENA!
              </p>
              <PlaytestInputSectionMobile setEmailReponse={setEmailReponse} />
            </div>
          </div>
        </section>
        <Footer className="flex flex-col justify-between gap-10 bg-dark-primary py-10 md:gap-20 md:py-20" />
        <CookiesModal />
        <EmailModal emailResponse={emailReponse} />
      </main>
    </>
  );
}
