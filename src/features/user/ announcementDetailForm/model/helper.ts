import {format} from "date-fns";
import {AnnouncementValues} from "@/shared/lib";
import type {AnnouncementDetailFormType} from "./types";
import {ANNOUNCEMENT_DETAILS_POST_NAMES} from "@/features/user/ announcementDetailForm/model/consts";

export const buildAnnouncementFormData = (data: AnnouncementDetailFormType, type: string): FormData => {
    const formData = new FormData();

    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.title, data.title)
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.description, data.description)
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.price, data.price.toString())
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.currency, data.currency.postValue)
    formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.tel, data.tel)

    if (data.email) formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.email, data.email)

    const existingImage = new Set(data.initialImages.map(dataImage => dataImage.id));
    const existingDataImage = new Set(data.images.map(dataImage => dataImage.id));

    data.images.forEach(image => {
        if (!existingImage.has(image.id)) {
            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.images, image.image)
        }
    });
    data.images.forEach(image => {
        if (!existingDataImage.has(image.id)) {
            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.deleted_images, image.id.toString())
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