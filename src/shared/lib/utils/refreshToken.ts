import axios from "axios";
import { CookiesServices } from "../services/cookies.services";
import { EnumTokens } from "../types";
import { AuthEndpoints, BASE_URL } from "@/shared/api";

export const refreshToken = async () => {

   const refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN);
   const refresh = {refresh: refreshToken}

   const response = await axios.post(BASE_URL + AuthEndpoints.REFRESH_TOKEN, refresh);

   if (response.data.access) {
      CookiesServices.setToken({ keyName: EnumTokens.ACCESS_TOKEN, value: response.data.access });
      CookiesServices.setToken({ keyName: EnumTokens.REFRESH_TOKEN, value: response.data.refresh });
   }

   return response.data
};
