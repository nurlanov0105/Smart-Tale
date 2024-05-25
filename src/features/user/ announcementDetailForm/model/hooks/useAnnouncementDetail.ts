import {useForm} from "react-hook-form";
import type {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {
    useGetEquipment,
    useGetOrder,
    useGetService,
    useUpdateEquipment,
    useUpdateOrder,
    useUpdateService
} from "../useQueries";
import {format} from "date-fns";


interface IProps{
    type: string
    slug: string
}
export const useAnnouncementDetail = ({type, slug}: IProps) => {

    const { reset,
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: {errors, isValid, isDirty}
    } = useForm<OrderCreateFormType>(
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

    const onSubmit = (data: OrderCreateFormType) => {
        const formData = new FormData();

        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("price", data.price.toString())
        formData.append("currency", data.currency.postValue)
        formData.append("phone_number", data.tel)

        if (data.email) formData.append("email", data.email)

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
            formData.append("uploaded_images", image)
        })

        if (type === "equipment") {
            console.log("equipment", data)
            updateEquipment.mutate({data: formData, slug: slug})
        }
        if (type === "service") {
            console.log("service", data)
            updateService.mutate({data: formData, slug: slug})
        }
        if (type === "order"){
            const newDate = new Date(data?.year.postValue, data?.month.postValue - 1, data?.day.postValue)
            const deadline = format(newDate, 'yyyy-MM-dd')

            formData.append("deadline", deadline)
            data?.sizes.forEach(size => formData.append("size", size.postValue))

            console.log("order", data)
            updateOrder.mutate({data: formData, slug: slug})
        }
    };

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