import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/store/themeStore";


const AdminResponseItem:FC<{ item: any }> = ({item}) => {
    const theme = useThemeStore((state) => state.theme);
    return (
        <div className={clsx(styles.item, styles[theme])}>
            <div className={styles.item__info}>
                Пользователь: «<span>{item.name}</span>»  сделал отклик на вашу вакансию

            </div>
            <div className={styles.item__bottom}>
                <div className={styles.item__btns}>
                    <button className={styles.item__btn}>Посмотреть резюме</button>
                    <button className={clsx(styles.item__btn, styles.item__btn_green)}>Написать</button>
                </div>
                <p className={styles.item__date}>{item.date}</p>
            </div>
        </div>
    );
};

export default AdminResponseItem;