import {Dispatch, SetStateAction} from "react";
import {Control, FieldValues, SetValueConfig, UseControllerProps, UseFormSetValue} from "react-hook-form";
import {OrderCreateFormType} from "@/features/user/orderForm/model/types";

export type IDateProps = {
    value: number | string
    postValue: number
}

export type DateProps = {
    control: Control<OrderCreateFormType, any>
    setValue: UseFormSetValue<OrderCreateFormType>

    day: IDateProps
    month: IDateProps
    year: IDateProps
    type?: "user" | "admin"
}