import {useMutation} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {useForm} from "react-hook-form";
import {employee} from "@/shared/lib/types/types";

interface IForm{
    email: string
    position: employee
    organization: employee
}

export const useAddEmployee = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<IForm>({
        mode: "onBlur"
    })

    const {
        mutate ,
        isPending,
        isError
    } = useMutation({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addEmployee(data)
    })

    const onsSubmit = (data: any) => {
        console.log(data)

    }

    return {
        handleSubmit: handleSubmit(onsSubmit),
        isLoading: isPending,
        isError,
        register,
        errors,
        isValid,
        control

    }
}