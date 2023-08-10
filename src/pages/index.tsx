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
        <nav className="mx-auto flex w-full max-w-[1472px] justify-between px-8 pt-16">
          <Image
            src={"/assets/svg/logo.svg"}
            alt="contenders-arena-logo.svg"
            width={300}
            height={100}
          />

          <ul className="flex items-center gap-4 font-primary text-xl font-light uppercase text-white 2xl:gap-8">
            <li>Gameplay</li>
            <li>Community</li>
            <li>More</li>
            <li className="flex h-14 items-center bg-button bg-contain bg-center bg-no-repeat px-8 font-primary-cond text-2xl font-semibold text-black">
              Join the Playtest
            </li>
          </ul>
        </nav>
      </header>
      <main className="min-h-screen">
        <section className="w-full">
          <div className="relative">
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
              <h1 className="relative left-[10%] top-[25%] mx-auto w-full max-w-[1150px] font-primary-cond text-8xl font-extrabold uppercase italic text-green-primary 2xl:left-0 2xl:text-9xl 2xl:leading-[0.85]">
                a new <br /> class
              </h1>
              <h1 className="relative left-[10%] top-[25%] z-10 mx-auto w-full max-w-[1150px] font-primary-cond text-8xl font-extrabold uppercase italic text-white 2xl:left-0 2xl:text-9xl">
                of gladiators
              </h1>
              <h1 className="relative left-[10%] top-[25%] z-10 mx-auto w-full max-w-[1150px] translate-x-[64px] translate-y-[16px] font-primary-cond text-4xl font-extrabold uppercase italic text-white 2xl:left-0 2xl:text-6xl">
                are ready for <br /> their arena
                <Image
                  className="absolute bottom-0 translate-y-[88px]"
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
          <div className="absolute mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-[10%]">
            <h1 className="font-primary-cond text-6xl font-bold uppercase italic text-green-primary 2xl:left-0 2xl:text-7xl ">
              fast-paced action, <br /> strategic gameplay, <br />
              thrilling competition.
            </h1>
            <p className="mt-[3%] font-primary-cond text-xl font-light text-white 2xl:text-2xl">
              Contenders: Arena is an exhilarating sport that takes you into a
              world of fast-paced <br /> action, strategic gameplay, and
              thrilling competition. Become the skilled pilot of a new <br />
              kind of gladiator and prepare to engage in intense battles unlike
              anything you&apos;ve <br /> experienced before!
            </p>
            <div className="mt-[3%] flex gap-[2%]">
              <button className="flex h-16 w-max items-center bg-button-steam bg-contain bg-center bg-no-repeat pl-4 pr-36 font-primary-cond text-xl font-light uppercase tracking-tight text-white">
                <span>coming soon to</span>
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
        </section>
        <section>
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
              <h1 className="mt-[10%] text-center font-owners-wide text-3xl font-bold uppercase text-green-primary 2xl:mt-[12%] 2xl:text-4xl ">
                GUNN <br />
                INDUSTRIES
              </h1>
              <p className="mt-[3%] text-center font-primary-cond text-xl font-light uppercase text-white 2xl:text-2xl">
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
              <h1 className="mt-[5%] text-center font-owners-wide text-3xl font-bold uppercase text-green-primary 2xl:mt-[7%] 2xl:text-4xl ">
                VECTOR <br />
                CORP.
              </h1>
              <p className="mt-[3%] text-center font-primary-cond text-xl font-light uppercase text-white 2xl:text-2xl">
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
              <h1 className="mt-[14%] text-center font-owners-wide text-3xl font-bold uppercase text-green-primary 2xl:mt-[15%] 2xl:text-4xl ">
                SHIFT
              </h1>
              <p className="mt-[12%] text-center font-primary-cond text-xl font-light uppercase text-white 2xl:text-2xl">
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
        </section>
        <section>
          <Image
            className="w-full"
            src={"/assets/png/video2-section.png"}
            alt="video2-section.png"
            width={1920}
            height={1702}
            draggable={false}
            quality={100}
          />
        </section>
        <section>
          <div className="absolute mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-[5%]">
            <h1 className="font-primary-cond text-5xl font-bold uppercase italic text-green-primary 2xl:left-0 2xl:text-7xl ">
              we need you <br /> to build the ultimate
              <br /> combat experience
            </h1>
            <p className="mt-[1%] font-primary-cond text-xl font-light uppercase text-white 2xl:mt-[3%] 2xl:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              <br />
              text ever since the 1500s, when an unknown printer took a galley
              <br />
              of type and scrambled it to make a type specimen book. It has
              <br />
              survived not only five centuries.
            </p>
            <div className="mt-[1%] flex gap-[2%] 2xl:mt-[3%]">
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
        </section>
        <section>
          <div className="absolute mx-auto w-full  justify-between px-[10%] pt-[8%] 2xl:pt-[12%]">
            <h1 className="text-center font-primary-cond text-9xl font-bold uppercase italic text-green-primary 2xl:left-0 2xl:text-11xl">
              ARE YOU READY
            </h1>
            <p className="mt-[2%] text-center font-primary-cond text-4.5xl font-light uppercase text-white 2xl:mt-[7%] 2xl:text-5.5xl">
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
        </section>
        <footer className="flex h-[352px] flex-col justify-between bg-[#08090d] py-20">
          <Image
            className="mx-auto"
            src={"/assets/svg/logo.svg"}
            alt="contenders-arena-logo.svg"
            width={400}
            height={100}
          />
          <div className="flex items-center gap-2 font-primary text-base uppercase text-zinc-300 2xl:gap-8 2xl:text-lg">
            <div className="w-1/3">
              <Image
                className="ml-auto"
                src={"/assets/svg/footer-socials.svg"}
                alt="footer-socials.svg"
                width={400}
                height={100}
              />
            </div>
            <div className="w-1/3">
              <ul className="flex justify-around">
                <li>Privacy Policy</li>
                <li>Carrers</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div className="w-1/3 text-green-primary">
              &copy; 2023 Galaxy Racer. All Rights Reserved
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
