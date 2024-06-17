import React from 'react';
import styles from "./styles.module.scss"
import {Emojis} from "@/shared/ui";

const NoRights = () => {
    return (
        <div className={styles.content}>
            <h3 className="h3">У вас недостаточно прав для перехода на эту страницу!</h3>
            <p className={styles.text}>Пожалуйста, свяжитесь с владельцем для получения прав.</p>
        </div>
    );
};

export default NoRights;