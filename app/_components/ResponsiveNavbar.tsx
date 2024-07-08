import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";

export default function ResponsiveNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const close = () => setOpenNav((open) => !open);
  return (
    <div className="lg:hidden relative">
      <button
        className="fixed mt-2 text-accent-150 left-3 z-[1000]"
        onClick={() => setOpenNav((open) => !open)}
      >
        {!openNav && <AiOutlineMenu className="h-7 w-7" />}
      </button>
      <nav>
        <Logo fixed />

        {openNav && <MobileNavigation closeNav={close} />}
      </nav>
    </div>
  );
}
