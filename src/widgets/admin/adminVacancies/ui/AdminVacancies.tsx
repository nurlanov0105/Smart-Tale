"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {VacancyCardType, VacancyItem} from "@/entities/user/vacancyItem";
import {Button, GlobalLoading} from "@/shared/ui";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import styles from "./styles.module.scss";
import {useOrganizationVacancies} from "../model/useAdminVacancies";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {EmptyContent} from "@/entities/admin/emptyContent";

const AdminVacancies = () => {
   const { push } = useRouter();
   const handleCreate = () => push(ORGANIZATION_ROUTES.CREATE_VACANCY);

   const {data, isSuccess, isLoading, isError} = useOrganizationVacancies()

    const vacanciesLength = !data?.length ? 0 : data.length

    if (isLoading) return <GlobalLoading type="full"/>
    if (isError) return <ErrorMessage/>

   return (
       <>
           {
               !data?.length && <EmptyContent type="vacancy"/>
           }

           {
               !!data?.length &&
               <div className={styles.vacancies}>
                   <div className={styles.vacancies__heading}>
                       <h3 className="h4">Найдено {vacanciesLength} вакансий</h3>
                       <Button onClick={handleCreate}>Добавить вакансию</Button>
                   </div>
                   <div className={styles.vacancies__list}>
                       {data?.map((item: VacancyCardType) => (
                           <VacancyItem item={item} key={item.slug} isAdmin={true}/>
                       ))}
                   </div>
               </div>
           }
       </>
   );
};

export default AdminVacancies;
