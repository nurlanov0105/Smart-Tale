import {UseFormReset} from "react-hook-form";
import {OrderCreateFormType} from "@/features/user/orderForm/model/types";
import {useEffect} from "react";
import {useGetAnnouncement,} from "../useQueries";

interface InitialDataProps{
    reset: UseFormReset<OrderCreateFormType>
    slug: string
    type: string
    data: any
    isSuccess: boolean
}
export const useInitialData = ({type, slug, reset, data, isSuccess}: InitialDataProps) => {

    // const {data, isSuccess} = useGetAnnouncement(slug, type)

    useEffect(() => {

        if (data && isSuccess){

            reset({
                title: data.title,
                tel: data["phone_number"],
                price: data.price,
                email: data.email,
                description: data.description
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
}