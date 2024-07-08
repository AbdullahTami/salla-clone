import { useCountryMenuContext } from "@/app/_context/CountryMenuContext";
import { type Country } from "@/app/_lib/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { memo } from "react";

const Country = memo(function Country({ country }: { country: Country }) {
  const { handleClick, close } = useCountryMenuContext();
  return (
    <li
      onClick={(e) => {
        handleClick(country);

        close();
      }}
      key={country.code}
      className="p-3 hover:bg-[#00495680] cursor-pointer px-2 flex gap-4 items-center transition duration-300 "
    >
      <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} width={26} />
      <span className="text-[13px] text-primary-150">{country.name}</span>
    </li>
  );
});

export default Country;
