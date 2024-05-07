"use client";

import { NextPage } from "next";
import { ILoginRequest, LoginForm, useLogin } from "@/features/auth";

const LoginPage: NextPage = () => {
   const { mutate: login } = useLogin();
   const handleLogin = (data: ILoginRequest) => {
      const params = {
         email: data.email,
         password: data.password,
      };

      login(params);
      console.log(params);
   };
   return <LoginForm handleLogin={handleLogin} />;
};

export default LoginPage;
