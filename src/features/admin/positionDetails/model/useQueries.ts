import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ChangePositionQueryTypes, OrganizationService} from "@/shared/lib";
import {OrganizationQueryKeys} from "@/shared/api";
import {toast} from "react-toastify";

export const useChangePositionQuery = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, ChangePositionQueryTypes>({
        mutationKey: [OrganizationQueryKeys.CHANGE_POSITION],
        mutationFn: ({slug, params}) => OrganizationService.changePosition({slug, params}),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.DETAILS_POSITION]})
            toast.success("Поздравляем! Вы успешно изменили должность!")
        }
    })
}