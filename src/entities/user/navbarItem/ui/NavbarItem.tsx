"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { useWindowSize } from "@/shared/lib";

import { TypeCategories } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";
import { ChevronDown } from "lucide-react";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

const NavbarItem: FC<TypeCategories & { isAuth: boolean }> = ({
   routes,
   title,
   Icon,
   activeRoutes,
   id,
   isAuth,
}) => {
   const theme = useThemeStore((state) => state.theme);
   const toggleHidden = useOrdersStore((state) => state.toggleHidden);
   const position = useSubscribeStore((state) => state.position);

   const pathname = usePathname();
   const windowSize = useWindowSize();

   const contentRef = useRef<HTMLDivElement>(null);
   const [isShow, setIsShow] = useState(true);
   const [height, setHeight] = useState<number | undefined>(undefined);

   useEffect(() => {
      if (contentRef.current) {
         setHeight(isShow ? contentRef.current.scrollHeight : 0);
      }

      const withoutOrgHeight = 33;
      if (isShow && !position?.organization && title === "Организация") {
         setHeight(withoutOrgHeight);
      }

      // eslint-disable-next-line
   }, [isShow, routes, position]);

   const handleClickClose = () => {
      if (windowSize.width && windowSize.width <= 900) {
         toggleHidden();
      }
   };

   const handleToggleClick = () => {
      setIsShow((prev) => !prev);
   };

   return (
      <li className={clsx(styles.category_item, styles[theme])}>
         <div
            onClick={handleToggleClick}
            className={clsx(styles.category__top, {
               [styles.category__top_active]:
                  routes.some((el) => el.link === pathname) ||
                  activeRoutes?.some((el) => pathname.includes(el)),
            })}>
            <div className={styles.category__inner}>
               <span className={styles.category__icon}>
                  <Icon />
               </span>
               <h3 className={styles.category__title}>{title}</h3>
            </div>
            <ChevronDown
               className={clsx(styles.category__arrow, isShow && styles.category__arrow_active)}
            />
         </div>

         <div
            className={clsx(styles.category, !isShow ? styles.category_hidden : "")}
            style={{
               height: height !== undefined ? `${height}px` : "none",
            }}
            ref={contentRef}>
            <div className={styles.category__list}>
               {routes.map((item) => (
                  <Link
                     onClick={handleClickClose}
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
