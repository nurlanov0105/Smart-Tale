export type ChildrenComponent = {
   children: React.ReactNode;
};

export enum EnumTokens {
   ACCESS_TOKEN = "accessToken",
   REFRESH_TOKEN = "refreshToken",
   USER_ID = "userId",
}

export type InputFieldProps = {
   placeholder: string;
   disabled: boolean;
   type: string;
   icon: string;
   error: string;
};
