"use client";
import { MaskEventDetail } from "@react-input/mask";
import React, {useState, useRef, useEffect} from "react";
import {useDebounce} from "@/shared/lib";

const Flags = {
   KG: "kgFlag",
   KZ: "kzFlag",
   RU: "ruFlag",
};

const CountryCodes = {
   KG: "+996 (999) 999 999",
   KZ: "+7 (999) 999 9999",
   RU: "+7 (999) 999-99-99",
};
const masks = {
   KG: "+996 (___) __-__-__",
   KZ: "+7 (999) 999 9999",
   RU: "+7 (___) ___-__-__",
}

type CountryCode = keyof typeof CountryCodes;
type FlagsType = keyof typeof Flags;

export const usePhoneNumber = (watch: any) => {
   const countries = [
      {value: "KG", postValue: "KG"},
      {value: "RU", postValue: "RU"},
      {value: "KZ", postValue: "KZ"},
   ]
   const [country, setCountry] = useState(countries[0]);

   const telValue = watch("tel")
   const debouncedValue = useDebounce(telValue)

   //const firstThreeChars = telValue.substring(0, 3);


   return {CountryCodes, Flags, country, masks, setCountry, countries}
}

// export const usePhoneNumber = () => {
//    const [tel, setTel] = useState<MaskEventDetail | null>(null);
//    const [country, setCountry] = useState<string>("KG");
//    const [activeSelect, setActiveSelect] = useState<boolean>(false);
//    const inputRef = useRef(null);
//
//    // const onChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value);
//
//    const isValidNumber = (number: string, country: string, comment: string) => {
//       const format = CountryCodes[country as CountryCode];
//       const digits = number.replace(/\D/g, "");
//       const requiredLength = format.replace(/\D/g, "").length;
//       return digits.length === requiredLength && comment !== "";
//    };
//
//    const handleFlagClick = () => {
//       setActiveSelect(!activeSelect);
//       setCountry("KG");
//    };
//
//    const handleOptionClick = (countryCode: string) => {
//       setCountry(countryCode);
//       setActiveSelect(false);
//       setTel(null);
//    };
//
//    return {
//       tel,
//       country,
//       activeSelect,
//       inputRef,
//       setTel,
//       isValidNumber,
//       handleFlagClick,
//       handleOptionClick,
//       CountryCodes,
//    };
// };
//
// export default usePhoneNumber;
