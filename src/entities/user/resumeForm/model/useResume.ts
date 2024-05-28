import {useForm} from "react-hook-form";
import {CurrencyType, useAddResume} from "@/entities/user/vacancyItem";
import {ResumeFormTypes} from "./types";

export const useResume = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<ResumeFormTypes>({
        mode: "onBlur"
    })

    const {mutate, isPending, isError} = useAddResume({reset});

    const onSubmit = (data: ResumeFormTypes) => {
        const adapter = {
            ...data,
            currency: data.graphic.postValue as CurrencyType ,
            graphic: data.graphic.postValue,
            city: data.city.postValue
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