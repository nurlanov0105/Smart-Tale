"use client";

import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { useWindowSize } from "@/shared/lib";

import { TypeCategories } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";

const NavbarItem: FC<TypeCategories> = ({ routes, title, Icon, activeRoutes, id }) => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();
   const toggleHidden = useOrdersStore((state) => state.toggleHidden);

   const windowSize = useWindowSize();

   const handleClickClose = () => {
      if (windowSize.width && windowSize.width <= 900) {
         toggleHidden();
      }
   };

   return (
      <li className={clsx(styles.category_item, styles[theme])} onClick={handleClickClose}>
         <Link
            href={routes[0].link}
            className={clsx(styles.category__top, {
               [styles.category__top_active]:
                  routes.some((el) => el.link === pathname) ||
                  activeRoutes?.some((el) => pathname.includes(el)),
            })}>
            <span className={styles.category__icon}>
               <Icon />
            </span>
            <h3 className={styles.category__title}>{title}</h3>
         </Link>

         <div className={styles.category}>
            <div className={styles.category__list}>
               {routes.map((item) => (
                  <Link
                     href={item.link}
                     key={item.subtitle}
                     className={clsx(styles.category__item, {
                        [styles.category__item_active]: item.link === pathname,
                     })}>
                     {item.subtitle}
                  </Link>
               ))}
            </div>
         </div>
      </li>
   );
};

export default NavbarItem;
