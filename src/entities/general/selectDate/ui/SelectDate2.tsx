
import React, { FC } from "react";
import { SelectDateMenu } from "@/shared/ui";
import {useDate} from "../model/useDate";
import styles from "./styles.module.scss";
import {DateProps2} from "../model/types";
const SelectDate2: FC<DateProps2> = (
    {
        month,
        setMonth,
        setYear,
        year,
        setDay,
        day,
        type = "admin", //user будем только передавать, admin по дефолту
    }) => {

    const {
        days,
        months,
        years
    } = useDate(year, month, setMonth, day, setDay, type);
    return (
        <div className={styles.date}>
            <SelectDateMenu
                data={days} // массив
                value={day} //Значение
                setDate={setDay} //Фукнция для изменения значения
                title="День"
                classname={styles.date__day}
                type={type}
            />
            <SelectDateMenu
                data={months}
                value={month}
                setDate={setMonth}
                title="Месяц"
                classname={styles.date__month}
                type={type}
            />
            <SelectDateMenu
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
export default SelectDate2;