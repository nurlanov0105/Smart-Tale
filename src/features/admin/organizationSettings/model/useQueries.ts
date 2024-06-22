import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService, useScrollTop} from "@/shared/lib";
import {toast} from "react-toastify";
import {UseFormReset} from "react-hook-form";
import {UpdateOrganizationTypes} from "./types";

export const useUpdateOrg = (reset: UseFormReset<UpdateOrganizationTypes>) => {
    const queryClient = useQueryClient()
    const {handleScrollToTop} = useScrollTop()

    return useMutation<any, Error, {data: any, slug: string}>({
        mutationKey: [OrganizationQueryKeys.CREATE_ORGANIZATION],
        mutationFn: ({data, slug}) => OrganizationService.updateOrganization(data, slug),
        onSuccess: () => {
            handleScrollToTop()
            queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS]})
            reset()
            toast.success("Поздравляем! Вы успешно обновили организацию!")
        }
    })
}