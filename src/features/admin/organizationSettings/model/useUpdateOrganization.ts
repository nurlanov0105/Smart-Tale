import {useParams} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService, useOrganizationDetails} from "@/shared/lib";
import {UpdateOrganizationTypes} from "../model/types";
import {UPDATE_ORGANIZATION_NAMES} from "../model/consts";

export const useUpdateOrganization = (isEdited: boolean) => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: {errors, isValid}
    } = useForm<UpdateOrganizationTypes>({
        mode: "onBlur"
    })

    const {slug} = useParams()
    const {data, isLoading, isError, isSuccess} = useOrganizationDetails(slug.toString())

    const queryClient = useQueryClient()


    const {
        mutate ,
        isPending,
    } = useMutation<any, Error, {data: any, slug: string}>({
        mutationKey: [OrganizationQueryKeys.CREATE_ORGANIZATION],
        mutationFn: ({data, slug}) => OrganizationService.updateOrganization(data, slug),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS]})
            reset()
            toast.success("Поздравляем! Вы успешно обновили организацию!")
        }
    })
    const onsSubmit = (data: UpdateOrganizationTypes) => {
        const formData = new FormData()
        Object.entries(data).map(item => {
            if (!isEdited && item[0] === UPDATE_ORGANIZATION_NAMES.logo){
                return
            } else {
                formData.append(item[0], item[1] as string)
            }
        })

        mutate({data: formData, slug: slug.toString()})
    }


    return {
        handleSubmit: handleSubmit(onsSubmit),
        data,
        isLoading,
        isSuccess,
        isSubmitting: isPending,
        isError,


        register,
        watch,
        reset,
        errors,
        isValid,
        control,
        setValue

    }
}