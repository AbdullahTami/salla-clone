"use client";
import { LuPlus } from "react-icons/lu";
import CountryOptionsInput from "./CountryOptionsInput";
import { useCountryMenuContext } from "@/app/_context/CountryMenuContext";
import { cn } from "@/app/_lib/utils";
import { Variants, motion } from "framer-motion";
import { FormRegister } from "../_lib/types";
import { IoIosArrowDown } from "react-icons/io";

export default function CustomSelectCountry({
  register,
  error,
  variants,
}: {
  register: FormRegister;
  error?: string;
  variants: Variants;
}) {
  const { showOptions, close, selectedIndex } = useCountryMenuContext();

  return (
    <motion.div variants={variants} className="relative text-sm mb-[30px]">
      {/* Select Input */}
      <label className=" inline-block mb-2">رقم الجوال</label>
      <div className="flex items-center justify-center">
        <input
          type="hidden"
          id="country"
          defaultValue={selectedIndex.name}
          {...register("country")}
        />
        <input
          {...register("number")}
          className={cn(
            "w-full outline-none placeholder:text-[#bbbbbb] py-1 pr-4 flex items-center transition-all duration-300 justify-center border text-primary-150 text-[15px] border-[#eee] min-h-10",
            error
              ? "border-[rgba(245,81,87,0.5)] shadow-[inset_-1px_1px_3px_rgba(244,67,54,.2)]"
              : "focus:border-accent-200"
          )}
          type="number"
          inputMode="numeric"
          id="number"
          placeholder={`أدخل رقم الجوال`}
        />
        <div
          onClick={(e) => {
            close();
          }}
          className="absolute cursor-pointer left-0 flex items-center text-primary-150 border-r-[1.5px] gap-[0.4px] border-[#eee] px-2"
        >
          <div className="flex items-center">
            <span className="-ml-[2px]">{selectedIndex.phone}</span>
            <span>
              <LuPlus size={13} />
            </span>
          </div>
          <span>
            <IoIosArrowDown size={13} />
          </span>
        </div>
      </div>
      {error && (
        <span className="absolute bottom-[-26px] text-[12px] text-[#f55157]">
          {error}
        </span>
      )}
      {/* Options */}
      {showOptions ? <CountryOptionsInput error={error} /> : null}
    </motion.div>
  );
}
