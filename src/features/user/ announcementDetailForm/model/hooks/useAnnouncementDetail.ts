import {useForm} from "react-hook-form";
import type {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {
    useGetAnnouncement,
    useGetEquipment,
    useGetOrder,
    useUpdateAnnouncement,
    useUpdateOrder
} from "@/features/user/ announcementDetailForm/model/useQueries";


interface IProps{
    type: string
    slug: string
}
export const useAnnouncementDetail = ({type, slug}: IProps) => {

    const typeCreation = type === "order"
    const { reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid}
    } = useForm<OrderCreateFormType>()

    const {isLoading, data, isError, isSuccess} = useGetAnnouncement(slug, type)


    const updateAnnouncement = useUpdateAnnouncement(type)

    const onSubmit = (data: OrderCreateFormType) => {
        console.log(data)
        const formData = new FormData()
        formData.append("title", "title")
        formData.append("size", "S")
        formData.append("size", "XL")
        const newData = {
            title: "title",
            description: "descr"

        }
        // updateAnnouncement.updateAnnouncement({data: formData, slug: slug})
    }


    return {
        data: data && data["Order Info"],
        handleSubmit: handleSubmit(onSubmit),
        isSuccess,
        isLoading,
        isError,
        register,
        errors,
        isValid,
        control,
        reset,
        watch
    }
}