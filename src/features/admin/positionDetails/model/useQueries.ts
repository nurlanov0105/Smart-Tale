import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ChangePositionQueryTypes, OrganizationService, useScrollTop} from "@/shared/lib";
import {OrganizationQueryKeys} from "@/shared/api";
import {toast} from "react-toastify";

export const useChangePositionQuery = () => {
    const queryClient = useQueryClient()
    const {handleScrollToTop} = useScrollTop()
    return useMutation<any, Error, ChangePositionQueryTypes>({
        mutationKey: [OrganizationQueryKeys.CHANGE_POSITION],
        mutationFn: ({slug, params}) => OrganizationService.changePosition({slug, params}),
        onSuccess: () => {
            handleScrollToTop()
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.DETAILS_POSITION]})
            toast.success("Поздравляем! Вы успешно изменили должность!")
        }
    })
}