import { Variants, motion } from "framer-motion";
import React from "react";
import FormBtn from "./FormBtn";

export default function FormBtnSubmission({
  isSubmitting,
  variants,
}: {
  isSubmitting: boolean;
  variants: Variants;
}) {
  return (
    <motion.div variants={variants} className="text-center">
      <FormBtn isSubmitting={isSubmitting} />
      <div>
        <small>
          بالتسجيل فأنا أوافق على{" "}
          <span className="text-accent-200">سياسات منصة سلة</span>{" "}
        </small>
      </div>
    </motion.div>
  );
}
