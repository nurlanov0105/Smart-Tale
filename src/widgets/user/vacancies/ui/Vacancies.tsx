"use client"
import React, {useState} from 'react';
import {Rows2, Rows3, SlidersHorizontal} from "lucide-react";
import {VacancyItem} from "@/entities/user/vacancyItem";
import {Select} from "@/shared/ui";
import {useThemeStore} from "@/shared/themeStore";
import {timeList, typeList, vacancies} from "../model/values.data";
import {FiltersVacancies} from "@/features/user/filtersVacancies";

import clsx from "clsx";
import styles from "./styles.module.scss"

const Vacancies = () => {

    const theme = useThemeStore((state) => state.theme);
    const [selectedDate, setSelectedDate] = useState(timeList[0])
    const [selected, setSelected] = useState(typeList[0])

    const [withFilters, setWithFilters] = useState(false)
    const [typeView, setTypeView] = useState(false)

    const handleFilters = () => setWithFilters(!withFilters)
    const handleTypeView = () => setTypeView(!typeView)

    return (
        <div className={clsx(styles.vacancies, styles[theme])}>
            <div className={styles.vacancies__title}>
                <h4 className="h4">Найдено 12 вакансий</h4>
            </div>

            <div className={styles.vacancies__filters}>
                <div className={styles.vacancies__types}>
                    <button onClick={handleTypeView}>
                        <Rows2
                            className={clsx(styles.vacancies__type, {
                            [styles.vacancies__type_active]: !typeView})}
                        />
                    </button>
                    <button onClick={handleTypeView}>
                        <Rows3
                            className={clsx(styles.vacancies__type, {
                            [styles.vacancies__type_active]: typeView})}
                        />
                    </button>
                </div>
                <div className={styles.vacancies__selects}>
                    <Select
                        selected={selectedDate}
                        setSelected={setSelectedDate}
                        data={timeList}
                        classname={styles.vacancies__select}
                    />
                    <Select
                        selected={selected}
                        setSelected={setSelected}
                        data={typeList}
                        classname={styles.vacancies__selectType}
                    />
                    <button onClick={handleFilters} className={styles.vacancies__filter}><SlidersHorizontal/></button>
                </div>
            </div>


            <div className={clsx({
                [styles.vacancies__withoutFilters]: !withFilters,
                [styles.vacancies__row]: withFilters
            })}>
                <div className={styles.vacancies__list}>

                    {
                        vacancies.map((item, idx) => (
                            <VacancyItem item={item} key={idx} typeView={typeView}/>
                        ))
                    }
                </div>

                <div className={clsx(styles.vacancies__transition, {
                    [styles.vacancies__transition_show]: withFilters
                })}>
                    <FiltersVacancies/>
                </div>
            </div>
        </div>
    );
};

export default Vacancies;