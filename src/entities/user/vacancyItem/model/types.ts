import {UseFormReset} from "react-hook-form";
import {ResumeFormTypes} from "@/entities/user/resumeForm/model/types";

export type CurrencyType = "Сом" | "USD" | "Рубль";
export type OrganizationType = {
   title: string;
};

export type VacancyCardType = {
   job_title: string;
   slug: string;
   min_salary: string;
   max_salary: string;
   currency: CurrencyType;
   organization: OrganizationType;
   location: string;
   experience: string;
};

export type VacancyItemProps = {
   item: VacancyCardType;
   typeView?: boolean;
   isAdmin?: boolean;
};


export type ResumeRequestTypes ={
   reset: UseFormReset<ResumeFormTypes>
}