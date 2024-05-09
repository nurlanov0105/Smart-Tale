"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authApi } from "./services";
import { CookiesServices, EnumTokens, ROUTES } from "@/shared/lib";
import { closeModal } from "@/views/modal";
import { toast } from "react-toastify";

export const useRegister = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.register,
      onSuccess: () => {
         router.push(ROUTES.CONFIRMATION_REGISTER);
      },
   });
};

export const useLogin = () => {
   const router = useRouter();

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

            CookiesServices.setToken(accessData);
            CookiesServices.setToken(refreshData);

            router.push(ROUTES.MARKETPLACE_EQUIPMENT);
         }
      },
   });
};
export const useSendCode = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.emailVerify,
      onSuccess: (data) => {
         if (data) {
            toast.success("Аккаунт создан!");
            router.push(ROUTES.SIGN_IN);
         }
      },
   });
};
export const useResendCode = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.resendCode,
      onSuccess: (data) => {
         if (data) {
            router.push(ROUTES.SIGN_IN);
         }
      },
   });
};
export const useLogout = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.logout,
      onSuccess: () => {
         closeModal();
         CookiesServices.clearTokens();
         CookiesServices.clearCredentials();
         router.push(ROUTES.SIGN_IN);
      },
   });
};
export const useDeleteAccount = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.deleteAccount,
      onSuccess: () => {
         closeModal();
         CookiesServices.clearTokens();
         CookiesServices.clearCredentials();
         router.push(ROUTES.SIGN_IN);
      },
   });
};
