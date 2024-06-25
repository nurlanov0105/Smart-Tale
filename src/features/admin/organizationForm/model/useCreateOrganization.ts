import {useForm} from "react-hook-form";
import {useCreateOrganizationQuery} from "./useQuery";
import {CreateOrganizationTypes} from "./types";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

export const useCreateOrganization = () => {
    const organization = useSubscribeStore(state => !!state.data?.org.title)
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
    });


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
        if (!organization){
            formData.append("active", String(true))
        }
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