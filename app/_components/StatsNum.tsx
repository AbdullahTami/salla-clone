"use client";
import React from "react";
import Image from "next/image";
import Money from "@/assets/dollar.png";
import Store from "@/assets/store.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Variants, motion } from "framer-motion";

export default function StatsNum({ variants }: { variants: Variants }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col self-start sm:self-auto cursor-pointer sm:flex-row  items-start sm:items-center md:gap-14 gap-9 md:mt-14 mt-7">
      <motion.div
        variants={variants}
        className="flex justify-center items-center gap-3"
      >
        <span className="p-4 border-4 rounded-t-2xl rounded-b-xl border-accent-100 inline-block ">
          <Image src={Store} alt="store icon" width={35} height={35} />
        </span>
        <div className="flex justify-center flex-col">
          <h2 className="md:text-4xl text-3xl font-bold text-accent-150">
            {inView && (
              <>
                {" "}
                <CountUp start={0} end={55000} duration={3} />{" "}
                <span className="text-3xl">+</span>{" "}
              </>
            )}
          </h2>
          <span className="text-primary-150">متجر إلكتروني</span>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        ref={ref}
        className="flex justify-center items-center gap-3"
      >
        <span className="p-4 border-4 rounded-t-2xl rounded-b-xl border-accent-100 inline-block ">
          <Image src={Money} alt="money icon" width={35} height={35} />
        </span>
        <div className="flex justify-center flex-col">
          <h2 className="md:text-4xl text-3xl font-bold text-accent-150">
            {inView && (
              <>
                {" "}
                <CountUp start={0} end={24000000000} duration={3} />{" "}
                <span className="text-3xl">+</span>{" "}
              </>
            )}{" "}
          </h2>
          <span className="text-primary-150 ">مبيعات المنصة</span>
        </div>
      </motion.div>
    </div>
  );
}
