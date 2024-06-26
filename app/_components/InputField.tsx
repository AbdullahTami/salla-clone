import React, { useState } from "react";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { cn } from "@/app/_lib/utils";
import { motion } from "framer-motion";
import { AnimatePresence, Variants } from "framer-motion";
import { FormRegister } from "../_lib/types";

type NameProp = "number" | "name" | "email" | "password";
type InputModeProp = "email" | "text" | "numeric";

type InputFieldProps = {
  name: NameProp;
  variants: Variants;
  type: string;
  inputMode: InputModeProp;
  labelText?: string;
  error?: string;
  onValueChange?: () => void;
  detectBarStrength?: { width: string; color: string };
  register: FormRegister;
};

export default function InputField({
  name,
  error,
  type,
  labelText,
  inputMode,
  register,
  variants,
  detectBarStrength,
  onValueChange,
}: InputFieldProps) {
  const [hidePassword, setHidePassword] = useState(false);
  const [fontClass, setFontClass] = useState("poppins");
  // Destructuring the register object is necessary to implement language detection logic
  const { onChange, onBlur, name: RegName, ref } = register(name);

  function languageDetection(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Language detection which checks if value contains Arabic characters
    const arabicPattern = /[\u0600-\u06FF]/;
    if (arabicPattern.test(value)) {
      setFontClass("arabic");
    } else {
      setFontClass("poppins");
    }
  }

  return (
    <motion.div
      variants={variants}
      className="flex flex-col text-sm gap-2 mb-[30px] relative"
    >
      <div className="flex items-center justify-between">
        <label htmlFor={name}>{labelText || name}</label>
        {/* DetectBarStrength component pertains to password input only */}
        <AnimatePresence>
          {detectBarStrength?.width ? (
            <PasswordStrengthIndicator detectBarStrength={detectBarStrength} />
          ) : null}
        </AnimatePresence>
      </div>
      <input
        className={cn(
          `py-1 px-4 border text-primary-150 transition-all duration-300 text-[15px] rounded-md outline-none placeholder:text-[#bbbbbb]  border-[#eee] min-h-10 ${fontClass}`,
          error
            ? "border-[rgba(245,81,87,0.5)]  shadow-[inset_-1px_1px_3px_rgba(244,67,54,.2)]"
            : " focus:border-accent-200"
        )}
        // based on the received props a computation is done for the proper input type. this computation is specifically done for password input field, toggling the type based on the state.
        type={type !== "password" ? type : hidePassword ? "text" : "password"}
        inputMode={inputMode}
        ref={ref}
        onBlur={onBlur}
        name={RegName}
        onChange={(e) => {
          onChange(e);
          languageDetection(e);
          onValueChange?.();
        }}
        id={name}
        placeholder={`أدخل ${labelText}`}
      />
      {/* This pertains to error occurrence */}
      {error && (
        <span className="absolute bottom-[-26px] text-[12px] text-[#f55157]">
          {error}
        </span>
      )}

      {/* this pertains to password field hide & display icons */}
      {name === "password" && (
        <span
          className="text-[#999] cursor-pointer absolute top-[37px] left-3"
          onClick={() => setHidePassword((show) => !show)}
        >
          {hidePassword ? (
            <FiEye className="h-5 w-5" />
          ) : (
            <FiEyeOff className="h-5 w-5" />
          )}
        </span>
      )}
    </motion.div>
  );
}
