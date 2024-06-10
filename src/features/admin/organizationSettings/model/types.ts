
import {UseFormReset} from "react-hook-form";
import {OrganizationDetailsTypes} from "@/shared/lib";

export interface InitialOrganizationTypes {
    data: OrganizationDetailsTypes | undefined
    isSuccess: boolean
    reset: UseFormReset<UpdateOrganizationTypes>
}

export type UpdateOrganizationTypes = {
    title: string
    description: string
    logo: File
}