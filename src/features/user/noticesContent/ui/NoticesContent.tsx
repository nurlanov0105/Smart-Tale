import React from 'react';
import styles from "./styles.module.scss"
import {Bell} from "lucide-react";

const NoticesContent = () => {
    return (
        <div className={styles.notices}>
            <Bell className={styles.notices__icon}/>
            <h3 className="h3">Уведомлений пока нет</h3>
            <h4 className={styles.notices__text}>Заходите сюда, чтобы посмотреть уведомления</h4>
        </div>
    );
};

export default NoticesContent;