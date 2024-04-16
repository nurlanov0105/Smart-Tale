import React from 'react';
import styles from "./styles.module.scss"
import clsx from "clsx";

const EmployeesItem = ({item} : {item: number}) => {
    return (
        <ul className={styles.item}>
            <li className={styles.item__text}>
                <button>Олейников Кирилл Кириллович</button>
            </li>
            <li className={styles.item__text}>
                <button>oleinikov@gmail.com</button>
            </li>
            <li className={clsx(styles.item__text)}>
                <button className={styles.item__underline}>Заказ №234</button>
            </li>
            <li className={styles.item__text}>Утюжник</li>
            <li className={styles.item__text}>Авторизован</li>
        </ul>
    );
};

export default EmployeesItem;