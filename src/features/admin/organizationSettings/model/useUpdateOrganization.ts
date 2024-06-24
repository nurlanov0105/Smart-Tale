import {useParams} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {MODAL_KEYS, OWNER, useOrganizationDetails} from "@/shared/lib";
import {UpdateOrganizationTypes} from "../model/types";
import {UPDATE_ORGANIZATION_NAMES} from "../model/consts";
import {useUpdateOrg} from "./useQueries";
import {showModal} from "@/views/modal";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

export const useUpdateOrganization = (isEdited: boolean) => {

    const {
        reset,
        handleSubmit
    } = useFormContext<UpdateOrganizationTypes>()

    const {slug} = useParams<{slug:string}>()
    const PROFILE_SLUG = useSubscribeStore(state => state.data?.profile.slug)

    const {
        data,
        isLoading,
        isError,
        isSuccess} = useOrganizationDetails(slug)

    const {mutate, isPending} = useUpdateOrg(reset)

    const onsSubmit = (submitData: UpdateOrganizationTypes) => {
        if (PROFILE_SLUG !== data?.owner?.slug){
            showModal(MODAL_KEYS.infoModal, {slug, componentName: MODAL_KEYS.noRights})
            return
        }
        const formData = new FormData()
        Object.entries(submitData).map(([key, value]) => {
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
        isSubmitting: isPending
    }
}