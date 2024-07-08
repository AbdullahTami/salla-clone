"use client";
import { motion } from "framer-motion";
import { type Store } from "@/app/_lib/types";
import { Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

const variants: Variants = {
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,

      type: "spring",
      stiffness: 300,
      damping: 13,
    },
  }),
  initial: {
    opacity: 0,
    y: 40,
  },
};
export default function StoreCard({
  store,
  index,
}: {
  store: Store;
  index: number;
}) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 1 }}
      custom={index}
      className="flex cursor-pointer border-4 border-transparent hover:border-accent-50 hover:shadow-xl rounded-xl px-6 py-4 bg-white lg:max-w-[375px] items-center gap-3"
    >
      <span className="p-4 border-4 rounded-t-2xl rounded-b-xl border-accent-50 inline-block ">
        <Image src={store.imageSrc} alt="money icon" width={35} height={35} />
      </span>
      <div className="flex justify-center flex-col">
        <h2 className="text-xl font-bold text-accent-150">
          {store.storeCategory}
        </h2>
        <span className="text-primary-150 ">{store.description}</span>
      </div>
    </motion.div>
  );
}
