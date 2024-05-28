import {useForm} from "react-hook-form";
import type {EmployeeDetailsTypes} from "@/shared/lib/types/organizations-service.types";
import {usePositions} from "@/widgets/admin/positions/model/usePositions";
import {defaultValuesEmployeeDetails} from "../model/helper";
import {useEmployeeQuery} from "./useEmployeeQuery";

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