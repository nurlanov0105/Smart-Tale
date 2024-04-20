"use client"
import React, {useState} from 'react';
import {EmptyContent} from "@/entities/emptyContent";
import {EmployeesList} from "@/features/employeesList";
import {Button} from "@/shared/ui";
import {ADMIN_ROUTES} from "@/shared/lib";
import {useRouter} from "next/navigation";
import styles from "./styles.module.scss"

const AdminEmployees = () => {
    const [data, setData] = useState<number[]>([2])
    const router = useRouter()
    const handleRoute = () => {
        router.push(ADMIN_ROUTES.INVITE_EMPLOYEES)
    }

    return (
        <>
            {
                !data.length ?
                    <EmptyContent type="employees"/>
                    : <div>
                        <div className={styles.employees}>
                            <h4 className="h4">Список сотрудников</h4>
                            <Button onClick={handleRoute}>Пригласите сотрудника</Button>
                        </div>
                        <EmployeesList/>
                    </div>
            }
        </>
    );
};

export default AdminEmployees;