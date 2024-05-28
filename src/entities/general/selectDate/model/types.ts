import {Control,UseFormSetValue} from "react-hook-form";
import {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";

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