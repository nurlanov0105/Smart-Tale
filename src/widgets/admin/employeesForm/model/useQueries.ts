import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AddEmployeeRequestTypes, AddEmployeeTypes, errorCatch, OrganizationService, useScrollTop} from "@/shared/lib";
import {OrganizationQueryKeys} from "@/shared/api";
import {toast} from "react-toastify";
import {UseFormReset} from "react-hook-form";

export const useAddEmployeeQuery = (reset: UseFormReset<AddEmployeeTypes>) => {
    const queryClient = useQueryClient()
    const {handleScrollToTop} = useScrollTop()
    return useMutation<any, Error, AddEmployeeRequestTypes>({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addEmployee(data),
        onSuccess: () => {
            reset();
            handleScrollToTop();
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.EMPLOYEES]});
            toast.success("Поздравляем! Вы успешно пригласили сотрудника!");
        },
        onError: (error) => {
            const errorMessage = errorCatch(error);
            toast.error(errorMessage);
            console.log("Error " + errorMessage );
        }
    });
};