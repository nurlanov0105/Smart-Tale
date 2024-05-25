import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const useEmployees = () => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.EMPLOYEES],
        queryFn: () => OrganizationService.getEmployees()
    })
}