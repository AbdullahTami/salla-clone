import { Variants } from "framer-motion";
export { motion } from "framer-motion";

export const animationVariants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,

      type: "spring",
      stiffness: 300,
      damping: 13,
    },
  },
  initial: {
    opacity: 0,
    y: 40,
  },
};

export const childrenVariants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  initial: {
    opacity: 0,
    y: 40,
  },
};
