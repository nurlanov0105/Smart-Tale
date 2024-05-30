import {useForm} from "react-hook-form";
import {useParams} from "next/navigation";
import {useChangePositionQuery, useGetPositionDetails} from "@/features/admin/positionForm";
import {AddPositionTypes} from "@/shared/lib";
import {defaultValuesPosition} from "./consts";

export const usePositionDetails = () => {

    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid}
    } = useForm<AddPositionTypes>({
        mode: "onBlur",
        defaultValues: defaultValuesPosition
    })
    const {slug} = useParams()

    const {data, isLoading,
        isSuccess, isError} = useGetPositionDetails(slug.toString())

    const changePosition = useChangePositionQuery()

    const onSubmit = (data: AddPositionTypes) => {
        console.log(data)
        changePosition.mutate({params: data, slug: slug.toString()})
    }

    return {
        data,
        isSuccess,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        isLoadingSubmitting: changePosition.isPending,
        isError,
        register,
        errors,
        isValid,
        control,
        reset,
        watch,
        slug: slug.toString()

    }
}