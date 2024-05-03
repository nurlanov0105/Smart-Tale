"use client";
import { useState } from "react";
import type { IDateProps } from "@/entities/general/selectDate";

export const useInitialDate = () => {
   const [day, setDay] = useState<IDateProps>({ value: 0, postValue: 0 });
   const [month, setMonth] = useState<IDateProps>({ value: "", postValue: 0 });
   const [year, setYear] = useState<IDateProps>({ value: 0, postValue: 0 });

   return { day, setDay, year, setYear, month, setMonth };
};
