import {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";
import {CREATE_ANNOUNCEMENT_POST_NAMES} from "@/features/user/orderForm/model/consts";
import {format} from "date-fns";
import {AnnouncementValues} from "@/shared/lib";

export const buildAnnouncementFormData = (data: AnnouncementCreateFormType, type: string): FormData => {
    const formData = new FormData();

    formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.title, data.title);
    formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.description, data.description);
    formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.price, data.price.toString());
    formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.currency, data.currency.postValue);
    formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.tel, data.tel);

    if (data.email) {
        formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.email, data.email);
    }

    if (type === AnnouncementValues.EQUIPMENT) {
        formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.amount, data.amount.toString());
    }

    if (type === AnnouncementValues.ORDER) {
        const newDate = new Date(data.year.postValue, data.month.postValue - 1, data.day.postValue);
        const deadline = format(newDate, "yyyy-MM-dd");
        formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.deadline, deadline);

        data.sizes.forEach((size) => {
            formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.size, size.postValue);
        });
    }

    data.images.forEach((image) => {
        formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.images, image.image);
    });

    return formData;
};