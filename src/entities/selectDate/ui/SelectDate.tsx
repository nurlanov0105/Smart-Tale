import React from 'react';
import {Select} from "@/shared/ui";
import styles from "./styles.module.scss";

const SelectDate = () => {
    return (
        <div className={styles.date}>
            <Select
                classname={styles.date__margin}
                value="30"
                title="День"
            />
            <Select
                classname={styles.date__margin}
                value="Апрель"
                title="Месяц"
            />
            <Select
                classname={styles.date__margin}
                value="2024"
                title="Год"
            />
        </div>
    );
};

export default SelectDate;