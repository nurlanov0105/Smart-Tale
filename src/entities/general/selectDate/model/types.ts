import {Control,UseFormSetValue} from "react-hook-form";
import {Dispatch, SetStateAction} from "react";

export type IDateProps = {
    value: number | string
    postValue: number
}

export type DateProps = {
    control: Control<any, any>
    setValue: UseFormSetValue<any>

    day: IDateProps
    month: IDateProps
    year: IDateProps
    type?: "user" | "admin"
}

export type DateProps2 = {
    setDay: Dispatch<SetStateAction<IDateProps>>
    setMonth: Dispatch<SetStateAction<IDateProps>>
    setYear: Dispatch<SetStateAction<IDateProps>>
    day: IDateProps
    month: IDateProps
    year: IDateProps
    type?: "user" | "admin"
}