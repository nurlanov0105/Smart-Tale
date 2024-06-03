import { Dispatch, SetStateAction } from "react";

export type ChatProps = {
   value: string;
   postValue: string;
};

export type ChatFormProps = {
   selected: number;
   setIsShowChat: Dispatch<SetStateAction<boolean>>;
};
