import {RightsTypes} from "@/shared/lib";
import {UseFormReset} from "react-hook-form";

export interface PositionResponseTypes extends RightsTypes{
    title: string;
    description: string;
    slug: string
}

export interface EmployeesResponseTypes{
    email: string
    first_name: string
    job_title: string
    last_name: string
    middle_name: string
    status: string
    user_slug: string
    order: {title: string, slug: string}[]
}

export interface OrganizationDetailsTypes{
    created_at: string
    description: string
    logo: string | null
    owner:{slug: string, first_name: string, last_name: string, profile_image: string}
    phone_number: string
    slug: string
    title: string
}