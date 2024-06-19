import {useForm} from "react-hook-form";
import {useParams} from "next/navigation";
import {AddPositionTypes, MODAL_KEYS, OWNER, useGetPositionDetails} from "@/shared/lib";
import {useChangePositionQuery} from "../model/useQueries";
import {defaultValuesPosition} from "./consts";
import {showModal} from "@/views/modal";

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
        data: position,
        isLoading,
        isSuccess,
        isError} = useGetPositionDetails(slug.toString())

    const changePosition = useChangePositionQuery()

    const onSubmit = (data: AddPositionTypes) => {
        if (position?.title === OWNER){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noChangeOwner})
            return
        }

        changePosition.mutate({params: data, slug: slug.toString()})
    }

    return {
        data: position,
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