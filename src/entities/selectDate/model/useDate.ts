"use client"
import {Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState} from "react";
import {IDateProps} from "@/entities/selectDate/model/types";

export const useDate = (
    year: IDateProps,
    month: IDateProps,
    setMonth: Dispatch<SetStateAction<IDateProps>>,
    day: IDateProps,
    setDay: Dispatch<SetStateAction<IDateProps>>,
    type: "user" | "admin") => {

    //Список месяцев
    const monthsList = useMemo(() => {
        return [
            {value: "Январь", postValue: 1},
            {value: "Февраль", postValue: 2},
            {value: "Март", postValue: 3},
            {value: "Апрель", postValue: 4},
            {value: "Май", postValue: 5},
            {value: "Июнь", postValue: 6},
            {value: "Июль", postValue: 7},
            {value: "Август", postValue: 8},
            {value: "Сентябрь", postValue: 9},
            {value: "Октябрь", postValue: 10},
            {value: "Ноябрь", postValue: 11},
            {value: "Декабрь", postValue: 12}
        ]
    }, [])

    // Список годов
    const yearsList = useCallback(() => {
        const yearsList = []
        for (let i = 2010; i <= 2030; i++) { // Пока 2010 и 2030, потом поменяю на +-текущий год
            yearsList.push({value: i, postValue: i})
        }
        return yearsList
    }, [])

    // Вычисялем кол-во дней в месяце
    const daysInMonth = () => { // не кеширую, потому что данные будут меняться
        const days = new Date(+year.value, month.postValue, 0)  //value может быть string,
        // потому что только у месяца, typeof === string, а у day || year typeof === number
        return days.getDate()
    }

    // Список дней
    const daysList = useCallback(() => {
        const days = []
        for (let i = 1; i <= daysInMonth(); i++) {
            days.push({value: i, postValue: i})
        }

        return days
        // eslint-disable-next-line
    }, [month, year])

    const [days, setDays] = useState(daysList)
    const [months] = useState(monthsList)
    const [years] = useState(yearsList)

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate()

    // Если будет type === user, Вместо стейтов days, months,years будем использовать отфильтрованные массивы

    const filteredMonths = months.filter((item) =>{
        if (year.postValue > currentYear) return item
        return item.postValue >= currentMonth
    });
    const filteredYears = years.filter((item) => item.postValue >= currentYear);
    const filteredDays = days.filter((item) => {
        if (month.postValue === currentMonth && year.postValue > currentYear) return item
        if (month.postValue === currentMonth) return item.postValue > currentDay
        return item
    })

    const isUser = type === "user" //если user === true,
    // то мне нужно чтобы показывались только предстоящие дни, месяцы и годы, для этого мы делим создали filteredArrays


    useEffect(() => {
        setDays(daysList()) //при изменении months || years, обновляем кол-во days
        // eslint-disable-next-line
    }, [month, year])

    //Если вышестоящий useEffect обновляет days,
    // меняем кол-во дней, на минимальный день || максимальный день в месяце
    useEffect(() => {
        const daysAmount = daysList()
        if (day.postValue > daysAmount.length){
            setDay({value: daysAmount.length, postValue: daysAmount.length})
        }
    // проверяем тип, после выбран ли день, потом проверяем не пустой ли filteredDays и после сравниваем. У других проверок похожая логика
        if (isUser && day.postValue && filteredDays.length && day.postValue < filteredDays[0].postValue){
            setDay({value: filteredDays[0].value, postValue: filteredDays[0].postValue})
        }

        if (isUser && month.value && month.postValue < filteredMonths[0].postValue){
            setMonth({value: filteredMonths[0].value, postValue: filteredMonths[0].postValue})
        }
        // eslint-disable-next-line
    }, [days])



    return {
        months: !isUser ? months : filteredMonths,
        years: !isUser ? years : filteredYears,
        days: !isUser ? days : filteredDays
    }
}

