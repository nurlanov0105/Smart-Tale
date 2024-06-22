import {format} from "date-fns";
import {AnnouncementValues, cloudImageToFile, currenciesMap, useGetDates} from "@/shared/lib";
import {monthsList} from "@/entities/general/selectDate/model/helper";
import type {AnnouncementDetailFormType, ImageTypes} from "./types";
import {ANNOUNCEMENT_DETAILS_POST_NAMES} from "./consts";


export const buildAnnouncementFormData = (data: AnnouncementDetailFormType, type: string): FormData => {
    const formData = new FormData();

    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.title, data.title)
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.description, data.description)
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.price, data.price.toString())
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.currency, data.currency.postValue)
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.tel, data.tel)

    if (data.email) formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.email, data.email)

    const initialImages = new Set(data?.initialImages?.map(dataImage => dataImage?.id));
    const newImages = new Set(data?.images?.map(dataImage => dataImage?.id));


    data.initialImages.map(image => {
        if (!newImages.has(image.id)) {
            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.deleted_images, String(image.id))
        }
    })

    data.images.forEach(image => {
        if (!initialImages.has(image.id)) {
            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.images, image.image)
        }
    });

    if (type === AnnouncementValues.ORDER) {
        const newDate = new Date(data?.year.postValue, data?.month.postValue - 1, data?.day.postValue)
        const deadline = format(newDate, 'yyyy-MM-dd')

        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.deadline, deadline)
        data?.sizes.forEach(size => formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.size, size.postValue))
    }

    return formData;
};

interface IProps{
    data: any
    type: string
}
interface ISize{
    id: number
    size: string
}

export const useResetAnnouncementData = async ({data, type}: IProps) => {

    const {day, year , month} = useGetDates(data?.deadline ?? "2024")

    const monthValue = monthsList()[month];

    const images = await Promise.all(data?.images.map(async (item: ImageTypes) => {
        const file = await cloudImageToFile(item.images, Date.now().toString());
        return {id: item.id, image: file};
    }));
    const sizes = data?.size?.map((item: ISize) => {
        return { value: item?.size, postValue: item?.size }
    })

    let resetData: any = {
        title: data.title,
        tel: data["phone_number"],
        price: data.price,
        email: data.email,
        description: data.description,
        currency: currenciesMap[data.currency as keyof typeof currenciesMap],
        images: images,
        initialImages: images,
    }
    if (type === AnnouncementValues.ORDER){
        resetData = {
            ...resetData,
            month: { value: monthValue?.value, postValue: month + 1 },
            day: { value: day, postValue: day },
            year: { value: year, postValue: year },
            sizes: sizes
        }
    }

    return resetData
}