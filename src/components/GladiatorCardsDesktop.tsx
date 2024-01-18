import Image from "next/image";
import React, { useState } from "react";

const GladiatorCardsDesktop = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  const isDefenderActive = activeIndex === 1;
  const isStrikerActive = activeIndex === 0;
  const isRunnerActive = activeIndex === -1;
  return (
    <div className="absolute mx-auto flex w-full justify-between px-[5%] pt-[5%]">
      <div
        onClick={() => setActiveIndex(1)}
        className="relative z-10 aspect-[619/819] w-full cursor-pointer bg-corporate-gunn bg-cover"
      >
        <Image
          className="mx-auto mt-[20%] w-[40%] 2xl:mt-[25%]"
          src={
            isDefenderActive
              ? "/assets/svg/corporate-gunn-active.svg"
              : "/assets/svg/corporate-gunn.svg"
          }
          alt="corporate-gunn.svg"
          width={284}
          height={184}
          draggable={false}
          quality={100}
        />
        {isDefenderActive ? (
          <p className="mt-[9%] px-16 text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-xl">
            Originating from a coalition of mercenary groups, it has grown into
            a fiercely independent entity with significant military and economic
            prowess. Its chief aim is to forge a self-reliant and powerful
            nation-state governed by its own principles. Despite meeting the
            requirements, it is not, and has no intention to be, a member of the
            GSOP. They harbor a particular hatred of IsoTX, despising their
            elitist ways.
          </p>
        ) : (
          <>
            <h1 className="mt-[10%] text-center font-owners-wide text-2xl font-bold uppercase text-green-primary xl:text-3xl 2xl:mt-[12%] 2xl:text-4xl ">
              GUNN <br />
              INDUSTRIES
            </h1>
            <p className="mt-[3%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
              GUNN gladiators are built to <br /> withstand attacks and inflict
              maximum <br /> damage. They may not be as agile as
              <br /> others, but they can pack a punch.
            </p>
          </>
        )}
      </div>
      <div
        onClick={() => setActiveIndex(0)}
        className="relative z-10 aspect-[619/819] w-full cursor-pointer bg-corporate-vector bg-cover"
      >
        <Image
          className="mx-auto mt-[20%] w-[40%] 2xl:mt-[25%]"
          src={
            isStrikerActive
              ? "/assets/svg/corporate-vector-active.svg"
              : "/assets/svg/corporate-vector.svg"
          }
          alt="corporate-vector.svg"
          width={254}
          height={202}
          draggable={false}
          quality={100}
        />
        {isStrikerActive ? (
          <p className="mt-[9%] px-16 text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-xl">
            With a focus on security, law, and order, Vector aims to impose
            stability on society, even if it comes at the cost of individual
            freedoms. They have an intense dislike for Axiom, seeing their
            criminal activities as a major roadblock to imposing galaxy-wide law
            and order. They are a full member of the GSOP through their
            administration of Plutus.
          </p>
        ) : (
          <>
            <h1 className="mt-[5%] text-center font-owners-wide text-2xl font-bold uppercase text-green-primary xl:text-3xl 2xl:mt-[7%] 2xl:text-4xl ">
              VECTOR <br />
              CORP.
            </h1>
            <div className="mt-[3%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
              Vector gladiators are built for pursuit <br /> and seizure,
              applying superior agility
              <br /> and tracking capabilities.
            </div>
          </>
        )}
      </div>
      <div
        onClick={() => setActiveIndex(-1)}
        className="relative z-10 aspect-[619/819] w-full cursor-pointer bg-corporate-shift bg-cover"
      >
        <Image
          className="mx-auto mt-[20%] w-[40%] 2xl:mt-[25%]"
          src={
            isRunnerActive
              ? "/assets/svg/corporate-shift-active.svg"
              : "/assets/svg/corporate-shift.svg"
          }
          alt="corporate-shift.svg"
          width={326}
          height={196}
          draggable={false}
          quality={100}
        />
        {isRunnerActive ? (
          <p className="mt-[9%] px-16 text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-xl">
            Formerly known as Teradev Technology Amalgamated, Shift transformed
            its operations to emphasize societal betterment. Headquartered on
            Brontes, Shift is a leading model of corporate responsibility,
            particularly in environmental stewardship and ethical governance.
            With its 3 million in population, they are a full member of the
            GSOP, aligning neatly with its values of peace, fairness, and
            prosperity.
          </p>
        ) : (
          <>
            <h1 className="mt-[14%] text-center font-owners-wide text-2xl font-bold uppercase text-green-primary xl:text-3xl 2xl:mt-[15%] 2xl:text-4xl ">
              SHIFT
            </h1>
            <p className="mt-[12%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
              Shift gladiators are built for <br /> support. capable of
              self-repair <br />
              and protecting teammates.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default GladiatorCardsDesktop;