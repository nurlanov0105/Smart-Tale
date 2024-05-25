import {UseFormSetValue} from "react-hook-form";
import {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {employee} from "@/shared/lib/types/types";

type image = {
    id: number
    images: string
    postValue?: string
}

// export type ImageProps = {
//     images: employee[]
//     image: employee
//     idx: number
//     setValue: UseFormSetValue<OrderCreateFormType>
// }
export type ImageProps = {
    images: File[]
    image: File
    idx: number
    setValue: UseFormSetValue<OrderCreateFormType>
}