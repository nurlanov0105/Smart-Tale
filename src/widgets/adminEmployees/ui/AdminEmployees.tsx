"use client"
import React, {useState} from 'react';
import {EmptyContent} from "@/entities/emptyContent";
import {EmployeesList} from "@/features/employeesList";

const AdminEmployees = () => {
    const [data, setData] = useState<number[]>([])

    return (
        <>
            {
                !data.length ?
                    <EmptyContent type="employees"/>
                    : <div>
                        <h4>Список сотрудников</h4>
                        <EmployeesList/>
                    </div>
            }
        </>
    );
};

export default AdminEmployees;