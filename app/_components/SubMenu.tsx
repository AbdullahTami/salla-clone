"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Modal from "./Modal";
import SallaViewResource from "./SallaViewResource";
import { type Link } from "../_lib/types";

export default function SubMenu({
  links,
  setShowSubMenu,
}: {
  links: Link[];
  setShowSubMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const variants: Variants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    initial: {
      opacity: 0,
      y: 5,
    },
    exit: {
      opacity: 0,
      y: 5,
    },
  };

  return (
    <Modal>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="text-accent-150 rounded-tl-lg rounded-b-lg w-[300px] top-10 right-0 bg-white absolute  flex gap-1 items-center border-[0px] #e5e7eb shadow-2xl"
      >
        <ul className="w-full [&>*:first-child]:rounded-tl-lg  [&>*:last-child]:rounded-b-lg">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <Modal.Open opens={link.label}>
                <li className="hover:bg-primary-50 flex items-center gap-5 transition py-2 px-4 w-full">
                  <Image
                    src={link.icon ? link.icon : ""}
                    alt="icon"
                    width={35}
                    className="object-cover "
                  />

                  <div>
                    <span>{link.label}</span>
                    <p className="text-[#999999] text-[13px]">
                      {link.description}
                    </p>
                  </div>
                </li>
              </Modal.Open>
              <Modal.Window name={link.label} setShowSubMenu={setShowSubMenu}>
                <SallaViewResource
                  resourceName={link.label}
                  href={link.url}
                  closeNav={() => setShowSubMenu?.(false)}
                />
              </Modal.Window>
            </React.Fragment>
          ))}
        </ul>
      </motion.div>
    </Modal>
  );
}
