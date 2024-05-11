import {AuthEndpoints, authApiInstance, BASE_URL} from "@/shared/api";
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
import {CookiesServices, EnumTokens} from "@/shared/lib";
import axios from "axios";

export const authApi = {
   register: async (params: IRegisterRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.REGISTER, params);
      return response;
   },

   login: async (params: ILoginRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.LOGIN, params);
      return response;
   },

   emailVerify: async (params: IEmailVerifyRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.EMAIL_CONFIRMATION, params);
      return response;
   },

   emailAvailable: async (email: string) => {
      const response = await authApiInstance.post(AuthEndpoints.EMAIL_AVAILABLE, email, {
         headers: { "Content-Type": "text/plain" },
      });
      return response;
   },

   resendCode: async (email: IResendCodeRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.RESEND_CODE, email);
      return response;
   },

   sendForgotPassword: async (params: IForgotPasswordRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.FORGOT_PASSWORD, params);
      return response;
   },

   resetPassword: async (params: IResetPasswordRequest) => {
      const response = await authApiInstance.put(AuthEndpoints.RESET_PASSWORD, params);
      return response;
   },

   logout: async (params: LogoutType) => {
      const response = await baseApiInstance.post(AuthEndpoints.LOGOUT, params);
      return response;
   },

   deleteAccount: async (data: { refresh: string }) => {
      const response = await baseApiInstance.delete(AuthEndpoints.DELETE_ACCOUNT, { data });
      return response;
   },
   refreshToken: async (refresh: {refresh: string}) => {
      const data = {refresh: `Bearer ${refresh}`};
      const response = await axios.post(BASE_URL + AuthEndpoints.REFRESH_TOKEN, data)

      if (response.data.accessToken) {
         CookiesServices.setToken({ keyName: EnumTokens.ACCESS_TOKEN, value: response.data.access });
         CookiesServices.setToken({ keyName: EnumTokens.REFRESH_TOKEN, value: response.data.refresh });
      }
      return response.data
   }
};
