"use client";
import {useEffect, useState} from "react";
import type { IDateProps } from "@/entities/general/selectDate";
import {format, getDate, getMonth, getYear, parseISO} from "date-fns";
import {monthsList} from "@/entities/general/selectDate/model/helper";

interface InitialDateProps{
   userDay?: IDateProps,
   userMonth?: IDateProps,
   userYear?: IDateProps,
}
export const useInitialDate = (date?: string | undefined, isSuccess?: boolean) => {

   const [day, setDay] = useState<IDateProps>({value: 0, postValue: 0});
   const [month, setMonth] = useState<IDateProps>({value: "", postValue: 0});
   const [year, setYear] = useState<IDateProps>({value: 0, postValue: 0});

   // useEffect(() => {
   //    if (date){
   //       const parsedDateSimple = parseISO(date);
   //
   //       const yearSimple = getYear(parsedDateSimple);
   //       const monthSimple = getMonth(parsedDateSimple) + 1;
   //       const daySimple = getDate(parsedDateSimple);
   //
   //       setYear({value: yearSimple, postValue: yearSimple})
   //       setMonth(() => {
   //          const month = monthsList()
   //              .find(month => month.postValue === monthSimple)
   //
   //          return {value: month!.value, postValue: monthSimple}
   //       })
   //       setDay({value: daySimple, postValue: daySimple})
   //    }
   // }, [isSuccess]);


   // const userDay = {value: 0, postValue: 0}
   // const userMonth = {value: 0, postValue: 0}
   // const userYear = {value: 0, postValue: 0}
   //
   // const isUserDate = (date: IDateProps | undefined, isMonth?: boolean) => {
   //    if (date) return date
   //
   //    if (isMonth) return {value: "", postValue: 0}
   //
   //    return {value: 0, postValue: 0}
   // }


   return { day, setDay, year, setYear, month, setMonth };
};
