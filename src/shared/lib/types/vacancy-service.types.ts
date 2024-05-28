export type FilterVacancyType = {
   job_title: string;
   organization__title: string;
   experience: string;
   location: string;
   schedule: string;
   currency: string;
   min_salary: string;
   max_salary: string;
   days: string;
   week: string;
   month: string;
};

export type VacancyDeletetype = {
   slug: string;
   data: string;
};
