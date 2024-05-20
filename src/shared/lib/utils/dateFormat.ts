// export const dateFormat = (value: number) => {
//
//     if (value < 10) {
//
//         return `0${value}`
//
//     } else {
//
//         return value
//
//     }
//
// }

import {IDateProps} from "@/entities/general/selectDate/model/types";

export const dateFormat = ({year, month, day}: {year: IDateProps, month: IDateProps, day: IDateProps}) => {

    if (day.postValue < 10 && month.postValue < 10) {

        return `${year.postValue}-0${month.postValue}-0${day.postValue}`
    }

    if (day.postValue < 10 ) {

        return `${year.postValue}-${month.postValue}-0${day.postValue}`
    }

    return `${year.postValue}-0${month.postValue}-${day.postValue}`
}



