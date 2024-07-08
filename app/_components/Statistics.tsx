"use client";

import React from "react";
import StatsNum from "./StatsNum";
import { childrenVariants, motion } from "../_lib/motionVariants";

export default function Statistics() {
  return (
    <section className="md:py-24 py-12 px-3">
      <motion.div
        variants={childrenVariants}
        initial="initial"
        viewport={{ once: true, amount: 1 }}
        whileInView="animate"
        className="container flex gap-6 px-2 flex-col items-center justify-center"
      >
        <motion.h1
          variants={childrenVariants}
          className="text-accent-150  text-center text-3xl md:text-[40px] font-semibold"
        >
          أكبر منصَّة سعودية للتجارة الإلكترونيَّة في الشرق الأوسط
        </motion.h1>
        <motion.p
          variants={childrenVariants}
          className="text-primary-150  text-center md:text-[21.6px] text-[16px] md:mx-[185px] tracking-wide"
        >
          أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية
          والعالمية الناجحة مع سلة اليوم
        </motion.p>
        <StatsNum variants={childrenVariants} />
      </motion.div>
    </section>
  );
}
