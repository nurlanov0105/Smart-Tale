"use client";
import { ILoginRequest, LoginForm, useLogin } from "@/features/auth";
import { CookiesServices, EnumTokens } from "@/shared/lib";

const Login = () => {
   const { mutate: login, isPending } = useLogin();
   const handleLogin = (data: ILoginRequest) => {
      const params = {
         email: data.email,
         password: data.password,
      };
      CookiesServices.setToken({
         keyName: EnumTokens.REMEMBER_ME,
         value: data.rememberMe || false,
         time: `${2 * 30.44 * 24 * 60 * 60}`,
      });

      login(params);
   };

   return <LoginForm handleLogin={handleLogin} isLoading={isPending} />;
};

export default Login;
