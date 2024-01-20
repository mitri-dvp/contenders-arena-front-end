import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import CookiesModal from "~/components/CookiesModal";
import EmailModal from "~/components/EmailModal";
import { EmailResponse } from "~/utils/playtest";

export default function TermsAndConditions() {
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
        <title>Contenders Arena | Terms & Conditions</title>
        <meta
          name="description"
          content="Contenders Arena Terms & Conditions"
        />
        <link rel="icon" href="/favicon.ico" />
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
            <Link href={"/#video"}>Gameplay</Link>
            <Link href={"/#community"}>Community</Link>
            <Link href={"/#striker"}>More</Link>
            <Link
              href={"/#playtest"}
              className="flex h-14 items-center bg-button bg-contain bg-center bg-no-repeat px-12 font-primary-cond font-semibold text-black xl:px-16 xl:text-2xl"
            >
              Join
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
      <main className="min-h-screen w-[100vw] overflow-hidden bg-dark-primary">
        <section>
          <div className="mx-auto w-full max-w-[1472px] justify-between px-[10%] pt-48 text-green-primary">
            <h1 className="mb-10 text-center font-primary-cond text-5xl font-bold uppercase italic text-green-primary">
              Terms and Conditions
            </h1>
            <p>
              These terms and conditions (the &quot;Terms&quot;) apply to your
              use of Contenders Arena (the &quot;Game&quot;), developed and
              published by Contenders Universe (the &quot;Company&quot;). Please
              read these Terms carefully as by installing, accessing, or using
              the Game, you agree to be bound by these Terms. If you do not
              agree to these Terms, please refrain from installing, accessing,
              or using the Game.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              License and Use of the Game
            </h1>
            <p>
              Subject to your compliance with these Terms, the Company grants
              you a non-exclusive, non-transferable, revocable license to use
              the Game solely for your personal, non-commercial entertainment
              purposes. This license does not grant you any ownership or rights
              to any aspect of the Game other than those expressly provided in
              these Terms. You agree not to use the Game for any purpose other
              than its intended use. You shall not sublicense, rent, lease,
              sell, distribute, or exploit the Game or any of its components
              without the prior written consent of the Company.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Accessing the Game and Account Security
            </h1>
            <p>
              To access the Game, you may be asked to provide registration
              details or other information, and in order to use such resources,
              all the information you provide must be correct, current, and
              complete. You may need to create a user account to access and use
              the Game and/or certain features of it. You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account. You agree to
              notify the Company immediately of any unauthorized use of your
              account or any other breach of security. We may cancel or amend
              the Game, and any related service or content, or restrict access
              (including by means of cancellation, termination, or modification,
              or suspension of a user account) to all or certain users at any
              time and without notice and without any liability to you in our
              reasonable discretion.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Age Restrictions
            </h1>
            <p>
              The Game may have age restrictions. You must ensure that you meet
              the minimum age requirement to use the Game in your jurisdiction
              and/or have obtained parental consent to use the Game.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              User Content
            </h1>
            <p>
              The Game may allow you to create, upload, or share user-generated
              content (&quot;User Content&quot;). You retain ownership of your
              User Content, but you grant the Company a worldwide, royalty-free,
              non-exclusive license to use, reproduce, modify, adapt, publish,
              translate, and distribute your User Content in connection with the
              Game. You agree not to create, upload, or share any User Content
              that is offensive, infringing, or in violation of any applicable
              laws.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Code of Conduct
            </h1>
            <p>
              You agree not to use the Game to engage in any abusive, offensive,
              illegal, or harmful activities. This includes, but is not limited
              to, harassment, bullying, cheating, hacking, or exploiting
              vulnerabilities. And you agree not to impersonate others or
              interfere with the enjoyment of the Game by other players. You
              also agree not to violate any applicable laws, regulations, or
              third-party rights while using the Game. You must respect the
              privacy of other players and not share any personal information
              without their consent. Recording, streaming, or sharing in-game
              interactions must be done responsibly and with full respect for
              others&apos; rights.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Intellectual Property
            </h1>
            <p>
              All intellectual property rights in the Game, including but not
              limited to graphics, animations, characters, music, trademarks,
              gameplay mechanics and any related materials are exclusively and
              solely owned by the Company or its licensors. These rights are
              protected by copyright, trademark, trade secret, and other
              intellectual property laws and treaties. You agree not to use
              these assets for any purpose other than playing the Game. You
              shall not reproduce, distribute, modify, adapt, translate, create
              derivative works of, publicly display, or publicly perform any of
              the intellectual property assets of the Game without the explicit
              written consent of the Company.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Updates and Modifications
            </h1>
            <p>
              The Company reserves the right to update, modify, or discontinue
              the Game at any time. You understand that certain updates may be
              required to continue using the Game. The Company may provide
              notice of updates through the Game&apos;s interface, website, or
              other communication channels. However, it is your responsibility
              to regularly check for updates and modifications. Updates and
              modifications to the Game may affect your User Content, including
              compatibility and accessibility. The Company is not responsible
              for any loss or modification of User Content resulting from
              updates.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Privacy Policy
            </h1>
            <p>
              Your use of the Game is subject to the Privacy Policy, which
              outlines how your personal data is collected, used, and protected.
              By using the Game, you consent to the practices described in the
              Privacy Policy.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Disclaimer of Warranty:
            </h1>
            <p>
              The Game is provided &quot;as is&quot; without any warranties,
              express or implied. The Company does not guarantee the accuracy,
              reliability, or availability of the Game. You use the Game at your
              own risk. You acknowledge that your use of the Game is solely at
              your own risk. The Company does not warrant that the Game will be
              error-free, uninterrupted, or free of viruses or other harmful
              components. The Company furthermore does not guarantee that the
              Game&apos;s functionality, features, or performance will meet your
              expectations or requirements. The Company does not warrant the
              accuracy, completeness, or reliability of any content within the
              Game. Any reliance on such content is at your own discretion. The
              Company does not endorse or assume responsibility for any
              third-party links, content, advertisements, or services that may
              be accessed through the Game.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Limitation of Liability:
            </h1>
            <p>
              To the fullest extent permitted by applicable law, the Company
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of the
              Game. In no event shall the Company be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of the Game, even if the Company has been
              advised of the possibility of such damages.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Governing Law and Jurisdiction:
            </h1>
            <p>
              These Terms and any dispute or claim by you arising out of or
              related to these Term shall be governed by and construed in
              accordance with the laws of ________ with the exclusive
              jurisdiction of the ________ courts, without regard to its
              conflict of law principles.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Changes to Terms:
            </h1>
            <p>
              The Company reserves the right to update or modify these Terms at
              any time. Any changes will be effective upon posting the updated
              Terms within the Game/website. You should check this page
              regularly to take notice of any changes. Your continued use of the
              Game following the posting of revised Terms means that you accept
              and agree to the changes.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              Termination
            </h1>
            <p>
              The Company may terminate your access to the Game for violation of
              these Terms or any other reason, without notice and without any
              liability.
            </p>
            <h1 className="my-10 text-center  font-primary-cond text-lg font-bold uppercase italic text-green-primary underline">
              By using the Game, you acknowledge that you have read, understood,
              and agreed to these Terms. If you do not agree to these Terms,
              please refrain from using the Game.
            </h1>
          </div>
        </section>
        <footer className="mt-20 flex flex-col justify-between gap-10 border-t-2 border-green-primary bg-dark-primary py-10 md:gap-20 md:py-20">
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
                  href={
                    "https://www.twitch.tv/directory/category/contenders-arena"
                  }
                  className="block h-full w-full"
                />
                <Link
                  href={"https://discord.com/invite/contenders"}
                  className="block h-full w-full"
                />
              </div>
            </div>
            <div className="w-max">
              <ul className="flex flex-col justify-around gap-4 text-center font-light md:flex-row md:gap-4 md:text-left">
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

        <CookiesModal />
        <EmailModal emailResponse={emailReponse} />
      </main>
    </>
  );
}
