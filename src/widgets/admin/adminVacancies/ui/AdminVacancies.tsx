"use client"
import React from 'react';
import styles from "./styles.module.scss"
import {vacancies} from "@/widgets/user/vacancies/model/values.data";
import {VacancyItem} from "@/entities/user/vacancyItem";
import {Button} from "@/shared/ui";
import {useRouter} from "next/navigation";
import {ADMIN_ROUTES} from "@/shared/lib";

const AdminVacancies = () => {
    const {push} = useRouter()
    const handleCreate = () => push(`${ADMIN_ROUTES.VACANCY_DETAIL}/create-vacancy`)

    return (
        <div className={styles.vacancies}>
            <div className={styles.vacancies__heading}>
                <h3 className="h4">Найдено 6 вакансий</h3>
                <Button onClick={handleCreate}>Добавить вакансию</Button>
            </div>
            <div className={styles.vacancies__list}>
                {
                    vacancies.map(item =>
                        <VacancyItem item={item} key={item.title} isAdmin={true}/>
                    )
                }
            </div>
        </div>
    );
};

export default AdminVacancies;