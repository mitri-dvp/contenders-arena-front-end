import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contenders Arena</title>
        <meta name="description" content="DESCRIPTION" />
        <link rel="icon" href="ICON" />
      </Head>
      <header className="absolute z-20 w-full">
        <nav className="mx-auto hidden w-full max-w-[1472px] justify-between px-8 pt-16 md:flex">
          <Image
            src={"/assets/svg/logo.svg"}
            alt="contenders-arena-logo.svg"
            width={300}
            height={100}
          />

          <ul className="flex items-center gap-4 font-primary text-lg font-light uppercase text-white xl:text-xl 2xl:gap-8">
            <li>Gameplay</li>
            <li>Community</li>
            <li>More</li>
            <li className="flex h-14 items-center bg-button bg-contain bg-center bg-no-repeat px-4 font-primary-cond font-semibold text-black xl:px-8 xl:text-2xl">
              Join the Playtest
            </li>
          </ul>
        </nav>
        <nav className="relative  w-full md:hidden">
          <Image
            className="mx-auto w-1/2 pt-8"
            src={"/assets/svg/logo.svg"}
            alt="contenders-arena-logo.svg"
            width={300}
            height={100}
          />

          <Image
            className="absolute right-8 top-8 mx-auto w-8 cursor-pointer"
            src={"/assets/svg/mobile-menu.svg"}
            alt="mobile-menu.svg"
            width={32}
            height={32}
          />
        </nav>
      </header>
      <main className="min-h-screen w-[100vw] overflow-hidden">
        <section className="w-full">
          <div className="relative hidden md:block">
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
              <h1 className="relative left-[15%] top-[25%] z-10 mx-auto w-full max-w-[1150px] translate-x-[64px] translate-y-[16px] font-primary-cond text-4xl font-extrabold uppercase italic text-white xl:left-[10%] 2xl:left-[5%] 2xl:text-6xl 3xl:left-0">
                are ready for <br /> their arena
                <Image
                  className="absolute bottom-0 translate-y-[60px] xl:translate-y-[70px] 3xl:translate-y-[88px]"
                  src={"/assets/svg/chevron-down.svg"}
                  alt="chevron-down.svg"
                  width={50}
                  height={37}
                  draggable={false}
                  quality={100}
                />
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
                <input
                  className="absolute left-[14%] top-[8%] h-[12%] w-[25%] bg-transparent font-primary-cond text-white outline-none"
                  placeholder="EMAIL ADDRESS"
                />
                <button className="absolute left-[43.3%] top-[2%] flex h-[28%] w-[37%] items-center justify-center bg-transparent font-primary-cond text-xl font-semibold uppercase text-black 2xl:text-2xl">
                  Join the Playtest
                </button>
              </div>
            </div>
          </div>
          <div className="relative aspect-[393/350] w-full bg-mobile-hero-background bg-contain bg-no-repeat md:hidden">
            <div className="absolute bottom-8 w-full">
              <div className="relative w-full px-7">
                <h1 className=" px-4 font-primary-cond text-4xl uppercase italic text-green-primary">
                  a new class
                </h1>
                <h1 className=" px-4 text-right font-primary-cond text-4xl uppercase italic text-white">
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
                  <input
                    className="absolute bottom-[20%] left-[10%] w-[40%] bg-transparent font-primary-cond text-sm text-white outline-none"
                    placeholder="EMAIL ADDRESS"
                  />
                  <button className="absolute bottom-[5%] right-[1%] h-[85%] w-[49%] items-center justify-center  bg-transparent font-primary-cond text-sm font-semibold uppercase text-black">
                    Join the Playtest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Image
            className="w-full"
            src={"/assets/png/video-section.png"}
            alt="video-section.png"
            width={1920}
            height={1903}
            draggable={false}
            quality={100}
          />
        </section>
        <section className="relative">
          <div className="hidden md:block">
            <div className="absolute mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-[10%]">
              <h1 className="font-primary-cond text-5.5xl font-bold uppercase italic text-green-primary xl:text-6xl 2xl:left-0 2xl:text-7xl ">
                fast-paced action, <br /> strategic gameplay, <br />
                thrilling competition.
              </h1>
              <p className="mt-[1.5%] font-primary-cond text-xl font-light text-white xl:mt-[3%] 2xl:text-2xl">
                Contenders: Arena is an exhilarating sport that takes you into a
                world of fast-paced <br /> action, strategic gameplay, and
                thrilling competition. Become the skilled pilot of a new <br />
                kind of gladiator and prepare to engage in intense battles
                unlike anything you&apos;ve <br /> experienced before!
              </p>
              <div className="mt-[1.5%] flex gap-[2%] xl:mt-[3%]">
                <button className="flex h-16 w-max items-center bg-button-steam bg-contain bg-center bg-no-repeat pl-4 pr-36 font-primary-cond text-xl font-light uppercase tracking-tight text-white">
                  coming soon to
                </button>
                <button className="flex h-16 items-center bg-button bg-contain bg-center bg-no-repeat px-8 font-primary-cond text-xl font-semibold uppercase text-black">
                  Join the Playtest
                </button>
              </div>
            </div>

            <Image
              className="w-full"
              src={"/assets/png/stricker-section.png"}
              alt="stricker-section.png"
              width={1920}
              height={1084}
              draggable={false}
              quality={100}
            />

            <Image
              className="absolute left-[43.3%] top-[16.1%] z-20 w-[11.56%]"
              src={"/assets/png/stricker-section-hand.png"}
              alt="stricker-section-hand.png"
              width={1920}
              height={1084}
              draggable={false}
              quality={100}
            />
          </div>
          <div className="relative md:hidden">
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
                  <h1 className="absolute left-[35%] top-[24%] font-owners-wide text-xl font-bold uppercase leading-4 text-green-primary">
                    VECTOR <br />
                    CORP.
                  </h1>
                  <p className="absolute left-[35%] top-[42%] font-primary-cond text-xs font-light uppercase leading-3 text-white">
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
                  <h1 className="absolute left-[35%] top-[24%] font-owners-wide text-xl font-bold uppercase leading-4 text-green-primary">
                    GUNN <br />
                    INDUSTRIES
                  </h1>
                  <p className="absolute left-[35%] top-[42%] font-primary-cond text-xs font-light uppercase leading-3 text-white">
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
                  <h1 className="absolute left-[35%] top-[24%] font-owners-wide text-xl font-bold uppercase leading-4 text-green-primary">
                    SHIFT
                  </h1>
                  <p className="absolute left-[35%] top-[38%] font-primary-cond text-xs font-light uppercase leading-3 text-white">
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
        </section>
        <section>
          <div className="hidden md:block">
            <div className="absolute mx-auto flex w-full justify-between px-[5%] pt-[5%]">
              <div className="relative z-10 aspect-[619/819] w-full bg-corporate-gunn bg-cover">
                <Image
                  className="mx-auto mt-[20%] w-[40%] 2xl:mt-[25%]"
                  src={"/assets/svg/corporate-gunn.svg"}
                  alt="corporate-gunn.svg"
                  width={284}
                  height={184}
                  draggable={false}
                  quality={100}
                />
                <h1 className="mt-[10%] text-center font-owners-wide text-2xl font-bold uppercase text-green-primary xl:text-3xl 2xl:mt-[12%] 2xl:text-4xl ">
                  GUNN <br />
                  INDUSTRIES
                </h1>
                <p className="mt-[3%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
                  GUNN gladiators are built to <br /> withstand attacks and
                  inflict maximum <br /> damage. They may not be as agile as
                  <br /> others, but they can pack a punch.
                </p>
              </div>
              <div className="relative z-10 aspect-[619/819] w-full bg-corporate-vector bg-cover">
                <Image
                  className="mx-auto mt-[20%] w-[40%] 2xl:mt-[25%]"
                  src={"/assets/svg/corporate-vector.svg"}
                  alt="corporate-vector.svg"
                  width={254}
                  height={202}
                  draggable={false}
                  quality={100}
                />
                <h1 className="mt-[5%] text-center font-owners-wide text-2xl font-bold uppercase text-green-primary xl:text-3xl 2xl:mt-[7%] 2xl:text-4xl ">
                  VECTOR <br />
                  CORP.
                </h1>
                <p className="mt-[3%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
                  Vector gladiators are built for pursuit <br /> and seizure,
                  applying superior agility
                  <br /> and tracking capabilities.
                </p>
              </div>
              <div className="relative z-10 aspect-[619/819] w-full bg-corporate-shift bg-cover">
                <Image
                  className="mx-auto mt-[20%] w-[40%] 2xl:mt-[25%]"
                  src={"/assets/svg/corporate-shift.svg"}
                  alt="corporate-shift.svg"
                  width={326}
                  height={196}
                  draggable={false}
                  quality={100}
                />
                <h1 className="mt-[14%] text-center font-owners-wide text-2xl font-bold uppercase text-green-primary xl:text-3xl 2xl:mt-[15%] 2xl:text-4xl ">
                  SHIFT
                </h1>
                <p className="mt-[12%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
                  Shift gladiators are built for <br /> support. capable of
                  self-repair <br />
                  and protecting teammates.
                </p>
              </div>
            </div>
            <Image
              className="w-full"
              src={"/assets/png/corporate-section-background.png"}
              alt="corporate-section-background.png"
              width={1920}
              height={932}
              draggable={false}
              quality={100}
            />
          </div>
          <div className="relative md:hidden">
            <Image
              className="w-full"
              src={"/assets/png/mobile-stricker-background.png"}
              alt="mobile-stricker-background.png"
              width={393}
              height={510}
              draggable={false}
              quality={100}
            />
          </div>
        </section>
        <section>
          <div className="relative md:hidden">
            <div className="absolute h-full w-full">
              <h1 className="absolute top-[40%] w-full text-center font-primary-cond text-4xl font-bold uppercase italic leading-8 text-green-primary">
                fast-paced action,
                <br /> strategic gameplay,
                <br /> thrilling competition.
              </h1>
              <p className="absolute top-[66%] w-full text-center font-primary-cond text-sm font-light leading-4 text-white ">
                Contenders: Arena is an exhilarating sport that takes you into a
                world of <br /> fast-paced action, strategic gameplay, and
                thrilling competition. Become the <br /> skilled pilot of a new
                kind of gladiator and prepare to engage in intense <br />
                battles unlike anything you&apos;ve experienced before!
              </p>
              <div className="absolute top-[85%] flex w-full justify-between px-7">
                <button className="flex h-8 w-max items-center bg-button-steam bg-contain bg-center bg-no-repeat pl-4 pr-20 font-primary-cond text-xs font-light uppercase tracking-tight text-white">
                  coming soon to
                </button>
                <button className="flex h-8 items-center bg-button bg-contain bg-center bg-no-repeat px-8 font-primary-cond text-xs font-semibold uppercase text-black">
                  Join the Playtest
                </button>
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
        <section>
          <div className="hidden md:block">
            <Image
              className="w-full"
              src={"/assets/png/video2-section.png"}
              alt="video2-section.png"
              width={1920}
              height={1702}
              draggable={false}
              quality={100}
            />
          </div>
          <div className="relative md:hidden">
            <Image
              className="w-full"
              src={"/assets/png/mobile-video.png"}
              alt="mobile-video.png"
              width={393}
              height={219}
              draggable={false}
              quality={100}
            />
          </div>
        </section>
        <section>
          <div className="hidden md:block">
            <div className="absolute mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-[5%]">
              <h1 className="font-primary-cond text-4.5xl font-bold uppercase italic text-green-primary xl:text-5xl 2xl:left-0 2xl:text-7xl ">
                we need you <br /> to build the ultimate
                <br /> combat experience
              </h1>
              <p className="mt-[1%] font-primary-cond text-xl font-light uppercase text-white 2xl:mt-[1.5%] 2xl:text-2xl 3xl:mt-[3%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                <br />
                of type and scrambled it to make a type specimen book. It has
                <br />
                survived not only five centuries.
              </p>
              <div className="mt-[1%] flex gap-[2%] 2xl:mt-[1.5%] 3xl:mt-[3%]">
                <button className="flex h-16 w-max items-center bg-button-discord bg-contain bg-center bg-no-repeat pl-20 pr-8 font-primary-cond text-xl font-bold uppercase tracking-tight text-green-primary">
                  Join Discord Community
                </button>
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
          <div className="relative md:hidden">
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
                className="w-full"
                src={"/assets/png/mobile-discord-background.png"}
                alt="mobile-discord-background.png"
                width={393}
                height={296}
                draggable={false}
                quality={100}
              />
              <div className="absolute top-0 h-full w-full">
                <h1 className="absolute top-[10%] w-full text-center font-primary-cond text-4xl font-bold uppercase italic leading-9 text-green-primary">
                  WE NEED YOU
                  <br /> to build the ultimate
                  <br /> combate experience
                </h1>
                <p className="absolute top-[50%] w-full text-center font-primary-cond text-sm font-light leading-4 text-white ">
                  Lorem Ipsum is simply dummy text of the printing and
                  <br /> typesetting industry. Lorem Ipsum has been the
                  industry&apos;s
                  <br /> standard dummy text ever since the 1500s, when an
                  unknown
                  <br /> printer took a galley of type and scrambled it to make
                  a type.
                </p>
                <div className="absolute top-[75%] mx-auto w-full">
                  <button className="mx-auto flex h-16 w-max scale-75 items-center bg-button-discord bg-contain bg-center bg-no-repeat pl-20 pr-8 font-primary-cond text-xl font-bold uppercase tracking-tight text-green-primary">
                    Join Discord Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="hidden md:block">
            <div className="absolute mx-auto w-full  justify-between px-[10%] pt-[8%] 2xl:pt-[12%]">
              <h1 className="text-center font-primary-cond text-8xl font-bold uppercase italic text-green-primary xl:text-9xl 2xl:left-0 2xl:text-11xl">
                ARE YOU READY
              </h1>
              <p className="mt-[2%] text-center font-primary-cond text-4xl font-light uppercase text-white xl:text-4.5xl 2xl:mt-[7%] 2xl:text-5.5xl">
                A NEW CLASS OF GLADIATORS ARE READY FOR THEIR ARENA!
              </p>
              <div className="mx-auto mt-[3%] flex w-full max-w-[900px] gap-[2%] 2xl:mt-[3%] 2xl:max-w-[1080px]">
                <div className="flex aspect-[962/90] w-[75%] flex-shrink-0 items-center bg-ready-email-input bg-contain bg-no-repeat">
                  <input
                    className="ml-[12%] w-[85%] bg-transparent font-primary-cond text-2xl text-white outline-none"
                    placeholder="EMAIL ADDRESS"
                  />
                </div>
                <button className="flex w-full translate-y-[5%] scale-[1.075] items-center justify-center bg-button bg-contain bg-no-repeat font-primary-cond text-xl font-semibold uppercase text-black 2xl:text-2xl">
                  <span className="-translate-y-[8%]">Join the Playtest</span>
                </button>
              </div>
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
          <div className="relative md:hidden">
            <Image
              className="w-full"
              src={"/assets/png/mobile-ready-background.png"}
              alt="mobile-ready-background.png"
              width={393}
              height={296}
              draggable={false}
              quality={100}
            />
            <div className="absolute top-0 h-full w-full">
              <h1 className="absolute top-[15%] w-full text-center font-primary-cond text-5xl font-bold uppercase italic text-green-primary">
                ARE YOU READY
              </h1>
              <p className="absolute top-[35%] w-full text-center font-primary-cond text-lg font-light uppercase text-white">
                A NEW CLASS OF GLADIATORS ARE READY FOR THEIR ARENA!
              </p>
              <div className="absolute top-[50%] w-full">
                <div className="relative">
                  <Image
                    className="mx-auto mb-[2.5%]"
                    src={"/assets/svg/mobile-ready-email.svg"}
                    alt="mobile-ready-email.svg"
                    width={337}
                    height={40}
                  />
                  <input
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
                    Join the Playtest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex flex-col justify-between gap-10 bg-[#08090d] py-10 md:gap-20 md:py-20">
          <Image
            className="mx-auto w-2/3 md:w-[400px]"
            src={"/assets/svg/logo.svg"}
            alt="contenders-arena-logo.svg"
            width={400}
            height={100}
          />
          <div className="flex flex-col items-center gap-10 font-primary text-xs uppercase text-zinc-300 md:flex-row md:gap-2 xl:text-base 2xl:gap-8 2xl:text-lg">
            <div className="w-[75%] md:w-1/3">
              <Image
                className="ml-auto mr-auto md:mr-0"
                src={"/assets/svg/footer-socials.svg"}
                alt="footer-socials.svg"
                width={350}
                height={100}
              />
            </div>
            <div className="w-full md:w-1/3">
              <ul className="flex flex-col justify-around text-center font-light md:flex-row md:text-left">
                <li>Privacy Policy</li>
                <li>Carrers</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div className="w-full text-center font-light text-green-primary md:w-1/3 md:text-left">
              &copy; 2023 Galaxy Racer. All Rights Reserved
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
