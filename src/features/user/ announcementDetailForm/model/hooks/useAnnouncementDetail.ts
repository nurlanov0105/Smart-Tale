import {useForm} from "react-hook-form";
import type {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {useCreateEquipment, useCreateOrder} from "@/features/user/orderForm/model/useQueries";
import {
    useGetAnnouncement,
    useGetEquipment,
    useGetOrder
} from "@/features/user/ announcementDetailForm/model/useQueries";

export const useAnnouncementDetail = ({type, slug}: {type: string, slug: string}) => {

    const typeCreation = type === "order"
    const { reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<OrderCreateFormType>()

    const {isLoading, data, isError, isSuccess} = useGetAnnouncement(slug, type)

    console.log(data)
    return {
        data: data && data["Order Info"],
        isSuccess,
        isLoading,
        isError,
        register,
        errors,
        isValid,
        control,
        reset
    }
}