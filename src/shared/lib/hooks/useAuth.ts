"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EnumTokens } from "../types/types";
import { useRememberMe } from "./useRememberMe";
import { usePathname } from "next/navigation";
import { CookiesServices } from "../services/cookies.services";

export function useAuth() {
   const pathname = usePathname();

   const [isAuth, setIsAuth] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
   const isRemember = res === "true";

   useEffect(() => {
      const isClient = typeof window !== "undefined";
      let refreshToken;

      if (isClient) {
         if (isRemember) {
            refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);
         } else {
            refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN);
         }

         setIsAuth(!!refreshToken);
      }

      setIsLoading(false);
   }, [isRemember, pathname]);

   return { isAuth, isLoading };
}
