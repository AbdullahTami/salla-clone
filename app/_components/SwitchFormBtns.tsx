"use client";
import { cn } from "@/app/_lib/utils";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SwitchFormBtns({ variants }: { variants: Variants }) {
  const pathname = usePathname();
  return (
    <motion.div
      variants={variants}
      className="flex items-center mb-[30px] text-[16px] text-center"
    >
      <Link
        href="/login"
        className={cn(
          "md:py-4 py-3 rounded-r-lg transition grow border hover:bg-[#baf3e6] border-[#76e8cd] text-[#004d5a] cursor-pointer",
          pathname === "/login" ? "bg-[#baf3e6]" : ""
        )}
      >
        تسجيل دخول
      </Link>
      <Link
        href="/register"
        className={cn(
          "md:py-4 py-3 grow border transition rounded-l-lg hover:bg-[#baf3e6] border-[#76e8cd] border-r-0  cursor-pointer text-[#004d5a]",
          pathname === "/register" ? "bg-[#baf3e6]" : ""
        )}
      >
        إنشاء حساب
      </Link>
    </motion.div>
  );
}
