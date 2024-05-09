"use client";

import { RegisterForm, registerFormType, useRegister } from "@/features/auth";
import { CookiesServices, EnumTokens, ROUTES } from "@/shared/lib";
import { useRouter } from "next/navigation";

const Register = () => {
   const { mutate: register, isPending, isError, isSuccess } = useRegister();

   const handleRegister = (data: registerFormType) => {
      const params = {
         email: data.email,
         first_name: data.firstName,
         last_name: data.lastName,
         middle_name: data.middleName,
         password: data.password,
         password_confirm: data.rePassword,
      };

      CookiesServices.setToken({
         keyName: EnumTokens.REGISTER_EMAIL,
         value: data.email,
         time: "3600",
      });

      register(params);
   };

   // Проверка email на доступность в бэке
   const checkEmailValidity = (email: string) => {
      console.log(email);
   };

   return (
      <RegisterForm
         handleRegister={handleRegister}
         isLoading={isPending}
         checkEmailValidity={checkEmailValidity}
      />
   );
};

export default Register;
