import {useForm} from "react-hook-form";
import {usePositions, EmployeeDetailsTypes} from "@/shared/lib";
import {defaultValuesEmployeeDetails} from "../model/helper";
import {useChangeStatus, useEmployeeQuery} from "./useEmployeeQuery";

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

    // const changeStatus = useChangeStatus(slug)

    const {
        data: positions,
        isLoading: isLoadingPosition,
        isSuccess: isSuccessPosition
    } = usePositions()

    const onSubmit = (data: EmployeeDetailsTypes) => {
        console.log(data)
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