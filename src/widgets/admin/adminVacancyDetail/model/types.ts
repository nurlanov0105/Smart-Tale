import {SelectPostTypes} from "@/shared/lib/types/types";

export type VacancyDetailsTypes = {
    job_title: string
    description: string
    min_salary: string
    max_salary: string
    experience: string
    currency: SelectPostTypes

    location: SelectPostTypes,
    schedule: SelectPostTypes,
}