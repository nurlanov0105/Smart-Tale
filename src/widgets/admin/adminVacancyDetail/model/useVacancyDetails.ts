import {useQuery} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {defaultValuesEmployeeDetails} from "@/widgets/admin/adminEmployeesSettings/model/helper";
import {VacancyDetailsTypes} from "@/widgets/admin/adminVacancyDetail/model/types";
import {VacancyQueryKeys} from "@/shared/api";
import {VacancyService} from "@/shared/lib";

export const useVacancyDetails = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid},
        setValue
    } = useForm<VacancyDetailsTypes>({
        mode: "onBlur",
        defaultValues: defaultValuesEmployeeDetails
    })

    const slug = ""

    const getVacancyDetails =  useQuery({
        queryKey: [VacancyQueryKeys.VACANCY_DETAILS, slug],
        queryFn: () => VacancyService.getVacancyDetails(slug),
    })
}