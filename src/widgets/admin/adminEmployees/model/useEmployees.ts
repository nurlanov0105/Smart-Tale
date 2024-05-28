import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {EmployeesResponseTypes} from "./types";



export const useEmployees = (type?: string) => {
    return useQuery<EmployeesResponseTypes[]>({
        queryKey: [OrganizationQueryKeys.EMPLOYEES],
        queryFn: () => OrganizationService.getEmployees(),
        enabled: type ? type === "users-list" : true
    })
}