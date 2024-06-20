import {useParams} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useForm, useFormContext} from "react-hook-form";
import {toast} from "react-toastify";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService, useOrganizationDetails} from "@/shared/lib";
import {UpdateOrganizationTypes} from "../model/types";
import {UPDATE_ORGANIZATION_NAMES} from "../model/consts";
import {useUpdateOrg} from "@/features/admin/organizationSettings/model/useQueries";

export const useUpdateOrganization = (isEdited: boolean) => {

    const {
        reset,
        handleSubmit
    } = useFormContext<UpdateOrganizationTypes>()

    const {slug} = useParams<{slug:string}>()

    const {
        data,
        isLoading,
        isError,
        isSuccess} = useOrganizationDetails(slug)

    const {mutate} = useUpdateOrg(reset)

    const onsSubmit = (data: UpdateOrganizationTypes) => {
        const formData = new FormData()
        Object.entries(data).map(([key, value]) => {

            if (!isEdited && key === UPDATE_ORGANIZATION_NAMES.logo){
                return
            } else {
                formData.append(key, value as string)
            }
        })

        mutate({data: formData, slug: slug.toString()})
    }


    return {
        handleSubmit: handleSubmit(onsSubmit),
        data,
        isLoading,
        isSuccess,
        isError,
    }
}