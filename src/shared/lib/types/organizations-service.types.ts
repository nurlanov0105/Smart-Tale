import {employee} from "@/shared/lib/types/types";


export interface RightsTypes{
    "change-roles": string
    "add-employee": string
    "change-status": string
    "cancel-order": string
    "give-role": string
    "delete-role": string
}

export interface AddPositionTypes{
    title: string
    description: string
    organization: employee
    "change-roles": string
    "add-employee": string
    "change-status": string
    "cancel-order": string
    "give-role": string
    "delete-role": string
}

export interface AddPositionRequestTypes {
    roles: RightsTypes
    title: string
    description: string
    organization: string
}

export interface EmployeeDetailsTypes {
    name: string
    lastName: string
    patronymic: string
    email: string
    phone_number: string
    position: string
}