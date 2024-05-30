import {useMutation, useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const useEmployeeQuery = (slug: string) => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS, slug],
        queryFn: () => OrganizationService.getEmployeeDetails(slug),
    })
}

export const useChangeStatus = (slug: string) => {
    return useMutation({
        mutationKey: [OrganizationQueryKeys.CHANGE_STATUS, slug],
        mutationFn: () => OrganizationService.getEmployeeDetails(slug),
    })
}

export const useEmployeeOrders = (slug: string) => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS, slug],
        queryFn: () => OrganizationService.getEmployeeOrders(slug),
    })
}
