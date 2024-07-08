"use client";
import React from "react";
import { storeCategories } from "@/app/_lib/data";
import StoreCard from "./StoreCard";
import StoresContainer from "./StoresContainer";
import { Store } from "../_lib/types";
import { animationVariants, motion } from "../_lib/motionVariants";

export default function StoreCategories() {
  return (
    <section className="py-24 bg-primary-50 px-3">
      <motion.div
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="px-2 -mt-5  container flex flex-col gap-9  justify-center"
      >
        <motion.h1
          variants={animationVariants}
          className="text-3xl font-semibold text-center text-accent-200"
        >
          سلة تفهم كافة إحتياجاتك
        </motion.h1>
        <motion.p
          variants={animationVariants}
          className="text-primary-150 -mt-5 text-center md:text-[21.6px] text-[16px] tracking-wide"
        >
          مهما كان مجال تجارتك يمكنك الاعتماد على سلة ودعمها لمختلف القطاعات
        </motion.p>
        <motion.div
          variants={animationVariants}
          className="grid md:gap-8 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <StoresContainer
            stores={storeCategories}
            render={(store: Store, index: number) => (
              <React.Fragment key={index}>
                <StoreCard store={store} index={index} />
              </React.Fragment>
            )}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
