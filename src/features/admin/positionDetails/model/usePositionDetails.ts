import {useForm} from "react-hook-form";
import {useParams} from "next/navigation";
import {AddPositionTypes, useGetPositionDetails} from "@/shared/lib";
import {useChangePositionQuery} from "../model/useQueries";
import {defaultValuesPosition} from "./consts";

export const usePositionDetails = () => {

    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid, isDirty}
    } = useForm<AddPositionTypes>({
        mode: "onBlur",
        defaultValues: defaultValuesPosition
    })
    const {slug} = useParams()

    const {
        data,
        isLoading,
        isSuccess,
        isError} = useGetPositionDetails(slug.toString())

    const changePosition = useChangePositionQuery()

    const onSubmit = (data: AddPositionTypes) => {
        console.log(data)
        changePosition.mutate({params: data, slug: slug.toString()})
    }

    return {
        data,
        isSuccess,
        isLoading,
        isLoadingSubmitting: changePosition.isPending,
        slug: slug.toString(),

        handleSubmit: handleSubmit(onSubmit),
        isError,
        register,
        errors,
        isValid,
        control,
        reset,
        watch,
        isDirty

    }
}