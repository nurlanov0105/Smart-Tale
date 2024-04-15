import React from 'react';
import {EmployeesItem} from "@/entities/employeesItem";
import styles from "./styles.module.scss"
import {OrderItem} from "@/entities/orderItem";

const EmployeesList = () => {
    const list = [1, 2, 3, 4, 5]

    return (
        <div className={styles.list}>
            <div className={styles.list__top}>
                <li className={styles.list__item}>ФИО</li>
                <li className={styles.list__item}>Почта</li>
                <li className={styles.list__item}>Заказы</li>
                <li className={styles.list__item}>Должность</li>
                <li className={styles.list__item}>Статус</li>
            </div>

            {
                list.map(item =>
                    <OrderItem
                        key={item}
                        item={item}
                    />
                )
            }
        </div>
    );
};

export default EmployeesList;