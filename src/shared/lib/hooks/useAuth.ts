"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EnumTokens } from "../types";

export function useAuth() {
   const [isAuth, setIsAuth] = useState(false);

   useEffect(() => {
      const isClient = typeof window === "object";
      const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);

      if (isClient && refreshToken) {
         setIsAuth(true);
      } else {
         setIsAuth(false);
      }
   }, []);

   return isAuth;
}
