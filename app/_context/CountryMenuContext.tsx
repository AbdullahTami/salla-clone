"use client";

import { type Country } from "@/app/_lib/types";
import React, { createContext, useContext, useMemo, useState } from "react";

type CountryMenuContextType = {
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIndex: Country;
  setSelectedIndex: React.Dispatch<React.SetStateAction<Country>>;
  handleClick: (country: Country) => void;
  close: () => void;
};

const CountryMenuContext = createContext<null | CountryMenuContextType>(null);

function CountryMenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<Country>({
    name: "Saudi Arabia (المملكة العربية السعودية)",
    code: "SA",
    phone: 966,
  });
  function handleClick(selectedCountry: Country) {
    setSelectedIndex(selectedCountry);
  }
  const close = () => setShowOptions((show) => !show);

  const values = useMemo(() => {
    return {
      showOptions,
      setShowOptions,
      selectedIndex,
      setSelectedIndex,
      handleClick,
      close,
    };
  }, [selectedIndex, showOptions]);

  return (
    <CountryMenuContext.Provider value={values}>
      {children}
    </CountryMenuContext.Provider>
  );
}

function useCountryMenuContext() {
  const context = useContext(CountryMenuContext);
  if (context === null || undefined)
    throw new Error(
      "CountryMenuContext was used outside of CountryMenuContextProvider"
    );
  return context;
}

export { useCountryMenuContext, CountryMenuContextProvider };
