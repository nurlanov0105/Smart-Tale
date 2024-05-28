import {SelectPostTypes} from "@/shared/lib/types/types";

export type ResumeFormProps = {
   type: string;
   addResume?: (data: any) => void;
   isLoading?: boolean;
};

export type ResumeFormTypes = {
   description: string
   job_title: string
   about_me: string
   min_salary: string
   max_salary: string
   experience: string
   currency: SelectPostTypes
   graphic: SelectPostTypes
   city: SelectPostTypes
}
