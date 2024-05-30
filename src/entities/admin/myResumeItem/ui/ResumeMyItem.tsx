import React from 'react';
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import avatar from "@@/imgs/auth/auth-1.jpg";
import {useThemeStore} from "@/shared/themeStore";
import {WORK} from "@/shared/lib/routes.config";
import styles from "./styles.module.scss";

const ResumeMyItem = () => {
    const theme = useThemeStore(state => state.theme)
    return (
        <div className={clsx(styles.resume__item, styles[theme])}>
            <div className={styles.resume__left}>
                <Image
                    src={avatar}
                    alt="avatar"
                    width={150}
                    height={150}
                    className={styles.resume__image}
                />
            </div>
            <div className={styles.resume__right}>
                <div className={styles.resume__info}>
                    <Link href={WORK.RESUME_DETAILS + "/direktor"} className={styles.resume__salary}>Директор</Link>
                    <Link href={WORK.RESUME_DETAILS + "/direktor"} className={styles.resume__title}>Пранов Адилет Мелсович</Link>
                    <p>График работы: Полный рабочий день</p>
                    <p>Опыт работы: от 1года</p>
                    <div className={styles.resume__statisticsWrapper}>
                        <h4 className="h4">Статистика за неделю</h4>
                        <div className={styles.resume__statistics}>
                            <div className={styles.resume__statistic}>15 показов</div>
                            <div className={styles.resume__statistic}>100 просмотров</div>
                            <div className={styles.resume__statistic}>10 приглашений</div>
                        </div>
                    </div>
                    {/*<h4 className={styles.resume__salary}>20 000 - 30 000 сом</h4>*/}
                </div>
                <p className={styles.resume__date}>Обновлено 21 мая 2024 в 02:03</p>
                <div className={styles.resume__buttons}>
                    <Link href={WORK.RESUME_DETAILS + "/direktor"} className={styles.resume__button}>Посмотреть подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default ResumeMyItem;