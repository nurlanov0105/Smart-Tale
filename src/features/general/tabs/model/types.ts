import { Dispatch, SetStateAction } from "react";

import { OrganizationValuesProps } from "@/shared/lib/types";

export type ButtonsProps = {
   type: string;
   setType: Dispatch<SetStateAction<string>>;
   values: OrganizationValuesProps[];
   variant?: "primary" | "secondary";
};
