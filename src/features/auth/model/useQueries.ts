"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { closeModal } from "@/views/modal";
import { IEmailVerifyRequest } from "@/features/auth/model/types";
import { CookiesServices, EnumTokens, ROUTES, useRememberMe } from "@/shared/lib";
import { authApi } from "./services";
import { UseFormReset } from "react-hook-form";
import { cookies } from "next/headers";
import Cookies from "js-cookie";

export const useRegister = (reset: UseFormReset<any>) => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.register,
      onSuccess: () => {
         reset();
         router.push(ROUTES.CONFIRMATION_REGISTER);
      },
   });
};

export const useLogin = (reset: UseFormReset<any>) => {
   const router = useRouter();
   const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
   const isRemember = res === "true";

   return useMutation({
      mutationFn: authApi.login,
      onSuccess: (data) => {
         if (data) {
            const accessData = {
               keyName: EnumTokens.ACCESS_TOKEN,
               value: data.data.access,
            };
            const refreshData = {
               keyName: EnumTokens.REFRESH_TOKEN,
               value: data.data.refresh,
            };

            if (isRemember) {
               CookiesServices.setToken(accessData);
               CookiesServices.setToken(refreshData);
               CookiesServices.setToken({
                  keyName: EnumTokens.SUBSCRIBED_DATA,
                  value: `${JSON.stringify(data.data.data)}`,
                  time: `${60 * 86400}`,
               });
            } else {
               sessionStorage.setItem(EnumTokens.ACCESS_TOKEN, data.data.access);
               sessionStorage.setItem(EnumTokens.REFRESH_TOKEN, data.data.refresh);
               sessionStorage.setItem(EnumTokens.SUBSCRIBED_DATA, JSON.stringify(data.data.data));
            }

            reset();
            router.push(ROUTES.MARKETPLACE_EQUIPMENT);
         }
      },
   });
};

export const useSendCode = (setType: (v: string) => void) => {
   const router = useRouter();

   const sendCode = useMutation({
      mutationFn: (values: IEmailVerifyRequest) => authApi.emailVerify(values),
      onSuccess: (data) => {
         if (data) {
            toast.success("Аккаунт создан!");
            router.push(ROUTES.SIGN_IN);
         }
      },
      onError: () => {
         setType("resend");
      },
   });

   return {
      sendCode: sendCode.mutate,
      isError: sendCode.isError,
      isLoading: sendCode.isPending,
   };
};
export const useResendCode = () => {
   const resendMutation = useMutation({
      mutationFn: (email: string) => authApi.resendCode({ email }),
      onSuccess: (data) => {
         if (data) {
            toast.success("Письмо было отправлено к вам на почту!");
         }
      },
   });
   return {
      resend: resendMutation.mutate,
   };
};
export const useLogout = () => {
   const { isRemember } = useRememberMe();
   let refreshToken;
   if (isRemember) {
      refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN) || "";
   } else {
      refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN) || "";
   }

   return useMutation({
      mutationFn: (token: string) => authApi.logout({ refresh: refreshToken }),
      onSuccess: () => {
         closeModal();
         CookiesServices.clearTokens();
         CookiesServices.clearCredentials();
         sessionStorage.clear();
         window.location.href = "/";
      },
   });
};
export const useDeleteAccount = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: (token: string) => {
         const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);
         const data = { refresh: refreshToken || "" };
         return authApi.deleteAccount(data);
      },
      onSuccess: () => {
         closeModal();
         CookiesServices.clearTokens();
         CookiesServices.clearCredentials();
         sessionStorage.clear();
         window.location.href = "/";
      },
   });
};
