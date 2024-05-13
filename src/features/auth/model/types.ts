import {FieldErrors, UseFormRegister, UseFormTrigger, UseFormWatch} from "react-hook-form";

export type IRegisterRequest = {
   first_name: string;
   last_name: string;
   middle_name: string;
   email: string;
   password: string;
   password_confirm: string;
};

export type ILoginRequest = {
   email: string;
   password: string;
   rememberMe?: boolean;
};

export type IEmailVerifyRequest = {
   email: string;
   code: string;
};

export type IResendCodeRequest = Pick<IEmailVerifyRequest, "email">

export type IForgotPasswordRequest = Pick<ILoginRequest, "email" | "password">

export type IResetPasswordRequest = Pick<ILoginRequest, "password">


export type registerFormType = {
   email: string;
   firstName: string;
   lastName: string;
   middleName: string;
   tel: string
   password: string;
   rePassword: string;
   rememberMe?: boolean;
};

export type ConfirmationFormProps = {
   handleConfirmation: (code: string) => void;
   handleResendCode: (code: string) => void;
   isLoading: boolean;
   isError: boolean;
   isResendSuccess: boolean;
};

export type RegisterFormProps = {
   handleRegister: (data: registerFormType) => void;
   checkEmailValidity: (email: string) => void;
   isLoading: boolean;
};
export type LoginFormProps = {
   handleLogin: (data: ILoginRequest) => void;
   isLoading: boolean;
};

export type LogoutType = {
   refresh: string;
};


export type EmailCheckerProps = {
   watch: UseFormWatch<any>
   errors: FieldErrors
   isValid: boolean
}

export type EffectsProps = {
   watch: UseFormWatch<any>
   trigger: UseFormTrigger<any>
}
