import React, { FC } from "react";
import Link from "next/link";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import logo from "@@/logo.svg";
import { TypesItemOrganization } from "../model/types";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";

const OrganizationItem: FC<TypesItemOrganization> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <Link
         href={ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + "/item name"}
         className={clsx(styles.organization, styles[theme])}>
         <div className={styles.organization__left}>
            <Image
               className={styles.organization__image}
               src={logo}
               alt="card"
               width={75}
               height={75}
            />
            <div className={styles.organization__info}>
               <h6 className={styles.organization__title}>SmartTale</h6>
               <p className={styles.organization__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cum
                  deserunt dolorem ipsum mollitia nesciunt nulla odio pariatur temporibus!
                  Blanditiis dolorum, ducimus et maxime minus obcaecati perspiciatis sint soluta.
               </p>
            </div>
         </div>
         <div className={styles.organization__bottom}>
            {item.isActive ? (
               <span className={clsx(styles.organization__date, styles.organization__date_active)}>
                  Активен
               </span>
            ) : (
               <span className={styles.organization__date}>Деактивен</span>
            )}
            <p className={styles.organization__detail}>Посмотреть детали</p>
         </div>
      </Link>
   );
};

export default OrganizationItem;
