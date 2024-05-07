"use client"
import React, {useState} from 'react';
import {VacancyItem} from "@/entities/user/vacancyItem";
import styles from "./styles.module.scss"
import {Select} from "@/shared/ui";
import {Rows2, Rows3, SlidersHorizontal} from "lucide-react";
import {FiltersVacancies} from "@/features/user/filtersVacancies";

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

    const [selectedDate, setSelectedDate] = useState(timeList[0])
    const [selected, setSelected] = useState(typeList[0])

    const [withFilters, setWithFilters] = useState(false)


    return (
        <div className={styles.vacancies}>
            <div className={styles.vacancies__title}>
                <h4 className="h4">Найдено 12 вакансий</h4>
            </div>
            <div className={styles.vacancies__filters}>

                <div className={styles.vacancies__types}>
                    <button><Rows2 className={styles.vacancies__type}/></button>
                    <button><Rows3 className={styles.vacancies__type}/></button>
                </div>
                <div className={styles.vacancies__selects}>
                    <Select classname={styles.vacancies__select} selected={selectedDate} setSelected={setSelectedDate}
                            data={timeList}/>
                    <Select classname={styles.vacancies__select} selected={selected} setSelected={setSelected}
                            data={typeList}/>
                    <button className={styles.vacancies__filter}><SlidersHorizontal/></button>
                </div>
            </div>


            <div className={styles.vacancies__row}>
                <div className={styles.vacancies__list}>

                    {
                        vacancies.map((item, idx) => (
                            <VacancyItem item={item} key={idx}/>
                        ))
                    }
                </div>
                <FiltersVacancies/>
            </div>
        </div>
    );
};

export default Vacancies;