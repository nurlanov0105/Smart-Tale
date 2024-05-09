"use client"
import React from 'react';
import {Button} from "@/shared/ui";
import {useRouter} from "next/navigation";
import {PositionItem} from "@/entities/admin/positionItem";
import {ADMIN_ROUTES} from "@/shared/lib";

import clsx from "clsx";
import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/themeStore";


const Positions = () => {

    const theme = useThemeStore((state) => state.theme);

    const router = useRouter()
    const handleRoute = () => {
        router.push(ADMIN_ROUTES.ADD_POSITION)
    }

    const list = [
        {title: "Зам. Директор", description: "Делать отчёты каждый месяц"},
        {title: "Менеджер", description: "Управлять работниками и следить за заказами"},
        {title: "Администратор", description: "Управлять организацией"},
        {title: "Утюжник", description: "Гладить"},
        {title: "Швея", description: "Шить"},
    ]


    return (
        <div className={clsx(styles.position, styles[theme])}>
            <div className={styles.position__top}>
                <h3>Список должностей</h3>
                <Button onClick={handleRoute}>Добавить должность</Button>
            </div>

            <div className={styles.table__border}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.table__thead}>
                        <th className={clsx(styles.table__item, styles.table__item__idx)}>№</th>
                        <th className={clsx(styles.table__item, styles.table__item__title)}>Название</th>
                        <th className={clsx(styles.table__item, styles.table__item__descr)}>Описание</th>
                        <th className={clsx(styles.table__item, styles.table__item__idx)}>Удалить</th>
                    </tr>
                    </thead>
                    <tbody className={styles.table__list}>
                    {list.map((item, idx) => (
                        <PositionItem key={item.title} item={item} idx={idx}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Positions;