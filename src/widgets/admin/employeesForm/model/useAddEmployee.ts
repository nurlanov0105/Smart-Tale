import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import type {AddEmployeeRequestTypes, AddEmployeeTypes} from "@/shared/lib/types/organizations-service.types";


export const useAddEmployee = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid}
    } = useForm<AddEmployeeTypes>({
        mode: "onChange"
    })

    const {
        mutate: inviteEmployee ,
        isPending,
        isError
    } = useMutation<any, Error, AddEmployeeRequestTypes>({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addEmployee(data),
        onSuccess: () => {
            reset()
            toast.success("Поздравляем! Вы успешно добавили сотрудника!")
        }
    })

    const onsSubmit = (data: AddEmployeeTypes) => {
        const {
            positions,
            position,
            organization,
            ...rest
        } = data;

        const adapter = {
            // ...rest,
            email: data.email,
            org_slug: "neobisteam",
            jt_slug: data.position.postValue
        }

        inviteEmployee(adapter)
    }

    return {
        handleSubmit: handleSubmit(onsSubmit),
        isLoading: isPending,
        isError,
        register,
        errors,
        isValid,
        control,
        reset,
        watch

    }
}