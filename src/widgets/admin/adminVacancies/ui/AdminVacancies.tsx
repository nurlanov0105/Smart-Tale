"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {VacancyCardType, VacancyItem} from "@/entities/user/vacancyItem";
import { Button } from "@/shared/ui";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import styles from "./styles.module.scss";
import {useOrganizationVacancies} from "../model/useAdminVacancies";
import {WORK} from "@/shared/lib/routes.config";

const AdminVacancies = () => {
   const { push } = useRouter();
   const handleCreate = () => push(WORK.CREATE_VACANCY);

   const {data} = useOrganizationVacancies()

    const vacanciesLength = !data?.length ? 0 : data.length

   return (
      <div className={styles.vacancies}>
         <div className={styles.vacancies__heading}>
            <h3 className="h4">Найдено {vacanciesLength} вакансий</h3>
            <Button onClick={handleCreate}>Добавить вакансию</Button>
         </div>
         <div className={styles.vacancies__list}>
            {data?.map((item: VacancyCardType) => (
               <VacancyItem item={item} key={item.slug} isAdmin={true} />
            ))}
         </div>
      </div>
   );
};

export default AdminVacancies;
