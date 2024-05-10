import axios from "axios";
import { CookiesServices } from "../services/cookies.services";
import { EnumTokens } from "../types";
import { AuthEndpoints, BASE_URL } from "@/shared/api";

export const refreshToken = async () => {
   const refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN);
   if (refreshToken) {
      const data = {
         refresh: refreshToken,
      };

      const response = await axios.post(BASE_URL + AuthEndpoints.REFRESH_TOKEN, data);

      return { access: response.data.access, refresh: response.data.refresh };
   } else {
      return { access: "", refresh: "" };
   }
};
