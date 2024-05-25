import {useQuery} from "@tanstack/react-query";
import {OrganizationService} from "@/shared/lib";
import {OrganizationQueryKeys} from "@/shared/api";

export const useOrganizationDetails = (slug: string) => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS, slug],
        queryFn: () => OrganizationService.getOrganizationDetails(slug),
    })

}