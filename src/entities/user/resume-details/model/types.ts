import {UseFormReset} from "react-hook-form";
import {SelectPostTypes} from "@/shared/lib/types/types";



export type ResumeFormTypes = {
   job_title: string
   about_me: string
   min_salary: string
   max_salary: string
   experience: string
   currency: SelectPostTypes
   // graphic: SelectPostTypes
   // city: SelectPostTypes
   location: SelectPostTypes,
   schedule: SelectPostTypes,
}


export interface ResumeDataProps{
   isSuccess: boolean
   resume: ResumeItemTypes
   reset: UseFormReset<ResumeFormTypes>
}
export interface ResumeItemTypes{
   job_title: string
   about_me: string
   min_salary: string
   max_salary: string
   experience: string
   currency: string
   schedule: string
   slug: string
   location: string
   author: {last_name: string, middle_name: string, first_name: string}
}