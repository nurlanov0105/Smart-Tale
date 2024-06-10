import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {toast} from "react-toastify";
import {CreateOrganizationTypes} from "./types";

export const useCreateOrganization = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        formState: {errors, isValid}
    } = useForm<CreateOrganizationTypes>({
        mode: "onBlur"
    })

    const {
        mutate ,
        isPending,
        isError
    } = useMutation<any, Error, FormData>({
        mutationKey: [OrganizationQueryKeys.CREATE_ORGANIZATION],
        mutationFn: (data) => OrganizationService.createOrganization(data),
        onSuccess: () => {
            reset()
            toast.success("Поздравляем! Вы успешно создали организацию!")
        }
    })

    const onsSubmit = (data: any) => {
        const formData = new FormData()
        Object.entries(data).map(item => {
            formData.append(item[0], item[1] as string)
        })
        mutate(formData)

    }

    return {
        handleSubmit: handleSubmit(onsSubmit),
        isLoading: isPending,
        isError,

        register,
        errors,
        isValid,
        control,
        setValue,
        watch

    }
}