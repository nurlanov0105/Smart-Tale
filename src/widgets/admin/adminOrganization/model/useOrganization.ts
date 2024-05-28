import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const useOrganization = () => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.ORGANIZATION],
        queryFn: () => OrganizationService.getOrganizationsList(),
    })
}