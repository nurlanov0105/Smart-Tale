import {getDate, getMonth, getYear, parseISO} from "date-fns";
import {monthsForDate} from "@/entities/general/selectDate/model/helper";

export const getOrganizationDate = (date: string) => {

    if (date){
        const dateFormat = parseISO(date);

        const year = getYear(dateFormat);
        const month = monthsForDate()[getMonth(dateFormat)]
        const day = getDate(dateFormat);

        return {year, month, day}
    }
    return {
        year: "2024",
        month: {value: "Января", postValue: 1},
        day: 1
    }

}