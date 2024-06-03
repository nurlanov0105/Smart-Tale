import {useForm} from "react-hook-form";
import {usePositions, EmployeeDetailsTypes, useEmployeeQuery} from "@/shared/lib";
import {defaultValuesEmployeeDetails} from "../model/helper";
import {useUpdateEmployee} from "./useEmployeeQuery";

export const useEmployeeDetails = (slug: string) => {

    const {
        reset,
        register,
        handleSubmit,
        control,
        watch,
        formState: {errors, isValid},
        setValue
    } = useForm<EmployeeDetailsTypes>({
        mode: "onBlur",
        defaultValues: defaultValuesEmployeeDetails
    })

    const {data, isError, isLoading, isSuccess} = useEmployeeQuery(slug)

    const updateEmployee = useUpdateEmployee()

    const {
        data: positions,
        isLoading: isLoadingPosition,
        isSuccess: isSuccessPosition
    } = usePositions()

    const onSubmit = (data: EmployeeDetailsTypes) => {
        updateEmployee.mutate({employeeSlug: data.user_slug, positionSlug: data.position.postValue})
    }

    return {
        data: data && data,
        handleSubmit: handleSubmit(onSubmit),
        isSuccess: isSuccess,
        isLoading: isLoading,
        isError: isError,
        isSuccessPosition,
        isLoadingPosition,
        positions,
        register,
        control,
        watch,
        reset,
        setValue
    }
}