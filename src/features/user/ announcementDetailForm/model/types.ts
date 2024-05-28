import {UseFormReset} from "react-hook-form";
import {IDateProps} from "@/entities/general/selectDate";
import {SelectPostTypes} from "@/shared/lib/types/types";

export type AnnouncementDetailProps = {
    type: string
    slug: string
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
    images: File[];
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
}

export type ImageTypes = {
    images: string
    id: number
}