"use client";
import { type Feature } from "@/app/_lib/types";
import Image from "next/image";
import React from "react";
import { RxDoubleArrowLeft } from "react-icons/rx";
import DownloadLinks from "./DownloadLinks";
import { cn } from "@/app/_lib/utils";
import { childrenVariants, motion } from "../_lib/motionVariants";

export default function Feature({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const shiftLayout = index % 2 == 0;
  return (
    <article
      className={cn("px-3 md:py-24 py-12", !shiftLayout && "bg-primary-50")}
    >
      <motion.div
        variants={childrenVariants}
        viewport={{ once: true, amount: 0.7 }}
        whileInView="animate"
        initial="initial"
        className={`container gap-10 grid grid-cols-1 md:grid-cols-2 items-center`}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          className={`${shiftLayout && "md:order-1 "}`}
        >
          <Image
            src={feature.imageSrc}
            className="object-cover"
            alt="feature photo"
            width={650}
            height={650}
          />
        </motion.div>

        <motion.div
          variants={childrenVariants}
          className={`space-y-6 ${index === 1 && "md:justify-self-center"} `}
        >
          <motion.h2
            variants={childrenVariants}
            className="text-3xl md:text-4xl  text-accent-200 font-semibold"
          >
            {feature.title}
          </motion.h2>
          <motion.p variants={childrenVariants} className="text-primary-100">
            {feature.description}
          </motion.p>
          <ul className="text-primary-200 space-y-3 mt-2">
            {feature.bulletPoints.map((item, index) => (
              <motion.li
                variants={childrenVariants}
                className="flex items-center gap-2"
                key={index}
              >
                <RxDoubleArrowLeft
                  style={{
                    color: "#004956",
                    width: "20px",
                    height: "15px",
                    fontWeight: "800px",
                  }}
                />
                {item}
              </motion.li>
            ))}
          </ul>
          {feature.hrefAppStore && feature.hrefGooglePlay && (
            <motion.div variants={childrenVariants}>
              <DownloadLinks
                appStore={feature.hrefAppStore}
                googlePlay={feature.hrefGooglePlay}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </article>
  );
}
