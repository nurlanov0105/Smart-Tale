import React from 'react';
import avatar from "@@/imgs/auth/logo.png"
import Image from "next/image";
import Link from "next/link";
import {ADMIN_ROUTES, MARKETPLACE} from "@/shared/lib";
import styles from "./styles.module.scss"

const Mode = () => {
    return (
        <div className={styles.mode}>
            <h3 className="h3">Выберите режим</h3>
            <Link href={MARKETPLACE.EQUIPMENT} className={styles.item}>
                <div className={styles.item__left}>
                    <Image
                        className={styles.item__image}
                        src={avatar}
                        alt="card"
                        width={75}
                        height={75}
                        priority
                    />
                </div>
                <div className={styles.item__right}>
                    <p className={styles.item__title}>Пользователь</p>
                </div>
            </Link>
            <Link href={ADMIN_ROUTES.ORGANIZATION} className={styles.item}>
                <div className={styles.item__left}>
                    <Image
                        className={styles.item__image}
                        src={avatar}
                        alt="card"
                        width={75}
                        height={75}
                    />
                </div>
                <div className={styles.item__right}>
                    <p className={styles.item__title}>Администратор</p>
                </div>
            </Link>
        </div>
    );
};

export default Mode;