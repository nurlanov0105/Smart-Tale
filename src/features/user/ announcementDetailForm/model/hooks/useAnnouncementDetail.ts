import {useForm} from "react-hook-form";
import {format} from "date-fns";

import {
    useGetEquipment,
    useGetOrder,
    useGetService,
    useUpdateEquipment,
    useUpdateOrder,
    useUpdateService
} from "../useQueries";
import type {AnnouncementDetailFormType, AnnouncementDetailProps} from "../types";
import {ANNOUNCEMENT_DETAILS_POST_NAMES} from "../consts";
import {AnnouncementValues} from "@/shared/lib";
import {useState} from "react";

export const useAnnouncementDetail = ({type, slug, images}: AnnouncementDetailProps) => {

    const { reset,
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: {errors, isValid, isDirty}
    } = useForm<AnnouncementDetailFormType>(
        {
            mode: "onChange",
            criteriaMode: "all",
            shouldFocusError: true,
        }
    )

    const getOrder = useGetOrder(slug, type)
    const getEquipment = useGetEquipment(slug, type)
    const getService = useGetService(slug, type)

    const updateOrder = useUpdateOrder()
    const updateEquipment = useUpdateEquipment()
    const updateService = useUpdateService()

    const dataMap = {order: getOrder, equipment: getEquipment, service: getService};
    const updateAnnouncementMap = {order: updateOrder, equipment: updateEquipment, service: updateService};

    const responseData = dataMap[type as keyof typeof dataMap]
    const updateData = updateAnnouncementMap[type as keyof typeof updateAnnouncementMap]

    const onSubmit = (data: AnnouncementDetailFormType) => {
        const formData = new FormData();

        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.title, data.title)
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.description, data.description)
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.price, data.price.toString())
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.currency, data.currency.postValue)
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.tel, data.tel)

        if (data.email) formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.email, data.email)

        const existingImage = new Set(images.map(dataImage => dataImage.id));
        const existingDataImage = new Set(data.images.map(dataImage => dataImage.id));

        data.images.forEach(image => {
            if (!existingImage.has(image.id)) {
                formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.images, image.image)
            }
        });
        images.forEach(image => {
            if (!existingDataImage.has(image.id)) {
                formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.deleted_images, image.id.toString())
            }
        });

        if (type === AnnouncementValues.EQUIPMENT) updateEquipment.mutate({data: formData, slug: slug})

        if (type === AnnouncementValues.SERVICE) updateService.mutate({data: formData, slug: slug})

        if (type === AnnouncementValues.ORDER){
            const newDate = new Date(data?.year.postValue, data?.month.postValue - 1, data?.day.postValue)
            const deadline = format(newDate, 'yyyy-MM-dd')

            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.deadline, deadline)
            data?.sizes.forEach(size => formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.size, size.postValue))

            updateOrder.mutate({data: formData, slug: slug})
        }
    };

    return {
        data: responseData && responseData.data?.data,
        handleSubmit: handleSubmit(onSubmit),
        isSuccess: responseData.isSuccess,
        isLoading: responseData.isPending,
        isSubmitting: updateData.isPending,
        isError: responseData.isError,
        register,
        errors,
        isValid,
        control,
        reset,
        watch,
        setValue,
        isDirty
    }
}