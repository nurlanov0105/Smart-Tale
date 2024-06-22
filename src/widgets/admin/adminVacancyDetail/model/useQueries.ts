import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {VacancyQueryKeys} from "@/shared/api";
import {useScrollTop, VacancyService} from "@/shared/lib";
import {VacancyUpdateTypes} from "@/entities/user/vacancyItem/model/types";
import {toast} from "react-toastify";

export const useVacancyQuery = (id: string) => {
    return useQuery({
        queryKey: [VacancyQueryKeys.VACANCY_DETAILS],
        queryFn: () => VacancyService.getVacancyDetails(id),
    });
}


export const useUpdateVacancyQuery = ()=> {
    const queryClient = useQueryClient();
    const {handleScrollToTop} = useScrollTop()
    return useMutation<any, Error, VacancyUpdateTypes>({
        mutationKey: [VacancyQueryKeys.VACANCY_UPDATE],
        mutationFn: ({ data, slug }) => VacancyService.changeVacancy({ data, slug }),
        onSuccess: async () => {
            handleScrollToTop()
            await queryClient.invalidateQueries({ queryKey: [VacancyQueryKeys.VACANCY_DETAILS] });
            toast.success("Поздравляем! Вы успешно обновили вакансию!");
        },
    });
}