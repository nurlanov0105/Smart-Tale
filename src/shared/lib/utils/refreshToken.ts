import axios from "axios";
import { CookiesServices } from "../services/cookies.services";
import { EnumTokens } from "../types";
import { AuthEndpoints, BASE_URL } from "@/shared/api";

export const refreshToken = async () => {
   const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
   const isRemember = res === "true";
   let refreshToken;

   if (isRemember) {
      refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN);
   } else {
      refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN);
   }

   const refresh = { refresh: refreshToken };

   const response = await axios.post(BASE_URL + AuthEndpoints.REFRESH_TOKEN, refresh);

   if (response.data.access) {
      if (isRemember) {
         CookiesServices.setToken({
            keyName: EnumTokens.ACCESS_TOKEN,
            value: response.data.access,
         });
      } else {
         sessionStorage.setItem(EnumTokens.ACCESS_TOKEN, response.data.access);
      }
   }

   return response.data;
};
