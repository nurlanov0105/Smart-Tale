"use client"
import React, {useState} from 'react';
import {ButtonsList} from "@/features/buttonsList";
import {valuesData} from "../model/values.data";
import {AdminEmployeesItem} from "@/entities/adminEmployeesItem";
import {organizationsData} from "@/widgets/employeesForm/model/organizations.data";
import {Select} from "@/shared/ui";
import styles from "./styles.module.scss";

const AdminOrders = () => {
    const [type, setType] = useState(valuesData[0].postValue)
    const [selected, setSelected] = useState(organizationsData[0])
    const data = [1,2,3,4,5]

    return (
        <div className={styles.form}>
            <fieldset className={styles.form__fieldset}>
                <legend className={styles.form__title}>Сотрудник</legend>
                <Select
                    selected={selected}
                    setSelected={setSelected}
                    title="Сотрудник"
                    employees={organizationsData}
                />
            </fieldset>

            <fieldset className={styles.form__fieldset}>
                <legend className={styles.form__title}>Заказы сотрудника</legend>
                <ButtonsList type={type} setType={setType} values={valuesData}/>
                <div className={styles.form__list}>
                    {
                        data.map(item =>
                            <AdminEmployeesItem key={item} item={item}/>
                        )
                    }
                </div>
            </fieldset>
        </div>
    );
};

export default AdminOrders;