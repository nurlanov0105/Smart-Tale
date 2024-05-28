import {UseFormRegister, UseFormSetValue} from "react-hook-form";
import {CreateOrganizationTypes} from "@/features/admin/organizationForm";

export type ChangeLogoProps = {
    register: UseFormRegister<CreateOrganizationTypes>
    setValue: UseFormSetValue<CreateOrganizationTypes>
}