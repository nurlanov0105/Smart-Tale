import {UseFormSetValue} from "react-hook-form";
import {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";

type image = {
    id: number
    images: string
    postValue?: string
}

// export type ImageProps = {
//     images: employee[]
//     image: employee
//     idx: number
//     setValue: UseFormSetValue<AnnouncementCreateFormType>
// }
export type ImageProps = {
    images: File[]
    image: File
    idx: number
    setValue: UseFormSetValue<AnnouncementCreateFormType>
}