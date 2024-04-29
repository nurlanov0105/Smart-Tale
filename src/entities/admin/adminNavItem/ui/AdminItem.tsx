import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { useWindowSize } from "@/shared/lib";
import { TypeAdminCategories } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";

const AdminItem: FC<TypeAdminCategories> = ({ title, link, Icon, routes }) => {
   const pathname = usePathname();
   const windowSize = useWindowSize();
   const toggleHidden = useOrdersStore((state) => state.toggleHidden);

   const handleClickClose = () => {
      if (windowSize.width && windowSize.width <= 900) {
         toggleHidden();
      }
   };

   return (
      <Link href={link} className={styles.item} onClick={handleClickClose}>
         <button
            className={clsx(styles.item__top, {
               [styles.item__top_active]:
                  link === pathname || routes.some((el) => pathname.includes(el)),
            })}>
            <span className={styles.item__icon}>
               <Icon />
            </span>
            <h3 className={styles.item__title}>{title}</h3>
         </button>
      </Link>
   );
};

export default AdminItem;
