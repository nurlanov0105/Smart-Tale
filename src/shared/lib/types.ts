

export type ChildrenComponent = {
   children: React.ReactNode;
};

export enum EnumTokens {
   ACCESS_TOKEN = "accessToken",
   REFRESH_TOKEN = "refreshToken",
   USER_ID = "userId",
}

export type InputFieldProps = {
   disabled?: boolean;
   type?: string;
   title?: string
   error?: string;
   classname?: string

};

export type TextAreaProps =  Omit<InputFieldProps, 'type'>

export type SelectProps = {
   title: string
   value: string
   classname? : string
}

