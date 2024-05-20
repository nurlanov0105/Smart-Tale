import {useForm} from "react-hook-form";
import type {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {useCreateEquipment, useCreateOrder} from "@/features/user/orderForm/model/useQueries";

export const useUpdateAnnouncement = ({type, images, deadline}: any) => {
    const typeCreation = type === "order"
    const { reset,
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<OrderCreateFormType>()

    const createOrder = useCreateOrder(reset)
    const createEquipment = useCreateEquipment(reset)



    const onSubmit = (data: OrderCreateFormType) => {
        console.log(data)
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