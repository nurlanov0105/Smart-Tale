import React, {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import logo from "@@/logo.svg";
import {showModal} from "@/views/modal";
import { useThemeStore } from "@/shared/themeStore";
import {MODAL_KEYS, ORGANIZATION_ROUTES} from "@/shared/lib";
import {Switch} from "@/shared/ui";
import { TypesItemOrganization } from "../model/types";
import styles from "./styles.module.scss";


const OrganizationItem: FC<TypesItemOrganization> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);

   const handleActivate = () => {
       if (!item.active) showModal(MODAL_KEYS.activateOrganization, {slug: item.slug})
   }

   return (
      <div
         className={clsx(styles.organization, item.active && styles.organization_active, styles[theme])}>
         <Link href={ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${item.slug}`} className={styles.organization__left}>
            <Image
               className={styles.organization__image}
               src={logo}
               alt="card"
               width={75}
               height={75}
            />
            <div className={styles.organization__info}>
               <h6 className={styles.organization__title}>{item.title}</h6>
               <p className={styles.organization__text}>{item.description}</p>
            </div>
         </Link>
         <div className={styles.organization__bottom}>
             <span className={clsx(styles.organization__date, item.active && styles.organization__date_active)}>
                 <p>
                     {item.active ? "Активен" : "Деактивен"}
                 </p>
                 <Switch
                     checked={item.active}
                     onCheckedChange={handleActivate}
                 />
             </span>

            {/*<p className={styles.organization__detail}>Посмотреть детали</p>*/}
         </div>
      </div>
   );
};

export default OrganizationItem;
