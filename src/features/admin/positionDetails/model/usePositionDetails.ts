import {useForm} from "react-hook-form";
import {useChangePositionQuery, useGetPositionDetails} from "@/features/admin/positionForm/model/hooks/useQueries";
import {AddPositionTypes} from "@/shared/lib/types/organizations-service.types";
import {useParams} from "next/navigation";
import {defaultValuesPosition} from "./consts";

export const usePositionDetails = () => {

    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<AddPositionTypes>({
        mode: "onBlur",
        defaultValues: defaultValuesPosition
    })
    const params = useParams()

    const {data, isLoading,
        isSuccess, isError} = useGetPositionDetails("shveya")

    const changePosition = useChangePositionQuery()

    const onSubmit = (data: AddPositionTypes) => {
        console.log(data)
        changePosition.mutate({params: data, slug: "shveya"})
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
        reset

    }
}