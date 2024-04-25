import { Dispatch, SetStateAction } from "react";
import { OrganizationValuesProps } from "@/widgets/user/organization";

export type ButtonsProps = {
   type: string;
   setType: Dispatch<SetStateAction<string>>;
   values: OrganizationValuesProps[];
   variant?: "primary" | "secondary"
};
