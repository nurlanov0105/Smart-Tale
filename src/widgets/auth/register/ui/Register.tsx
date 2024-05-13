"use client";

import { RegisterForm, registerFormType, useRegister } from "@/features/auth";
import { CookiesServices, EnumTokens, ROUTES } from "@/shared/lib";
import { useRouter } from "next/navigation";

const Register = () => {

   return (
      <RegisterForm/>
   );
};

export default Register;
