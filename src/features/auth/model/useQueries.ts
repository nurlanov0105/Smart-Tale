"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authApi } from "./services";
import { EnumTokens, ROUTES, clearCredentials, clearTokens } from "@/shared/lib";
import Cookies from "js-cookie";
import { closeModal } from "@/views/modal";

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
            console.log("useLogin tokes - ", data.data);
            Cookies.set(EnumTokens.ACCESS_TOKEN, data.data.access, { path: "/", expires: 1 });
            Cookies.set(EnumTokens.REFRESH_TOKEN, data.data.refresh, { path: "/", expires: 1 });
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
         clearTokens();
         clearCredentials();
         router.push(ROUTES.SIGN_IN);
      },
   });
};
