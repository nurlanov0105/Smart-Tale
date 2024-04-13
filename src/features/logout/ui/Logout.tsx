import { LogOut } from 'lucide-react';
import React from 'react';
import styles from "./styles.module.scss"
const Logout = () => {
    return (
        <button className={styles.button}>
            <span><LogOut /></span>
            <p>Выйти</p>
        </button>
    );
};

export default Logout;