import { CurrencyType, OrganizationType } from "@/entities/user/vacancyItem";

export type ResumeType = {
   job_title: string;
   min_salary: string;
   max_salary: string;
   currency: CurrencyType;
   // slug: string;
   // organization: OrganizationType;
   // location: string;
   experience: string;
   description?: string;

};
