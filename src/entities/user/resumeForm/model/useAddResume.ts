import {useForm} from "react-hook-form";
import {CurrencyType, useAddResumeQuery} from "@/entities/user/vacancyItem";
import {ResumeFormTypes} from "./types";

export const useAddResume = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<ResumeFormTypes>({
        mode: "onBlur"
    })

    const {mutate, isPending, isError} = useAddResumeQuery(reset);

    const onSubmit = (data: ResumeFormTypes) => {
        const adapter = {
            ...data,
            currency: data.schedule.postValue as CurrencyType ,
            graphic: data.schedule.postValue,
            city: data.location.postValue
        }
        mutate(adapter)
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: isPending,
        isError,
        register,
        errors,
        isValid,
        control

    }
}