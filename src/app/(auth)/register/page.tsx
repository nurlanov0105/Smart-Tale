"use client";

import { RegisterForm, registerFormType, useRegister } from "@/features/auth";
import { EnumTokens, ROUTES } from "@/shared/lib";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

const RegisterPage: NextPage = () => {
   const { mutate: register, isPending, isError, isSuccess } = useRegister();
   const router = useRouter();

   const handleRegister = (data: registerFormType) => {
      const params = {
         email: data.email,
         first_name: data.firstName,
         last_name: data.lastName,
         middle_name: data.middleName,
         password: data.password,
         password_confirm: data.rePassword,
      };

      document.cookie = `${EnumTokens.REGISTER_EMAIL}=${data.email};path=/;max-age=3600`;
      register(params);
   };
   return <RegisterForm handleRegister={handleRegister} />;
};

export default RegisterPage;
