import {UseFormReset} from "react-hook-form";
import {IDateProps} from "@/entities/general/selectDate";
import {SelectPostTypes} from "@/shared/lib/types/types";
import {Dispatch, SetStateAction} from "react";
import {IImage} from "@/features/general/addImages/ui/AddImages";

export type AnnouncementDetailProps = {
    type: string
    slug: string
    images: AnnouncementImagesTypes[]
}

export type AnnouncementImagesTypes = {
    id: number
    image: string
}

export type AnnouncementDetailFormType = {
    title: string;
    description: string;
    price: number;
    tel: string;
    email?: string;
    currency: SelectPostTypes;
    sizeType: SelectPostTypes;
    sizes: SelectPostTypes[];
    images: IImage[];
    day: IDateProps;
    month: IDateProps;
    year: IDateProps;
}
export type InitialDataProps = {
    reset: UseFormReset<AnnouncementDetailFormType>
    slug: string
    type: string
    data: any
    isSuccess: boolean
    setImages: Dispatch<SetStateAction<AnnouncementImagesTypes[]>>
}

export type ImageTypes = {
    images: string
    id: number
}