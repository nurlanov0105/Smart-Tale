import {useForm} from "react-hook-form";
import {useCreateEquipment, useCreateOrder} from "../useQueries";
import type {OrderCreateFormType, UseOrderFormProps} from "../types";

export const useOrderForm = ({type, images, year, day, month}: UseOrderFormProps) => {
    const typeCreation = type === "order"
    const { reset,
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<OrderCreateFormType>()

    const createOrder = useCreateOrder()
    const createEquipment = useCreateEquipment()

    const onSubmit = (data: any) => {
        if (typeCreation){
            const adapter = {
                title: data.title,
                description: data.description,
                uploaded_images: images,
                deadline:`${year.postValue}-${month.postValue}-${day.postValue}`,
                price: data.price,
                //category_slug: "T-shorts",
                phone_number: data.tel,
                email: data.email,
                size: "xl"
            }
            console.log("order", adapter)
            createOrder.mutate()
        }else {
            const adapter = {
                title: data.title,
                description: data.description,
                uploaded_images: images,
                price: data.price,
                //category_slug: "T-shorts",
                phone_number: data.tel,
                email: data.email,
            }
            console.log("equipment", adapter)
            createEquipment.mutate()
        }
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: typeCreation ? createOrder.isPending : createEquipment.isPending,
        isError: typeCreation ? createOrder.isError : createEquipment.isError,
        register,
        errors,
        isValid
    }
}