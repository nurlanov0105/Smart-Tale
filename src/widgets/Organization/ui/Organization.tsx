'use client'
import React, {useState} from 'react';
import {Logo} from "@/entities/logo";
import {Button} from "@/shared/ui";
import {OrderList} from "@/features/orderList";
import {EmployeesList} from "@/features/employeesList";
import {ButtonsList} from "@/entities/buttonsList";
import {organizationValues} from "@/widgets/organization";
import styles from "./styles.module.scss"

const Organization = () => {

    const [type, setType] = useState(organizationValues[0].postValue)

    return (
        <div className={styles.organization}>
            <Logo/>
            <div className={styles.organization__block}>
                <ButtonsList
                    type={type}
                    setType={setType}
                    values={organizationValues}
                />
                {
                    type === "users-list" &&
                    <Button>Пригласить сотрудника</Button>
                }
            </div>
            {
                type === "users-list" ? <EmployeesList/> : <OrderList/>
            }


        </div>
    );
};

export default Organization;