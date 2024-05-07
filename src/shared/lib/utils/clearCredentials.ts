import Cookies from "js-cookie";
import { EnumTokens } from "../types";

export const clearCredentials = () => {
   Cookies.remove(EnumTokens.REGISTER_EMAIL);
};
