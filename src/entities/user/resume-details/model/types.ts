import {SelectPostTypes} from "@/shared/lib/types/types";

export type ResumeFormProps = {
   type: string;
};

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
