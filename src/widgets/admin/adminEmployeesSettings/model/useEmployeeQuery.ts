import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {toast} from "react-toastify";


export const useUpdateEmployee = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, {employeeSlug: string, positionSlug: string}>({
        mutationKey: [OrganizationQueryKeys.UPDATE_EMPLOYEE],
        mutationFn: ({employeeSlug, positionSlug}) => OrganizationService.updateEmployee({employeeSlug, positionSlug}),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.EMPLOYEE_SETTINGS]})
            toast.success("Поздравляем! Вы успешно изменили должность сотрудника!")
        }
    })
}

