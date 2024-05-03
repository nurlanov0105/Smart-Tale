"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { authApi } from "./services";
import { ROUTES } from "@/shared/lib";
import { toast } from "react-toastify";

export const useRegister = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.register,
      onSuccess: (data) => {
         if (data) {
            router.push(ROUTES.CONFIRMATION_REGISTER);
         }
      },
      onError: (error: any) => {
         console.error("Error occurred during registration: ", error.message);
         toast("Error occurred during registration");
      },
   });
};

export const useLogin = () => {
   const router = useRouter();

   return useMutation({
      mutationFn: authApi.login,
      onSuccess: (data) => {
         if (data) {
            router.push(ROUTES.MARKETPLACE_EQUIPMENT);
         }
      },
      onError: (error: any) => {
         console.error("Error occurred during login: ", error.message);
         toast("Error occurred during login");
      },
   });
};
