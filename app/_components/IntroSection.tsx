"use client";
import React from "react";
import IntroImage from "@/assets/intro.png";
import Image from "next/image";
import Button from "./Button";
import Modal from "./Modal";
import SallaViewResource from "./SallaViewResource";
import { animationVariants, motion } from "../_lib/motionVariants";

export default function Intro() {
  return (
    <section className="md:min-h-screen md:pt-14 bg-accent-100">
      <motion.div
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="px-2 text-center pt-40 pb-8 flex h-full justify-center flex-col items-center container gap-4 md:gap-7"
      >
        <motion.h1
          variants={animationVariants}
          className="text-accent-200 text-3xl md:text-4xl font-bold "
        >
          سلَّة..تجارة ذكيَّة وسهلة
        </motion.h1>
        <motion.p
          variants={animationVariants}
          className="md:text-[21.6px] text-[16px] md:mx-[185px] tracking-wide text-accent-200 md:leading-8"
        >
          أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من
          الحلول الرقميَّة الذكيَّة للمدفوعات، والشحن، وإدارة المخزون، والتسويق،
          بكل سهولة؛ لأن نجاحك لا يحتاج إلى تعقيد.
        </motion.p>
        <div
          className="flex flex-col md:flex-row text-[21.6px] font-bold justify-center items-center gap-3 md:gap-5"
        >
          <motion.div variants={animationVariants}>
            <Button to="/register" type="primary" localPage>
              أنشئ متجرك مجاناَ
            </Button>
          </motion.div>

          <motion.div variants={animationVariants}>
            <Modal>
              <Modal.Open opens="demo">
                <Button type="secondary">تجربة المنصة</Button>
              </Modal.Open>
              <Modal.Window name="demo">
                <SallaViewResource
                  resourceName="تجربة المنصة"
                  href="https://demo.salla.sa/"
                />
              </Modal.Window>
            </Modal>
          </motion.div>
        </div>
        <motion.div variants={animationVariants}>
          <Image src={IntroImage} alt="intro image" className="object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}
