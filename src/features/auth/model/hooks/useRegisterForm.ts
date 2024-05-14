import {useForm} from "react-hook-form";
import {registerFormType, useRegister} from "@/features/auth";
import {CookiesServices, EnumTokens} from "@/shared/lib";

export const useRegisterForm = () => {

    const {
        getValues,
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        watch,
        trigger,

    } = useForm<registerFormType>({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
    });

    const {
        mutate: registration,
        isPending,
        isError,
        isSuccess } = useRegister(reset);

    const onSubmit = (data: registerFormType) => {
        const params = {
            email: data.email,
            first_name: data.firstName,
            last_name: data.lastName,
            middle_name: data.middleName,
            password: data.password,
            password_confirm: data.rePassword,
            phone_number: data.tel,
        };

        CookiesServices.setToken({
            keyName: EnumTokens.REGISTER_EMAIL,
            value: data.email,
            time: "3600",
        });

        registration(params);

    };

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: isPending,
        isError,
        watch,
        trigger,
        errors,
        register,
        reset,
        getValues,
        isValid
    }
}