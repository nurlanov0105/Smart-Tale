import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {AddPositionRequestTypes, AddPositionTypes} from "@/shared/lib/types/organizations-service.types";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {toast} from "react-toastify";
import {useAddPositionQuery, useChangePositionQuery} from "@/features/admin/positionForm/model/hooks/useQueries";
import {useParams} from "next/navigation";

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