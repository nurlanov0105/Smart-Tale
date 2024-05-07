"use client";
import Cookies from "js-cookie";
import { EnumTokens } from "../types";

export function useAuth() {
   const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);

   if (refreshToken) {
      return true;
   } else {
      return false;
   }
}
