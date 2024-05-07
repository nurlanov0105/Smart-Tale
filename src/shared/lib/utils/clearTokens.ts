import Cookies from "js-cookie";
import { EnumTokens } from "../types";

export const clearTokens = () => {
   Cookies.remove(EnumTokens.ACCESS_TOKEN);
   Cookies.remove(EnumTokens.REFRESH_TOKEN);
};
