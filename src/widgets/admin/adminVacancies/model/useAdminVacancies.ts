import {useQuery} from "@tanstack/react-query";
import {VacancyQueryKeys} from "@/shared/api";
import {VacancyService} from "@/shared/lib";

export const useOrganizationVacancies = () => {
    return useQuery({
        queryKey: [VacancyQueryKeys.GET_ORGANIZATION_VACANCIES],
        queryFn: () => VacancyService.getOrganizationVacancies(),
        select: (data) => data.data
    })
}