"use client";
import Image from "next/image";
import React from "react";
import RegisterImage from "@/assets/register.png";
import { motion } from "framer-motion";

export default function RegisterInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:flex place-self-center justify-end hidden text-primary-200  gap-3 flex-col items-center"
    >
      <Image
        src={RegisterImage}
        className="object-cover w-[600px] aspect-auto"
        alt="register image"
      />
      <h2 className="text-3xl">كل ما تحتاجه لتنمو بتجارتك الإلكترونية</h2>
      <p className="text-[13px] px-16 text-center">
        سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات اللوجيستية
        والأدوات التسويقية المتكاملة في منصة سلة
      </p>
    </motion.div>
  );
}
