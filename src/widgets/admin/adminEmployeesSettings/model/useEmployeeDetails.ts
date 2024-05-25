import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {useForm} from "react-hook-form";
import type {EmployeeDetailsTypes} from "@/shared/lib/types/organizations-service.types";

export const useEmployeeDetails = (slug: string) => {

    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: {errors, isValid}
    } = useForm<EmployeeDetailsTypes>({
        mode: "onBlur"
    })

    const {data, isError, isLoading, isSuccess} = useQuery({
        queryKey: [OrganizationQueryKeys.ORGANIZATION_DETAILS, slug],
        queryFn: () => OrganizationService.getEmployeeDetails(slug),
    })
    const onSubmit = () => {

    }
    console.log(data)


    return {
        data: data && data,
        handleSubmit: handleSubmit(onSubmit),
        isSuccess: isSuccess,
        isLoading: isLoading,
        isError: isError,
        register,
        control
    }
}