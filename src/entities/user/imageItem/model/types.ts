import {UseFormSetValue} from "react-hook-form";
import {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";

interface IImage{
    id: number
    image: File
}

// export type ImageProps = {
//     images: employee[]
//     image: employee
//     idx: number
//     setValue: UseFormSetValue<AnnouncementCreateFormType>
// }
export type ImageProps = {
    images: IImage[]
    image: File
    idx: number
    setValue: UseFormSetValue<AnnouncementCreateFormType>
}