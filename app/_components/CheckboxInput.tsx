import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { motion, Variants } from "framer-motion";
import { cn } from "../_lib/utils";

export default function CheckboxInput({ variants }: { variants: Variants }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <motion.div
      variants={variants}
      className="mb-5 flex justify-between items-center text-sm"
    >
      <div
        className="relative flex gap-3 cursor-pointer"
        onClick={() => setIsChecked((checked) => !checked)}
      >
        <input
          type="checkbox"
          className="appearance-none cursor-pointer rounded-[4px] bg-white border border-accent-200 w-5 h-5 text-accent-200"
        />
        <IoMdCheckmark
          className={cn(
            "text-accent-200 absolute top-[3px] right-[3px] transition-all duration-150",
            isChecked ? "opacity-1" : "opacity-0"
          )}
        />
        تذكرني
      </div>
      نسيت كلمة المرور ؟
    </motion.div>
  );
}
