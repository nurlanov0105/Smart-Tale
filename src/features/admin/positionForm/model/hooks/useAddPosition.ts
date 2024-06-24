import {useForm} from "react-hook-form";
import {AddPositionTypes, MODAL_KEYS} from "@/shared/lib";
import {useAddPositionQuery} from "./useQueries";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {showModal} from "@/views/modal";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

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

    const myPosition = useSubscribeStore(state => state.position)

    const onSubmit = (data: AddPositionTypes) => {
        if (!myPosition[RIGHT_ACTIONS.REMOVE_POSITION]){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights })
            return
        }
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