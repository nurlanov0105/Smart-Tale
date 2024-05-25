"use client";
import {monthsList, daysInCurrentMonth} from "./helper";
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { IDateProps } from "./types";

export const useDate = (
   year: IDateProps,
   month: IDateProps,
   setMonth: Dispatch<SetStateAction<IDateProps>>,
   day: IDateProps,
   setDay: Dispatch<SetStateAction<IDateProps>>,
   type: "user" | "admin"
) => {

   // Список годов
   const yearsList = useCallback(() => {
      const yearsList = [];
      for (let i = 2010; i <= 2030; i++) {
         // Пока 2010 и 2030, потом поменяю на +-текущий год
         yearsList.push({ value: i, postValue: i });
      }
      return yearsList;
   }, []);

   // Вычисялем кол-во дней в месяце
   const getValue = () => {}
   const daysInMonth = daysInCurrentMonth(year.postValue, month.postValue)

   // Список дней
   const daysList = useCallback(() => {
      const days = [];
      for (let i = 1; i <= daysInMonth; i++) {
         days.push({ value: i, postValue: i });
      }

      return days;
      // eslint-disable-next-line
   }, [month, year])

   const [days, setDays] = useState(daysList);
   const months = monthsList()
   const years = yearsList()

   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const currentMonth = currentDate.getMonth() + 1;
   const currentDay = currentDate.getDate();

   // Если будет type === user, Вместо стейтов days, months,years будем использовать отфильтрованные массивы


   const filteredMonths = useMemo(() => {
     return months.filter((item) => {
         if (!year.postValue || year.postValue > currentYear) return item;
         return item.postValue >= currentMonth;
      });

      // eslint-disable-next-line
   }, [year, currentMonth])


   const filteredYears = useMemo(() => {
      return years.filter((item) => item.postValue >= currentYear)

      // eslint-disable-next-line
   }, [currentYear])


   const filteredDays = useMemo(() => {
      return days.filter((item) => {
         if (!year.postValue) return item
         if (month.postValue === currentMonth && year.postValue > currentYear) return item;
         if (month.postValue === currentMonth) return item.postValue > currentDay;
         return item;
      })

      // eslint-disable-next-line
   }, [month, year, days, currentDay])

   const isUser = type === "user"; //если user === true,
   // то мне нужно чтобы показывались только предстоящие дни, месяцы и годы, для этого мы делим создали filteredArrays

   useEffect(() => {
      setDays(daysList()); //при изменении months || years, обновляем кол-во days
      // eslint-disable-next-line
   }, [month, year]);

   //Если вышестоящий useEffect обновляет days,
   // меняем кол-во дней, на минимальный день || максимальный день в месяце
   useEffect(() => {
      const daysAmount = daysList();
      if (day.postValue > daysAmount.length) {
         setDay({ value: daysAmount.length, postValue: daysAmount.length });
      }
      // проверяем тип, после выбран ли день, потом проверяем не пустой ли filteredDays и после сравниваем. У других проверок похожая логика
      if (
         isUser && // проверяем user, потому что только у него нужна фильтрация
         day.postValue &&
         filteredDays.length &&
         day.postValue < filteredDays[0].postValue //если текущий день меньше чем самый меньший из новых доступных дней
      ) {
         setDay({ value: filteredDays[0].value, postValue: filteredDays[0].postValue }); //то устанавливаем самый первый день из нового массива
      }

      if (isUser && month.value && month.postValue < filteredMonths[0].postValue) { //если текущий месяц меньше чем самый меньший из новых доступных месяцев
         setMonth({ value: filteredMonths[0].value, postValue: filteredMonths[0].postValue }); //то устанавливаем первый месяц из нового массива
      }
      // eslint-disable-next-line
   }, [days]);

   return {
      months: !isUser ? months : filteredMonths,
      years: !isUser ? years : filteredYears,
      days: !isUser ? days : filteredDays,
   };
};
