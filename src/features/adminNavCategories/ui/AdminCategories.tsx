import React from 'react';
import {AdminRoutes} from "../model/adminRoutes";
import {AdminItem} from "@/entities/adminNavItem";
import styles from "./styles.module.scss";

const AdminCategories = () => {
    return (
        <ul className={styles.list}>
            {AdminRoutes.map((item) => (
                <AdminItem {...item} key={item.id}/>
            ))}
        </ul>
    );
};

export default AdminCategories;