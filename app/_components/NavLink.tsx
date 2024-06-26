"use client";
import { type NavLink } from "@/app/_lib/types";
import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { cn } from "@/app/_lib/utils";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import SallaViewResource from "./SallaViewResource";

export default function NavLink({ link }: { link: NavLink }) {
  const hasSubMenu = link.subLinks.length > 0;
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <Modal>
      <Modal.Open opens={!hasSubMenu ? link.page : ""}>
        <li
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
          className={cn(
            "text-accent-150 transition cursor-pointer relative py-2 rounded-t-lg px-4 flex justify-center gap-1 items-center",
            showSubMenu && hasSubMenu && " bg-white duration-300"
          )}
        >
          {link.page}
          {hasSubMenu && (
            <span>
              {showSubMenu ? <FaMinus size={13} /> : <FaPlus size={13} />}
            </span>
          )}
          <AnimatePresence>
            {hasSubMenu && showSubMenu && (
              <SubMenu links={link.subLinks} setShowSubMenu={setShowSubMenu} />
            )}
          </AnimatePresence>
        </li>
      </Modal.Open>
      <Modal.Window name={link.page}>
        <SallaViewResource resourceName={link.page} href={link.url} />
      </Modal.Window>
    </Modal>
  );
}
