import { getDate, getHours, getMinutes, getMonth, getYear } from "date-fns";

export const useGetDates = (date: string) => {
   const minutesSimple = getMinutes(date);
   const hoursSimple = getHours(date);
   //patstart


   const day = getDate(date);
   const month = getMonth(date);
   const year = getYear(date);

   const hours = String(hoursSimple).padStart(2, '0');
   const minutes = String(minutesSimple).padStart(2, '0');

   return {
      day,
      month,
      year,
      hours,
      minutes,
   };
};
