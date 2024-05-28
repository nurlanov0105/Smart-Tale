import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const useEmployeeQuery = (slug: string) => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS, slug],
        queryFn: () => OrganizationService.getEmployeeDetails(slug),
    })
}