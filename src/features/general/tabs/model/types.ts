import { Dispatch, SetStateAction } from "react";

export type OrganizationValuesProps = {
   value: string;
   postValue: string;
};

export type ButtonsProps = {
   type: string;
   setType: Dispatch<SetStateAction<string>>;
   values: OrganizationValuesProps[];
   variant?: "primary" | "secondary";
};
