import { getDate, getMonth, getYear, parseISO } from "date-fns";

export const monthsForDate = () => {
   return [
      { value: "января", postValue: 1 },
      { value: "февраля", postValue: 2 },
      { value: "марта", postValue: 3 },
      { value: "апреля", postValue: 4 },
      { value: "мая", postValue: 5 },
      { value: "июня", postValue: 6 },
      { value: "июля", postValue: 7 },
      { value: "августа", postValue: 8 },
      { value: "сентября", postValue: 9 },
      { value: "октября", postValue: 10 },
      { value: "ноября", postValue: 11 },
      { value: "декабря", postValue: 12 },
   ];
};

export const getOrganizationDate = (date: string) => {
   if (date) {
      const dateFormat = parseISO(date);

      const year = getYear(dateFormat);
      const month = monthsForDate()[getMonth(dateFormat)];
      const day = getDate(dateFormat);

      return { year, month, day };
   }
   return {
      year: "2024",
      month: { value: "Января", postValue: 1 },
      day: 1,
   };
};
