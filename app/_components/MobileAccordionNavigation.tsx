import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";
import React from "react";
import { cn } from "../_lib/utils";
import Modal from "./Modal";
import SallaViewResource from "./SallaViewResource";
import { type Link } from "../_lib/types";

export default function MobileAccordionNavigation({
  links,
  num,
  onOpen,
  curOpen,
  title,
}: {
  links: Link[];
  num: number;
  onOpen: React.Dispatch<React.SetStateAction<number | null>>;
  curOpen: null | number;
  title: string;
}) {
  const isOpen = num === curOpen;
  return (
    <li className="py-3 cursor-pointer">
      <h3
        className="relative cursor-pointer flex items-center justify-between"
        onClick={() => onOpen(isOpen ? null : num)}
      >
        <span className={`${isOpen ? "text-[#020202]" : "text-accent-200"}`}>
          {" "}
          {title}{" "}
        </span>

        <span
          role="button"
          className={`${isOpen ? "text-[#020202]" : "text-[#7fa6ac]"}`}
        >
          {/* ternaries triggered a certain issue that prompted this workaround */}
          <FiMinus className={`${!isOpen && "hidden"}`} />
          <FiPlus className={`${isOpen && "hidden"}`} />
        </span>
      </h3>

      <ul
        className={cn(
          "mr-10 overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-1" : "opacity-0 max-h-0"
        )}
      >
        {links.map((link) => {
          return (
            <React.Fragment key={link.id}>
              <Modal.Open opens={link.label}>
                <li
                  className={`
                flex py-2 gap-4 items-center
                  duration-[0.5]`}
                >
                  <Image
                    src={link.icon ? link.icon : ""}
                    alt="icon"
                    width={30}
                    className="object-cover"
                  />
                  <div className="-space-y-1">
                    <span className="text-primary-200">{link.label}</span>
                    <p className="text-[#999999] text-[13px]">
                      {link.description}
                    </p>
                  </div>
                </li>
              </Modal.Open>
              <Modal.Window name={link.label} accordionEnable>
                <SallaViewResource resourceName={link.label} href={link.url} />
              </Modal.Window>
            </React.Fragment>
          );
        })}
      </ul>
    </li>
  );
}
