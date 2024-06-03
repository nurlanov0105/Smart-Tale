import {RightsTypes} from "@/shared/lib";

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