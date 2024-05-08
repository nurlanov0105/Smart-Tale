"use client"
import React, {useState} from 'react';
import {Rows2, Rows3, SlidersHorizontal} from "lucide-react";
import {VacancyItem} from "@/entities/user/vacancyItem";
import {Select} from "@/shared/ui";
import {FiltersVacancies} from "@/features/user/filtersVacancies";

import clsx from "clsx";
import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/themeStore";

const Vacancies = () => {
    const vacancies = [
        {
            title: "Утюжник",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio fuga iusto modi, quia quo? At consectetur dolorum facere illum iste laudantium magnam maxime necessitatibus, nostrum nulla pariatur, quo quos rem repellat suscipit. Aliquid autem commodi earum, itaque praesentium sunt.",
            salary: "20000 - 30000 сом",
            organization: "ОсОО Грин Экспресс",
            city: "Бишкек",
            experience: "Опыт от 1 года до 3 лет",
        },
        {
            title: "Швея",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio fuga iusto modi, quia quo? At consectetur dolorum facere illum iste laudantium magnam maxime necessitatibus, nostrum nulla pariatur, quo quos rem repellat suscipit. Aliquid autem commodi earum, itaque praesentium sunt.",
            salary: "10000 - 40000 сом",
            organization: "ОсОО Грин Экспресс",
            city: "Бишкек",
            experience: "Без опыта",
        },
        {
            title: "Администратор",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio fuga iusto modi, quia quo? At consectetur dolorum facere illum iste laudantium magnam maxime necessitatibus, nostrum nulla pariatur, quo quos rem repellat suscipit. Aliquid autem commodi earum, itaque praesentium sunt.",
            salary: "40000 - 60000 сом",
            organization: "ОсОО Грин Экспресс",
            city: "Бишкек",
            experience: "Опыт от 3 лет",
        },
        {
            title: "Директор",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio fuga iusto modi, quia quo? At consectetur dolorum facere illum iste laudantium magnam maxime necessitatibus, nostrum nulla pariatur, quo quos rem repellat suscipit. Aliquid autem commodi earum, itaque praesentium sunt.",
            salary: "50000 - 100000 сом",
            organization: "ОсОО Грин Экспресс",
            city: "Бишкек",
            experience: "Опыт от 6",
        },
        {
            title: "Менеджер",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio fuga iusto modi, quia quo? At consectetur dolorum facere illum iste laudantium magnam maxime necessitatibus, nostrum nulla pariatur, quo quos rem repellat suscipit. Aliquid autem commodi earum, itaque praesentium sunt.",
            salary: "20000 - 30000 сом",
            organization: "ОсОО Грин Экспресс",
            city: "Бишкек",
            experience: "Опыт от 1 года до 3 лет",
        },{
            title: "Старший утюжник",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio fuga iusto modi, quia quo? At consectetur dolorum facere illum iste laudantium magnam maxime necessitatibus, nostrum nulla pariatur, quo quos rem repellat suscipit. Aliquid autem commodi earum, itaque praesentium sunt.",
            salary: "30000 - 40000 сом",
            organization: "ОсОО Грин Экспресс",
            city: "Бишкек",
            experience: "Опыт от 1 года до 3 лет",
        }
    ]
    const timeList = [
        {value: "За всё время", postValue: "all"},
        {value: "За месяц", postValue: "month"},
        {value: "За неделю", postValue: "week"},
        {value: "За сутки", postValue: "day"},
    ]
    const typeList = [
        {value: "По соответствию", postValue: "all"},
        {value: "По дате", postValue: "date"},
        {value: "По убыванию зарплаты", postValue: "desc"},
        {value: "По возрастанию зарплаты", postValue: "asc"},
    ]

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
                            <VacancyItem item={item} key={idx}/>
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