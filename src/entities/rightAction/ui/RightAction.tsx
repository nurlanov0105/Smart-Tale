import React, {FC} from 'react';
import styles from "./styles.module.scss";
import {TypeRightActions} from "@/features/rightActions/model/types";

const RightAction:FC<TypeRightActions> = ({isRight, title}) => {
    return (
        <li className={styles.item}>
            <input className={styles.item__input} defaultChecked={isRight} type="checkbox"/>
            <p className={styles.item__title}>{title}</p>
        </li>
    );
};

export default RightAction;