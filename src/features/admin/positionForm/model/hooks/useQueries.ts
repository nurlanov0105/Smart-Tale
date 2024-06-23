import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {
    AddPositionRequestTypes,
    AddPositionTypes,
    ChangePositionQueryTypes, GetPositionTypes
} from "@/shared/lib/types/organizations-service.types";
import {OrganizationQueryKeys} from "@/shared/api";
import {MODAL_KEYS, OrganizationService} from "@/shared/lib";
import {AddPositionProps} from "../types";
import {showModal} from "@/views/modal";

export const useAddPositionQuery = ({reset}: AddPositionProps) => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, AddPositionRequestTypes>({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addPosition(data),
        onSuccess: () => {
            reset()
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.POSITIONS]})
            // toast.success("Поздравляем! Вы успешно добавили должность!")
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.addedPosition})
        }
    })
}



