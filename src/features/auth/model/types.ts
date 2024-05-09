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

export type IResendCodeRequest = {
   code: string;
};

export type IForgotPasswordRequest = {
   email: string;
   password: string;
};

export type IResetPasswordRequest = {
   password: string;
};

export type registerFormType = {
   email: string;
   firstName: string;
   lastName: string;
   middleName: string;
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
