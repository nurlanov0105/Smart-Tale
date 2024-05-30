import {useForm} from "react-hook-form";
import {AddPositionTypes} from "@/shared/lib";
import {useAddPositionQuery} from "./useQueries";

export const useAddPosition = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<AddPositionTypes>({
        mode: "onBlur"
    })

    const {
        mutate,
        isPending,
        isError
    } = useAddPositionQuery({reset})


    const onSubmit = (data: AddPositionTypes) => {

        mutate({
            ...data,
            organization: ""
        })
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: isPending,
        isLoadingSubmitting: isPending,
        isError,
        register,
        errors,
        isValid,
        control

    }
}