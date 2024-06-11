import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {OrganizationQueryKeys, VacancyQueryKeys} from "@/shared/api";
import {
    OrganizationService,
    PositionResponseTypes,
    EmployeesResponseTypes,
    GetPositionTypes,
    OrganizationDetailsTypes, VacancyService
} from "@/shared/lib";

export const usePositions = () => {
    return useQuery<PositionResponseTypes[]>({
        queryKey: [OrganizationQueryKeys.POSITIONS],
        queryFn: () => OrganizationService.getPositions()
    })
}

export const useGetPositionDetails = (slug: string) => {
    return useQuery<GetPositionTypes>({
        queryKey: [OrganizationQueryKeys.DETAILS_POSITION, slug],
        queryFn: () => OrganizationService.getPositionDetails(slug),
    })
}

export const useEmployees = (type?: string) => {
    return useQuery<EmployeesResponseTypes[]>({
        queryKey: [OrganizationQueryKeys.EMPLOYEES],
        queryFn: () => OrganizationService.getEmployees(),
        enabled: type ? type === "users-list" : true
    })
}
export const useEmployeeOrders = (slug: string) => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS, slug],
        queryFn: () => OrganizationService.getEmployeeOrders(slug),
    })
}

export const useEmployeeQuery = (slug: string) => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS, slug],
        queryFn: () => OrganizationService.getEmployeeDetails(slug),
    })
}

export const useOrganizationDetails = (slug: string) => {
    return useQuery<OrganizationDetailsTypes>({
        queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS, slug],
        queryFn: () => OrganizationService.getOrganizationDetails(slug),
    })

}

export const useResponse = () => {
    const queryClient = useQueryClient()
    return useMutation<Error, any, {slug: string}>({
        mutationKey: [VacancyQueryKeys.RESPONSE_VACANCY],
        mutationFn: ({slug}) => VacancyService.responseVacancy(slug),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [VacancyQueryKeys.GET_VACANCIES_RESPONSES]})
        }
    })
}
