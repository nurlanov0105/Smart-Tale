"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ORGANIZATION_ROUTES, MARKETPLACE } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";
import avatar from "@@/imgs/auth/logo.png";
import adminImg from "@@/imgs/auth/admin.jpg";

const Mode = () => {
   const theme = useThemeStore((state) => state.theme);
   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   return (
      <div className={clsx(styles.mode, styles[theme])}>
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
         <Link href={ORGANIZATION_ROUTES.ORGANIZATION} className={styles.item}>
            <div className={clsx(styles.item__left, styles.item__left_admin)}>
               <Image
                  className={styles.item__image}
                  src={adminImg}
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
