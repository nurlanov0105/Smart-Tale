import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {employee} from "@/shared/lib/types/types";
import {AddPositionRequestTypes, AddPositionTypes} from "@/shared/lib/types/organizations-service.types";

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
    } = useMutation<any, Error, AddPositionRequestTypes>({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addPosition(data),
        onSuccess: () => {
            reset()
        }
    })

    const onsSubmit = (data: AddPositionTypes) => {
        console.log(data)
        mutate({
            title: data.title,
            description: data.description,
            organization: data.organization.postValue, //"smarttale"
            roles: {
                "change-roles": data["change-roles"],
                "add-employee": data["add-employee"],
                "change-status": data["change-status"],
                "cancel-order": data["cancel-order"],
                "give-role": data["give-role"],
                "delete-role": data["delete-role"],
            }
        })
    }

    return {
        handleSubmit: handleSubmit(onsSubmit),
        isLoading: isPending,
        isError,
        register,
        errors,
        isValid,
        control

    }
}