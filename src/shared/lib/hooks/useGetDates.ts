import {getDate, getHours, getMinutes, getMonth, getYear} from "date-fns";

export const useGetDates = (date: string) => {
    const minutes = getMinutes(date)
    const hours = getHours(date)

    const day = getDate(date)
    const month = getMonth(date)
    const year = getYear(date)


    return {
        day, month, year, hours, minutes
    }
}