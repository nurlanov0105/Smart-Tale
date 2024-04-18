'use client'
import React, {useState} from 'react';
import {EmptyContent} from "@/entities/emptyContent";
import styles from "./styles.module.scss"

const AdminOrganization = () => {
    const [data, setData] = useState<number[]>([])


    return (
        <>
            {
                !data.length ?
                    <EmptyContent type="organization"/>
                        : <h3>Какой-то список организаций</h3>
            }
        </>
    );
};

export default AdminOrganization;