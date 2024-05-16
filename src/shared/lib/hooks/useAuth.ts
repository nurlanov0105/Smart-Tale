"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EnumTokens } from "../types";
import { useRememberMe } from "./useRememberMe";

export function useAuth() {
   const [isAuth, setIsAuth] = useState(false);
   const { isRemember } = useRememberMe();
   let refreshToken;
   if (isRemember) {
      refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);
   } else {
      refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN);
   }

   useEffect(() => {
      const isClient = typeof window === "object";
      if (isClient && refreshToken) {
         setIsAuth(true);
      } else {
         setIsAuth(false);
      }
   }, [refreshToken]);

   return isAuth;
}
