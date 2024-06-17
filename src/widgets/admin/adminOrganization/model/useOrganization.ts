import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {OrganizationsTypes} from "./types";

export const useOrganization = (isAuth?: boolean) => {

    return useQuery<OrganizationsTypes>({
        queryKey: [OrganizationQueryKeys.ORGANIZATION],
        queryFn: () => OrganizationService.getOrganizationsList(),
        staleTime: 3600,
        enabled: isAuth
    })
}