import {Dispatch, SetStateAction} from "react";
import {OrganizationValuesProps} from "@/widgets/organization";

export type ButtonsProps = {
    type: string
    setType: Dispatch<SetStateAction<string>>
    values: OrganizationValuesProps[]
}