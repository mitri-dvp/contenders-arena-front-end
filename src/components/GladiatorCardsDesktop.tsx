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
          className="mx-auto mt-[20%] h-[25%] w-auto 2xl:mt-[25%]"
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
          <p className="mt-[9%] px-[14%] text-center font-primary-cond text-xs font-light uppercase text-white xl:text-sm 2xl:text-base">
            Originating from a coalition of mercenary groups, it has grown into
            a fiercely independent entity with significant military and economic
            prowess. Its chief aim is to forge a self-reliant and powerful
            nation-state governed by its own principles. Despite meeting the
            requirements, it is not, and has no intention to be, a member of the
            GSOP. They harbor a particular hatred of IsoTX, despising their
            elitist ways.
          </p>
        ) : (
          <p className="mt-[9%] px-[14%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
            GUNN is a military-industrial
            <br /> megacorporation that places a high <br />
            value on brotherhood, loyalty, <br /> and firepower.
          </p>
        )}
      </div>
      <div
        onClick={() => setActiveIndex(0)}
        className="relative z-10 aspect-[619/819] w-full cursor-pointer bg-corporate-vector bg-cover"
      >
        <Image
          className="mx-auto mt-[20%] h-[25%] w-auto 2xl:mt-[25%]"
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
          <p className="mt-[9%] px-[14%] text-center font-primary-cond text-xs font-light uppercase text-white xl:text-sm 2xl:text-base">
            With a focus on security, law, and order, Vector aims to impose
            stability on society, even if it comes at the cost of individual
            freedoms. They have an intense dislike for Axiom, seeing their
            criminal activities as a major roadblock to imposing galaxy-wide law
            and order. They are a full member of the GSOP through their
            administration of Plutus.
          </p>
        ) : (
          <p className="mt-[9%] px-[14%] text-center font-primary-cond text-base font-light uppercase text-white xl:text-xl 2xl:text-2xl">
            Vector is the oldest and most <br /> widespread megacorporation in
            <br />
            human space.
          </p>
        )}
      </div>
      <div
        onClick={() => setActiveIndex(-1)}
        className="relative z-10 aspect-[619/819] w-full cursor-pointer bg-corporate-shift bg-cover"
      >
        <Image
          className="mx-auto mt-[20%] h-[25%] w-auto 2xl:mt-[25%]"
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
          <p className="mt-[9%] px-[14%] text-center font-primary-cond text-xs font-light uppercase text-white xl:text-sm 2xl:text-base">
            Formerly known as Teradev Technology Amalgamated, Shift transformed
            its operations to emphasize societal betterment. Headquartered on
            Brontes, Shift is a leading model of corporate responsibility,
            particularly in environmental stewardship and ethical governance.
            With its 3 million in population, they are a full member of the
            GSOP, aligning neatly with its values of peace, fairness, and
            prosperity.
          </p>
        ) : (
          <p className="mt-[9%] px-[14%] text-center font-primary-cond text-base font-light uppercase text-white  xl:text-xl 2xl:text-2xl">
            Shift is a rebranded private <br /> corporation focused on ethical
            <br />
            technology and community welfare.
          </p>
        )}
      </div>
    </div>
  );
};

export default GladiatorCardsDesktop;
