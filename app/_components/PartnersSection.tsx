"use client";
import React from "react";
import Partners from "./Partners";
import { animationVariants, motion } from "../_lib/motionVariants";

export default function PartnersSection() {
  return (
    <section>
      <motion.div
        variants={animationVariants}
        whileInView="animate"
        viewport={{ once: true, amount: 0.9 }}
        initial="initial"
        className="container text-center"
      >
        <motion.h2
          variants={animationVariants}
          className="text-3xl sm:text-4xl  text-accent-200 font-semibold mb-20"
        >
          شركاء النجاح
        </motion.h2>

        <motion.div
          variants={animationVariants}
          className="flex h-[300px] relative"
        >
          <Partners />
        </motion.div>
      </motion.div>
    </section>
  );
}
