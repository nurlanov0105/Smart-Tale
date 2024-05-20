"use client";
import { useState } from "react";
import type { IDateProps } from "@/entities/general/selectDate";

interface InitialDateProps{
   userDay?: IDateProps,
   userMonth?: IDateProps,
   userYear?: IDateProps,
}
export const useInitialDate = ({userDay, userYear, userMonth}: InitialDateProps) => {

   const isUserDate = (date: IDateProps | undefined, isMonth?: boolean) => {
      if (date) return date

      if (isMonth) return {value: "", postValue: 0}

      return {value: 0, postValue: 0}
   }

   const [day, setDay] = useState<IDateProps>(isUserDate(userDay));
   const [month, setMonth] = useState<IDateProps>(isUserDate(userMonth, true));
   const [year, setYear] = useState<IDateProps>(isUserDate(userYear));


   return { day, setDay, year, setYear, month, setMonth };
};
