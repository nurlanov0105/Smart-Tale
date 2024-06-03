import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {VacancyDetailsTypes} from "@/widgets/admin/adminVacancyDetail/model/types";
import {VacancyQueryKeys} from "@/shared/api";
import {VacancyService} from "@/shared/lib";
import {useParams} from "next/navigation";
import {CurrencyType, VacancyUpdateTypes} from "@/entities/user/vacancyItem/model/types";
import {toast} from "react-toastify";

export const useVacancyDetails = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid, isDirty},
        setValue
    } = useForm<VacancyDetailsTypes>({
        mode: "onBlur"
    })

    const {id} = useParams()

    const {data, isLoading, isSuccess, isError} =  useQuery({
        queryKey: [VacancyQueryKeys.VACANCY_DETAILS],
        queryFn: () => VacancyService.getVacancyDetails(id.toString()),
    })
    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation<any, Error, VacancyUpdateTypes>({
        mutationKey: [VacancyQueryKeys.VACANCY_UPDATE],
        mutationFn: ({data, slug}) => VacancyService.changeVacancy({data, slug}),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [VacancyQueryKeys.VACANCY_DETAILS]})
            toast.success("Поздравляем! Вы успешно обновили вакансию!")
        }
    })

    const onSubmit = (data: VacancyDetailsTypes) => {
        const adapter = {
            ...data,
            currency: data.currency.postValue as CurrencyType,
            schedule: data.schedule.postValue,
            location: data.location.postValue
        }
        mutate({data: adapter, slug: id.toString()})
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        vacancy: data,
        isLoading,
        isError,
        isSuccess,
        updateVacancy: mutate,
        isSubmitting: isPending,

        register,
        reset,
        isDirty,
        errors,
        isValid,
        control

    }
}