import React from 'react';
import styles from "./styles.module.scss"
import clsx from "clsx";
import Link from "next/link";
import {ADMIN_ROUTES} from "@/shared/lib";

const EmployeesItem = ({item} : {item: number}) => {


    return (
        <ul className={styles.item}>
            <Link href={ADMIN_ROUTES.EMPLOYEES_DETAIL} className={styles.item__text}>
                <button>Олейников Кирилл Кириллович</button>
            </Link>
            <Link href={ADMIN_ROUTES.EMPLOYEES_DETAIL} className={styles.item__text}>
                <button>oleinikov@gmail.com</button>
            </Link>
            <li className={clsx(styles.item__text)}>
                <button className={styles.item__underline}>Заказ №234</button>
            </li>
            <li className={styles.item__text}>Утюжник</li>
            <li className={styles.item__text}>Авторизован</li>
        </ul>
    );
};

export default EmployeesItem;