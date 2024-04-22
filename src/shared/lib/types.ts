import { Dispatch, SetStateAction } from "react";

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
   title?: string;
   error?: string;
   classname?: string;
   isBordered?: boolean;
   value?: string;
   placeholder?: string;
};

export type TextAreaProps = Omit<InputFieldProps, "type">;

type dateType = {
   value: string | number;
   postValue: number;
};

export type SelectProps = {
   title: string;
   value: dateType;
   data: dateType[];
   setDate: Dispatch<SetStateAction<dateType>>;
   classname?: string;
};

export type TimerProps = {
   seconds: number;
   setSeconds: Dispatch<SetStateAction<number>>;
   isDisabled: boolean;
   setIsDisabled: Dispatch<SetStateAction<boolean>>;
   isError: boolean;
};

export type employee = {
   value: string;
   email: string;
};

export type SelectTypes = {
   selected: employee;
   setSelected: Dispatch<SetStateAction<employee>>;
   title: string;
   employees: employee[];
};
