"use client";
import React from "react";
import NavButton from "./NavButton";
import Logo from "./Logo";
import { NavLink } from "../_lib/types";

type StoresContainerProps = {
  links: NavLink[];
  render: (link: NavLink, index: number) => React.JSX.Element;
};

export default function Navbar({ links, render }: StoresContainerProps) {
  return (
    <nav className="container hidden lg:flex font-semibold justify-between items-center">
      <Logo />
      <ul className="justify-self-end flex items-center">
        {links.map(render)}
        <NavButton />
      </ul>
    </nav>
  );
}
