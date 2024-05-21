import { useForm } from "react-hook-form";
import { useCreateEquipment, useCreateOrder } from "../useQueries";
import type { OrderCreateFormType, UseOrderFormProps } from "../types";

export const useOrderForm = ({ type, images, deadline, sizesData }: UseOrderFormProps) => {

    const isOrderType = type === "order";

    const {
        reset,
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<OrderCreateFormType>();

    const createOrder = useCreateOrder(reset);
    const createEquipment = useCreateEquipment(reset);

    const onSubmit = (data: OrderCreateFormType) => {

        const formData = new FormData()

        if (images) images.forEach(file => formData.append(`uploaded_images`, file));

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('price', data.price.toString());
        formData.append('phone_number', data.tel);
        formData.append('currency', "Som");


        if (isOrderType) {

            if (sizesData) sizesData.forEach(size => formData.append(`size`, size.postValue));

            formData.append('category_slug', "t-shirts");
            formData.append('deadline', deadline);

            createOrder.mutate(formData)
        } else {
            createEquipment.mutate(formData)
        }
    }


    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: isOrderType ? createOrder.isPending : createEquipment.isPending,
        isError: isOrderType ? createOrder.isError : createEquipment.isError,
        register,
        errors,
        isValid
    }
}
