import {useMutation} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {useForm} from "react-hook-form";
import {employee} from "@/shared/lib/types/types";
import {IAdd} from "@/shared/lib/services/organizationService";

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
    } = useMutation<any, Error, IAdd>({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addEmployee(data)
    })

    const onsSubmit = (data: any) => {
        console.log(data)

        const newData = {
            email: data.email,
            "change-roles": data["change-roles"],
            "add-employee": data["add-employee"],
            "change-status": data["change-status"],
            "cancel-order": data["cancel-order"],
            "give-role": data["give-role"],
            "delete-role": data["delete-role"],
            job_title: "Директор",
            org_title: "Neobis_Team"
        }
        mutate(newData)

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