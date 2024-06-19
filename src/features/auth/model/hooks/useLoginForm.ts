import { useForm } from "react-hook-form";
import { useLogin } from "@/features/auth";
import { CookiesServices, EnumTokens, TWO_MONTH_COOKIES } from "@/shared/lib";
import { LoginFormValues } from "../types";

export const useLoginForm = () => {
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm<LoginFormValues>({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
   });

   const { mutate: login, isPending } = useLogin(reset);

   const onSubmit = (data: LoginFormValues) => {
      console.log(data);
      const params = {
         email: data.email,
         password: data.password,
      };

      CookiesServices.setToken({
         keyName: EnumTokens.REMEMBER_ME,
         value: `${data.rememberMe}`,
         time: `${TWO_MONTH_COOKIES}`,
      });

      login(params);
   };

   return {
      handleSubmit: handleSubmit(onSubmit),
      isLoading: isPending,
      register,
      errors,
      isValid,
   };
};
