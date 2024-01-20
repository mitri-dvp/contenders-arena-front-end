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
        <title>Contenders Arena | Privacy Policy</title>
        <meta name="description" content="Conteders Arena Privacy Policy" />
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
              Privacy Policy
            </h1>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              1- Introduction
            </h1>
            <p>
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use the Game. By accessing or using
              the Game, you consent to the practices described in this Privacy
              Policy. We value your privacy, our Privacy Policy is designed to
              help you understand how we collect, use, process, and share your
              personal information, and to inform you of how to exercise your
              privacy rights.
            </p>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              2- The Information We Collect
            </h1>
            <ul>
              <li>
                • We collect personal information both from our website visitors
                and customers.
              </li>
              <li>
                • We collect information that you provide to us, information we
                obtain automatically when you use the Game, and information from
                third-party services and organizations, as described in the
                following:
                <ol className="ml-5">
                  <li>
                    a) Information you provide directly to us: examples below:
                    <ul className="ml-5">
                      <li>
                        - Account Information: When you create an account, we
                        collect your username and email address.
                      </li>
                      <li>
                        - Third Parties: To access some functions of the Game or
                        to enable certain features, you may have the option to
                        link an account on a third-party website, application,
                        or platform, such as a social media platform, Steam,
                        PlayStation™ Network, Xbox, etc. (each a
                        &quot;Third-Party Platform&quot;) with the Game. When
                        you do so, we will receive information from that
                        Third-Party Platform, such as your Platform ID or
                        username and other usage statistics. Third-Party
                        Platforms are not controlled by us and their collection
                        and usage of personal data is subject to their
                        respective privacy policies. We may obtain additional
                        information about you from the Third-Party Platforms,
                        depending on your privacy settings.
                      </li>
                      <li>
                        - Communications and Surveys: We may collect personal
                        information, such as your phone number, language,
                        platform, or details about your issues when you request
                        information about the Game, register for our email list,
                        request customer or technical support, or otherwise
                        communicate with us. Also, if you decide to participate
                        in our surveys, you may be asked to provide certain
                        information which may include personal information that
                        we may collect.
                      </li>
                      <li>
                        - Purchases: we may collect information related to
                        billing provided by you and/or third-party stores when
                        you purchase using/for the Game.
                      </li>
                      <li>
                        - Gameplay Data: We collect data about your interactions
                        with the Game, including your progress, achievements,
                        gameplay patterns, and preferences.
                      </li>
                      <li>
                        - Device Information: We collect information about the
                        device you use to access the Game, such as device type,
                        operating system, and unique identifiers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    b) Automatically Collected Information: we may collect
                    certain information automatically when you use the Game,
                    such as your Internet protocol (IP) address, user settings,
                    cookies, pixel tag, etc.
                  </li>
                  <li>
                    c) Information collected from third parties: we may obtain
                    information about you from other sources, including through
                    third-party services and organizations. For example, if you
                    access the Game through a third-party (e.g., Steam,
                    Facebook).
                  </li>
                </ol>
              </li>
            </ul>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              3- Use of Information
            </h1>
            We use the collected information for the following purposes:
            <ul className="ml-5">
              <li>
                • Providing and improving the Game&apos;s functionality,
                features, and content.
              </li>

              <li>
                • Personalizing your experience, including recommendations and
                in-game content.
              </li>
              <li>
                • Communicating with you about updates, promotions, and
                announcements.
              </li>
              <li>
                • Analyzing and improving our services, security, and
                performance.
              </li>
              <li>
                • Responding to your inquiries and providing customer support.
              </li>
              <li>
                • Marketing and advertising the Game/the Company’s products and
                services.
              </li>
              <li>
                • Enforcing our Terms and preventing fraudulent or unauthorized
                activity.
              </li>
            </ul>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              4- Disclosure of the Information
            </h1>
            We may share your information with:
            <ol className="ml-5">
              <li>
                a) Third-party service providers who assist in Game operations,
                analytics, and customer support such as: service providers,
                business partners, advertising partners, third-party Application
                Program Interfaces (&quot;APIs&quot;) and Software Development
                Kits (&quot;SDKs&quot;).
              </li>
              <li>
                b) Legal authorities if required by law or in response to legal
                requests.
              </li>
              <li>
                c) Your information may be transferred to and processed in
                countries outside of your own, where data protection laws may be
                different. By using the Game, you consent to the transfer of
                your information to such countries.
              </li>
            </ol>
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              5- Data Security
            </h1>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or destruction. However, no
            data transmission or storage is completely secure. By using the Game
            or providing personal information to us, you agree that we may
            communicate with you electronically regarding security, privacy, and
            administrative issues relating to your use of the Game. If we learn
            of a security system’s breach, we may attempt to notify you
            electronically by posting a notice on the Game, or by sending an
            email to you.
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              6- Your Choice and Control
            </h1>
            You may access, update, or delete certain personal information
            within the Game&apos;s settings. You can also manage your settings
            and your communication preferences and opt-out of certain
            communications.
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              7- Retention of the Information
            </h1>
            We store your personal information that we collect as described in
            this Privacy Policy for as long as you use the Game or as necessary
            to fulfill the purpose(s) for which it was collected.
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              8- Children’s Privacy
            </h1>
            The Game is not intended for individuals under the applicable age
            limit. If you are a parent or guardian and believe your child
            provided personal information without your consent, please contact
            us to have the information removed.
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              9- Changes to Privacy Policy
            </h1>
            We may update or modify this Privacy Policy at any time. Any changes
            will be effective upon posting the updated Privacy Policy within the
            Game/website.
            <h1 className="my-10  font-primary-cond text-4xl font-bold uppercase italic text-green-primary">
              10- Contact us
            </h1>
            If you have questions or concerns about this Privacy Policy or your
            personal information, please contact us at ________.
            <h1 className="my-10 text-center  font-primary-cond text-lg font-bold uppercase italic text-green-primary underline">
              By using the Game, you acknowledge and agree to the terms of this
              Privacy Policy. If you do not agree to these terms, please refrain
              from using the Game.
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
