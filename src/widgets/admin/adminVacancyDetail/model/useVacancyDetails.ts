import {useForm} from "react-hook-form";
import type {EmployeeDetailsTypes} from "@/shared/lib/types/organizations-service.types";
import {defaultValuesEmployeeDetails} from "@/widgets/admin/adminEmployeesSettings/model/helper";
import {VacancyDetailsTypes} from "@/widgets/admin/adminVacancyDetail/model/types";
import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

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
        queryKey: [OrganizationQueryKeys.VACANCY_DETAILS, slug],
        queryFn: () => OrganizationService.getVacancyDetails(slug),
    })
}