import {useFormContext} from "react-hook-form";
import {usePositions, EmployeeDetailsTypes, useEmployeeQuery, MODAL_KEYS, OWNER} from "@/shared/lib";
import {useUpdateEmployee} from "./useQueries";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {showModal} from "@/views/modal";

export const useEmployeeDetails = (slug: string) => {
    const {handleSubmit} = useFormContext<EmployeeDetailsTypes>()
    const position = useSubscribeStore(state => state.position)
    const dataProfile = useSubscribeStore(state => state.data?.profile)

    const {data: employee, isError, isLoading, isSuccess} = useEmployeeQuery(slug)
    const updateEmployee = useUpdateEmployee()

    const {
        data: positions,
        isLoading: isLoadingPosition,
        isSuccess: isSuccessPosition,
        isError: isErrorPosition
    } = usePositions()

    const onSubmit = (data: EmployeeDetailsTypes) => {
        if (!position[RIGHT_ACTIONS.UPDATE_ACCESS]){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
            return
        }
        if (employee?.user?.slug === dataProfile?.slug){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noChangePosYourself})
            return
        }
        if (employee?.job_title?.title === OWNER){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noChangePosOwner})
            return;
        }
        updateEmployee.mutate({
            employeeSlug: data.user_slug,
            positionSlug: data.position.postValue
        })
    }

    return {
        data: employee && employee,
        isSuccess: isSuccess,
        isLoading: isLoading,
        isError: isError || isErrorPosition,

        handleSubmit: handleSubmit(onSubmit),
        isSubmitting: updateEmployee.isPending,

        positions,
        isLoadingPosition,
        isSuccessPosition,
    }
}