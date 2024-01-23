import Image from "next/image";
import React, { useState } from "react";

const GladiatorCardsMobile = ({
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
    <div className="absolute w-full">
      <div
        className="relative aspect-[393/241] w-full bg-mobile-card-background bg-contain bg-no-repeat"
        onClick={() => setActiveIndex(0)}
      >
        <div className="absolute h-full w-full">
          <Image
            className="ml-[9%] mt-[15%] w-[20%]"
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
            <p className="absolute left-[35%] top-[25%] max-w-[200px]  font-primary-cond text-[10px] font-light uppercase leading-3 text-white sm:max-w-[380px] sm:text-xl sm:leading-5">
              With a focus on security, law, and order, Vector aims to impose
              stability on society, even if it comes at the cost of individual
              freedoms. They have an intense dislike for Axiom, seeing their
              criminal activities as a major roadblock to imposing galaxy-wide
              law and order. They are a full member of the GSOP through their
              administration of Plutus.
            </p>
          ) : (
            <p className="absolute left-[35%] top-[31%] font-primary-cond text-xs font-light uppercase leading-3 text-white sm:text-xl sm:leading-5">
              Vector gladiators are built for pursuit <br /> and seizure,
              applying superior agility
              <br /> and tracking capabilities.
            </p>
          )}
        </div>
      </div>
      <div
        className="relative aspect-[393/241] w-full -translate-y-[35%] bg-mobile-card-background bg-contain bg-no-repeat"
        onClick={() => setActiveIndex(1)}
      >
        <div className="absolute h-full w-full">
          <Image
            className="ml-[9%] mt-[18%] w-[20%]"
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
            <p className="absolute left-[35%] top-[25%] max-w-[200px] font-primary-cond text-[10px] font-light uppercase leading-3 text-white sm:max-w-[380px]  sm:text-xl sm:leading-5">
              Originating from a coalition of mercenary groups, it has grown
              into a fiercely independent entity with significant military and
              economic prowess. Its chief aim is to forge a self-reliant and
              powerful nation-state governed by its own principles. Despite
              meeting the requirements, it is not, and has no intention to be, a
              member of the GSOP. They harbor a particular hatred of IsoTX,
              despising their elitist ways.
            </p>
          ) : (
            <p className="absolute left-[35%] top-[31%] font-primary-cond text-xs font-light uppercase leading-3 text-white sm:text-xl sm:leading-5">
              GUNN gladiators are built to withstand attacks
              <br /> and inflict maximum damage. They may not be as
              <br /> agile as others, but they can pack a punch.
            </p>
          )}
        </div>
      </div>
      <div
        className="relative aspect-[393/241] w-full -translate-y-[70%] bg-mobile-card-background bg-contain bg-no-repeat"
        onClick={() => setActiveIndex(-1)}
      >
        <div className="absolute h-full w-full">
          <Image
            className="ml-[9%] mt-[18%] w-[20%]"
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
            <p className="absolute left-[35%] top-[22%] max-w-[200px] font-primary-cond text-[10px] font-light uppercase leading-3 text-white sm:max-w-[380px] sm:text-xl sm:leading-5">
              Formerly known as Teradev Technology Amalgamated, Shift
              transformed its operations to emphasize societal betterment.
              Headquartered on Brontes, Shift is a leading model of corporate
              responsibility, particularly in environmental stewardship and
              ethical governance. With its 3 million in population, they are a
              full member of the GSOP, aligning neatly with its values of peace,
              fairness, and prosperity.
            </p>
          ) : (
            <p className="absolute left-[35%] top-[33%] font-primary-cond text-xs font-light uppercase leading-3 text-white sm:text-xl sm:leading-5">
              Shift gladiators are built for support. capable <br /> of
              self-repair and protecting teammates.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GladiatorCardsMobile;
