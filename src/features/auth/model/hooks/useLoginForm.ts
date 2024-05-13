import {useForm} from "react-hook-form";
import {useLogin} from "@/features/auth";
import {CookiesServices, EnumTokens} from "@/shared/lib";

export const useLoginForm = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
    });

    const { mutate: login, isPending } = useLogin(reset);

    const onSubmit = (data: any) => {
        const params = {
            email: data.email,
            password: data.password,
        };

        CookiesServices.setToken({
            keyName: EnumTokens.REMEMBER_ME,
            value: `${data.rememberMe}` === "false" ? Boolean(data.rememberMe) : true,
            time: `${60 * 86400}`,
        });

        login(params);

        reset();
    };

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: isPending,
        register,
        errors,
        isValid
    }
}
