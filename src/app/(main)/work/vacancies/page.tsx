import React from "react";
import { NextPage } from "next";
import { Vacancies } from "@/widgets/user/vacancies";
import {BASE_URL, ResumeEndpoints, ResumeQueryKeys, VacancyEndpoints, VacancyQueryKeys} from "@/shared/api";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {Resumes} from "@/widgets/admin/resumes";
import {cookies} from "next/headers";
import {EnumTokens} from "@/shared/lib";

export default async function VacanciesPage(){
   const data = await fetchVacancies()

   if (!data) return <ErrorMessage/>

   return (
       <Vacancies initialData={data} queryKey={VacancyQueryKeys.GET_VACANCIES}/>
   );
};


const fetchVacancies = async () => {
   const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)
   try {

      const res = await fetch(BASE_URL + VacancyEndpoints.VACANCY,{
         next: {revalidate: 3600},
         headers: {
            Authorization: `Bearer ${accessToken?.value}`,
            'Content-Type': 'application/json',
         },
      });

      if (!res.ok){
         throw new Error("Произошла ошибка при запросе")
      }

      return res.json();

   } catch (err){
      console.error('Ошибка при обработке запроса:', err);
   }

};




