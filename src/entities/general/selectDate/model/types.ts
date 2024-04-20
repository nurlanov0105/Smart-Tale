import {Dispatch, SetStateAction} from "react";

export type IDateProps = {
    value: number | string
    postValue: number
}

export type DateProps = {
    day: IDateProps
    month: IDateProps
    year: IDateProps
    setDay: Dispatch<SetStateAction<IDateProps>>
    setMonth: Dispatch<SetStateAction<IDateProps>>
    setYear: Dispatch<SetStateAction<IDateProps>>
    type?: "user" | "admin"
}