import { AuthEndpoints, authApiInstance, BASE_URL } from "@/shared/api";
import {
   ILoginRequest,
   IRegisterRequest,
   IResendCodeRequest,
   IForgotPasswordRequest,
   IResetPasswordRequest,
   IEmailVerifyRequest,
   LogoutType,
} from "./types";
import { baseApiInstance } from "@/shared/api/instance";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import axios from "axios";

export const authApi = {
   register: async (params: IRegisterRequest) => {
      return await authApiInstance.post(AuthEndpoints.REGISTER, params);
   },

   login: async (params: ILoginRequest) => {
      return await authApiInstance.post(AuthEndpoints.LOGIN, params);
   },

   emailVerify: async (params: IEmailVerifyRequest) => {
      return await authApiInstance.post(AuthEndpoints.EMAIL_CONFIRMATION, params);
   },

   emailAvailable: async (email: string) => {
      return await authApiInstance.post(AuthEndpoints.EMAIL_AVAILABLE, email, {headers: { "Content-Type": "text/plain" },});
   },

   resendCode: async (email: IResendCodeRequest) => {
      return await authApiInstance.post(AuthEndpoints.RESEND_CODE, email);
   },

   sendForgotPassword: async (params: IForgotPasswordRequest) => {
      return await authApiInstance.post(AuthEndpoints.FORGOT_PASSWORD, params);
   },

   resetPassword: async (params: IResetPasswordRequest) => {
      return  await authApiInstance.put(AuthEndpoints.RESET_PASSWORD, params);
   },

   logout: async (params: LogoutType) => {
      return await baseApiInstance.post(AuthEndpoints.LOGOUT, params);
   },

   deleteAccount: async (data: { refresh: string }) => {
      return await baseApiInstance.delete(AuthEndpoints.DELETE_ACCOUNT, { data });
   },
   refreshToken: async (refresh: { refresh: string }) => {
      const data = { refresh: `Bearer ${refresh}` };
      const response = await axios.post(BASE_URL + AuthEndpoints.REFRESH_TOKEN, data);

      if (response.data.accessToken) {
         CookiesServices.setToken({
            keyName: EnumTokens.ACCESS_TOKEN,
            value: response.data.access,
         });
         CookiesServices.setToken({
            keyName: EnumTokens.REFRESH_TOKEN,
            value: response.data.refresh,
         });
      }
      return response.data;
   },
};
