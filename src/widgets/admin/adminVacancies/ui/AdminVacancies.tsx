"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {VacancyCardType, VacancyItem} from "@/entities/user/vacancyItem";
import {Button, GlobalLoading} from "@/shared/ui";
import {MODAL_KEYS, ORGANIZATION_ROUTES} from "@/shared/lib";
import styles from "./styles.module.scss";
import {useOrganizationVacancies} from "../model/useAdminVacancies";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {EmptyContent} from "@/entities/admin/emptyContent";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {showModal} from "@/views/modal";

const AdminVacancies = () => {
   const { push } = useRouter();
   const hasAccess = useSubscribeStore(state => state.position.flag_create_vacancy)
   const handleCreate = () => {
       if (!hasAccess){
           showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
           return
       }
       push(ORGANIZATION_ROUTES.CREATE_VACANCY)
   };

   const {data, isSuccess, isLoading, isError} = useOrganizationVacancies()

    const vacanciesLength = !data?.length ? 0 : data.length

    if (isLoading) return <GlobalLoading type="full"/>
    if (isError) return <ErrorMessage/>

   return (
       <>
           {
               !data?.length && <EmptyContent access={Boolean(hasAccess)} type="vacancy"/>
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
