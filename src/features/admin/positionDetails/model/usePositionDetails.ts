import {useForm, useFormContext} from "react-hook-form";
import {useParams} from "next/navigation";
import {AddPositionTypes, MODAL_KEYS, OWNER, useGetPositionDetails} from "@/shared/lib";
import {useChangePositionQuery} from "../model/useQueries";
import {defaultValuesPosition} from "./consts";
import {showModal} from "@/views/modal";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import type {AnnouncementDetailFormType} from "@/features/user/ announcementDetailForm/model/types";

export const usePositionDetails = (slug: string) => {
    const {handleSubmit} = useFormContext<AddPositionTypes>()
    const userPosition = useSubscribeStore(state => state.position)

    const {
        data: position,
        isLoading,
        isSuccess,
        isError} = useGetPositionDetails(slug)

    const changePosition = useChangePositionQuery()


    const onSubmit = (data: AddPositionTypes) => {
        if (!userPosition[RIGHT_ACTIONS.UPDATE_ACCESS]){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
            return
        }
        if (userPosition?.job_title === slug){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
            return
        }
        if (position?.title === OWNER){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noChangeOwner})
            return
        }
        changePosition.mutate({params: data, slug: slug.toString()})
    }

    return {
        data: position,
        handleSubmit: handleSubmit(onSubmit),
        slug,

        isSuccess,
        isLoading,
        isSubmitting: changePosition.isPending,
        isError,
    }
}