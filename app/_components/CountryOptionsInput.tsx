"use client";
import React, { useState } from "react";
import { countryList } from "@/app/_lib/data";
import Country from "./Country";
import { useOutsideClick } from "@/app/_lib/hooks";
import { useCountryMenuContext } from "@/app/_context/CountryMenuContext";
import { cn } from "../_lib/utils";
import { FixedSizeList as List } from "react-window";

export default function CountryOptionsInput({ error }: { error?: string }) {
  const { close } = useCountryMenuContext();
  const { ref } = useOutsideClick(close);
  const [searchQuery, setSearchQuery] = useState("");
  const searchedCountries =
    searchQuery.length > 0
      ? countryList.filter((country) =>
          `${country.name} ${country.phone}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : countryList;

  return (
    <div
      ref={ref}
      className="absolute arabic border border-[#eee] bg-white max-h-[200px] overflow-hidden  z-50 top-[72px] w-full"
    >
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className={cn(
          "w-[calc(100%-10px)] px-2 rounded-md transition-all duration-300 mx-[5px] mt-[5px] mb-[10px]  bg-[#f8f8f8] h-[30px] placeholder:text-[#bbbbbb] text-[13px] outline-none",
          error && "shadow-[inset_-1px_1px_3px_rgba(244,67,54,.2)]"
        )}
        type="text"
        placeholder="Afghanistan (افغانستان)"
      />
      <ul className="">
        <List
          direction="rtl"
          height={153}
          itemCount={searchedCountries.length}
          itemSize={35}
          width="100%"
        >
          {({ index, style }) => (
            <div style={style}>
              <Country country={searchedCountries[index]} />
            </div>
          )}
        </List>
      </ul>
    </div>
  );
}
