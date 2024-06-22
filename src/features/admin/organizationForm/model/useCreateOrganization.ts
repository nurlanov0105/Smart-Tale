import {useForm} from "react-hook-form";
import {useCreateOrganizationQuery} from "./useQuery";
import {CreateOrganizationTypes} from "./types";

export const useCreateOrganization = () => {
    const {
        reset,
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        formState: {errors, isValid}
    } = useForm<CreateOrganizationTypes>({
        mode: "onBlur"
    })


    const {
        mutate ,
        isPending,
        isError
    } = useCreateOrganizationQuery()

    const onsSubmit = (data: any) => {
        const formData = new FormData()
        Object.entries(data).map(item => {
            formData.append(item[0], item[1] as string)
        })
        mutate(formData)

    }

    return {
        handleSubmit: handleSubmit(onsSubmit),
        isLoading: isPending,
        isError,

        register,
        errors,
        isValid,
        control,
        setValue,
        watch

    }
}