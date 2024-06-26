"use client";

import React from "react";
import Button from "./Button";
import { animationVariants, motion } from "../_lib/motionVariants";

export default function SubscribeWidget() {
  return (
    <section className="py-24 mt-24 px-3">
      <motion.div
        variants={animationVariants}
        whileInView="animate"
        viewport={{ once: true, amount: 0.9 }}
        initial="initial"
        className="container gap-10 text-center lg:text-start  flex lg:flex-row flex-col  justify-between items-center rounded-xl bg-accent-100 p-10"
      >
        <div className="flex flex-col gap-3 flex-wrap max-w-3xl">
          <motion.h2
            variants={animationVariants}
            className="text-3xl sm:text-4xl text-accent-150 font-semibold "
          >
            امتلك متجراً احترافياً في سلة
          </motion.h2>
          <motion.p
            variants={animationVariants}
            className="text-primary-200  text-[21.6px]  tracking-wide"
          >
            أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو
            مبيعاتك وتسويق منتجاتك
          </motion.p>
        </div>
        <motion.div variants={animationVariants}>
          <Button to="/register" localPage type="tertiary">
            أنشئ متجرك مجاناَ
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
