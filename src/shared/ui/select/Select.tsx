import React, {FC} from 'react';
import {SelectProps} from "@/shared/lib/types";
import styles from "./styles.module.scss"
import { ChevronDown } from 'lucide-react';

const Select: FC<SelectProps> = ({title, classname, value}) => {
    return (
        <div className={classname}>
            <div className={styles.select}>
                <p className={styles.select__title}>{title}</p>
                <div className={styles.select__block}>
                    <p className={styles.select__value}>{value}</p>
                    <span className={styles.select__icon}><ChevronDown/></span>
                </div>
            </div>
        </div>
    );
};

export default Select;