"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { vacancies } from "@/widgets/user/vacancies/model/values.data";
import { VacancyItem } from "@/entities/user/vacancyItem";
import { Button } from "@/shared/ui";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import styles from "./styles.module.scss";

const AdminVacancies = () => {
   const { push } = useRouter();
   const handleCreate = () => push(`${ORGANIZATION_ROUTES.VACANCY_DETAIL}/create-vacancy`);

   return (
      <div className={styles.vacancies}>
         <div className={styles.vacancies__heading}>
            <h3 className="h4">Найдено 6 вакансий</h3>
            <Button onClick={handleCreate}>Добавить вакансию</Button>
         </div>
         <div className={styles.vacancies__list}>
            {vacancies.map((item) => (
               // @ts-ignore
               <VacancyItem item={item} key={item.title} isAdmin={true} />
            ))}
         </div>
      </div>
   );
};

export default AdminVacancies;
