import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDisableScroll, useOutsideClick } from "../_lib/hooks";
import { navLinks } from "../_lib/data";
import Button from "./Button";
import { motion } from "framer-motion";
import MobileAccordionNavigation from "./MobileAccordionNavigation";
import Modal from "./Modal";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";

import SallaViewResource from "./SallaViewResource";

export default function MobileNavigation({
  closeNav,
}: {
  closeNav: () => void;
}) {
  const { ref } = useOutsideClick(closeNav);
  const [curOpen, setCurOpen] = useState<null | number>(null);

  useDisableScroll(closeNav);

  return createPortal(
    <div className="fixed lg:hidden inset-0 z-50 bg-[rgb(0,73,85,95%)] backdrop-blur-[3px]">
      <button className="absolute z-50 left-3 top-6 text-accent-50">
        <HiXMark className="h-7 w-7" />
      </button>
      <motion.div
        initial={{ y: 100 }}
        animate={{
          y: 0,

          transition: {
            type: "spring",
            stiffness: 350,
            damping: 12,
          },
        }}
        ref={ref}
        className="bg-white absolute w-full bottom-0 left-0 right-0"
      >
        <ul className="flex flex-col p-4 font-semibold text-accent-200 text-base justify-between border-b border-[rgb(238,238,238)] pb-3">
          <Modal>
            {navLinks.map((link, index) => {
              if (link.subLinks.length === 0)
                return (
                  <React.Fragment key={link.pageId}>
                    <Modal.Open opens={link.page}>
                      <li className="py-3 cursor-pointer">
                        <h3>{link.page}</h3>
                      </li>
                    </Modal.Open>
                    <Modal.Window name={link.page} accordionEnable>
                      <SallaViewResource
                        href={link.url}
                        resourceName={link.page}
                      />
                    </Modal.Window>
                  </React.Fragment>
                );
              return (
                <MobileAccordionNavigation
                  key={link.pageId}
                  title={link.page}
                  curOpen={curOpen}
                  onOpen={setCurOpen}
                  links={link.subLinks}
                  num={index}
                />
              );
            })}
          </Modal>
        </ul>

        <div className="flex flex-col px-5 text-center p-4 gap-4 mt-auto ">
          <Link href="/login" className="text-accent-200 font-semibold text-lg">
            تسجيل دخول
          </Link>
          <Button
            type="primary"
            to="/register"
            className="text-white py-4"
            localPage
          >
            أنشئ متجرك مجاناَ
          </Button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
