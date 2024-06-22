import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService, useScrollTop} from "@/shared/lib";
import {toast} from "react-toastify";


export const useUpdateEmployee = () => {
    const queryClient = useQueryClient()
    const {handleScrollToTop} = useScrollTop()
    return useMutation<any, Error, {employeeSlug: string, positionSlug: string}>({
        mutationKey: [OrganizationQueryKeys.UPDATE_EMPLOYEE],
        mutationFn: ({employeeSlug, positionSlug}) => OrganizationService.updateEmployee({employeeSlug, positionSlug}),
        onSuccess: () => {
            handleScrollToTop()
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.EMPLOYEE_SETTINGS]})
            toast.success("Поздравляем! Вы успешно изменили должность сотрудника!")
        }
    })
}

