import React from "react";
import { motion } from "framer-motion";
import { cn } from "../_lib/utils";
export default function PasswordStrengthIndicator({
  detectBarStrength,
}: {
  detectBarStrength: { width: string; color: string };
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "w-[200px] relative bg-[#eee] h-[5px] rounded-[4px] before:absolute before:h-[5px]  before:rounded-[4px] before:right-0 before:transition-all before:duration-500",
        `${detectBarStrength.width} ${detectBarStrength.color}`
      )}
    ></motion.span>
  );
}
