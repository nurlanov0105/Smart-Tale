import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {EmployeesResponseTypes} from "./types";



export const useEmployees = () => {
    return useQuery<EmployeesResponseTypes[]>({
        queryKey: [OrganizationQueryKeys.EMPLOYEES],
        queryFn: () => OrganizationService.getEmployees()
    })
}