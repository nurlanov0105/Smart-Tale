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

export const useAnnouncementDetail = ({type, slug}: AnnouncementDetailProps) => {

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

    const dataByType = {
        order: getOrder,
        equipment: getEquipment,
        service: getService
    };
    const responseData = dataByType[type as keyof typeof dataByType]

    const updateOrder = useUpdateOrder()
    const updateEquipment = useUpdateEquipment()
    const updateService = useUpdateService()

    const onSubmit = (data: AnnouncementDetailFormType) => {
        const formData = new FormData();

        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.title, data.title)
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.description, data.description)
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.price, data.price.toString())
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.currency, data.currency.postValue)
        formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.tel, data.tel)

        if (data.email) formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.email, data.email)

        data?.images.forEach(image => {

            // const reader = new FileReader();
            // reader.onload = (e) => {
            //     const result = e.target?.result;
            //     const newValue = images ? [...images, files[0]] : [files[0]];
            //     setImages(newValue)
            //     setIsLoading(false);
            //     // if (result) {
            //     //     const newImage = { value: result as string, postValue: result as string };
            //     //     const newValue = images ? [...images, newImage] : [newImage];
            //     //
            //     //     setImages([files[0]]);
            //     //     setIsLoading(false);
            //     // }
            // };
            //
            console.log(image)
            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.images, image)
        })

        if (type === AnnouncementValues.EQUIPMENT) {
            console.log("equipment", data)
            updateEquipment.mutate({data: formData, slug: slug})
        }
        if (type === AnnouncementValues.SERVICE) {
            console.log("service", data)
            updateService.mutate({data: formData, slug: slug})
        }
        if (type === AnnouncementValues.ORDER){
            const newDate = new Date(data?.year.postValue, data?.month.postValue - 1, data?.day.postValue)
            const deadline = format(newDate, 'yyyy-MM-dd')

            formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.deadline, deadline)
            data?.sizes.forEach(size => formData.append(ANNOUNCEMENT_DETAILS_POST_NAMES.size, size.postValue))

            console.log("order", data)
            updateOrder.mutate({data: formData, slug: slug})
        }
    };
    console.log(responseData && responseData.data)

    return {
        data: responseData && responseData.data?.data,
        handleSubmit: handleSubmit(onSubmit),
        isSuccess: responseData.isSuccess,
        isLoading: responseData.isPending,
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