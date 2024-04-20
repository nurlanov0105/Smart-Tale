import React, { FC } from "react";
import { TypeCategories} from "../model/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import styles from "./styles.module.scss";

const NavbarItem: FC<TypeCategories> = ({ routes, title, Icon }) => {
   const pathname = usePathname();

   return (
      <li className={styles.category_item}>
         <button
            className={clsx(styles.category__top, {
               [styles.category__top_active]: routes.some((el) => el.link === pathname),
            })}>
            <span className={styles.category__icon}>
               <Icon />
            </span>
            <h3 className={styles.category__title}>{title}</h3>
         </button>

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
