import { Dispatch, SetStateAction } from "react";

export enum EnumTokens {
   ACCESS_TOKEN = "accessToken",
   REFRESH_TOKEN = "refreshToken",
   USER_ID = "userId",
}

export type InputFieldProps = {
   disabled?: boolean;
   type?: string;
   title?: string;
   error?: string | any;
   classname?: string;
   isBordered?: boolean;
   value?: string;
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
   isDisabled: boolean;
   setIsDisabled: Dispatch<SetStateAction<boolean>>;
   isError: boolean;
};

export type employee = {
   value: string;
   postValue: string;
   descr?: string;
};

export type SelectTypes = {
   selected: employee;
   setSelected: Dispatch<SetStateAction<employee>>;
   data: employee[];
   title?: string;
   classname?: string;
};
