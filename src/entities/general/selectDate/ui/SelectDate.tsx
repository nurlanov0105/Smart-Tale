import React, { FC } from "react";
import { SelectDateField } from "@/shared/ui";
import { DateProps } from "../model/types";
import { useDate } from "../model/useDate";
import styles from "./styles.module.scss";

const SelectDate: FC<DateProps> = ({
   month,
   setMonth,
   setYear,
   year,
   setDay,
   day,
   type = "admin", //user будем только передавать, admin по дефолту
}) => {
   const { days, months, years
   } = useDate(year, month, setMonth, day, setDay, type);

   return (
      <div className={styles.date}>
         <SelectDateField
            data={days} // массив
            value={day} //Значение
            setDate={setDay} //Фукнция для изменения значения
            title="День"
            classname={styles.date__day}
            type={type}
         />
         <SelectDateField
            data={months}
            value={month}
            setDate={setMonth}
            title="Месяц"
            classname={styles.date__month}
            type={type}
         />
         <SelectDateField
            data={years}
            setDate={setYear}
            value={year}
            title="Год"
            classname={styles.date__year}
            type={type}
         />
      </div>
   );
};

export default SelectDate;
