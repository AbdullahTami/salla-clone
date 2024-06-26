"use client";
import React from "react";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useHasScrolledDown, useScrollToTopOnRefresh } from "@/app/_lib/hooks";
import { cn } from "@/app/_lib/utils";
import { navLinks } from "@/app/_lib/data";
import NavLink from "./NavLink";
import { type NavLink as NavLinkType } from "../_lib/types";

export default function Header() {
  const { scrollEffect } = useHasScrolledDown();
  useScrollToTopOnRefresh();
  return (
    <header
      className={cn(
        "bg-[rgb(186,243,230,90%)] top-0 left-0 fixed w-full z-50 flex items-center px-3 transition-all backdrop-blur",
        scrollEffect ? "h-[72px]" : "h-[103px]"
      )}
    >
      {/* not necessarily the best use case scenario but liked it to be featured in  */}
      <Navbar
        links={navLinks}
        render={(link: NavLinkType, index: number) => (
          <React.Fragment key={index}>
            <NavLink link={link} />
          </React.Fragment>
        )}
      />
      <ResponsiveNavbar />
    </header>
  );
}
