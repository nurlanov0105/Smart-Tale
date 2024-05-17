"use client";

import { FC } from "react";
import { BtnBordered } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { MODAL_KEYS, ROUTES } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useThemeStore } from "@/shared/themeStore";
import { StandartCardType } from "../model/types";

const StandartCard: FC<StandartCardType> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const handleClick = () => {
      showModal(MODAL_KEYS.card);
   };

   return (
      <div className={clsx(styles.card, styles[theme])}>
         <div className={styles.card__img} />
         <div className={styles.card__body}>
            <div className={styles.card__order}>
               {/* {item.slug} */}
               <h4 className={clsx(styles.card__title, styles.card__title_order)}>Заказ №122</h4>
               <h4 className={clsx(styles.card__title, styles.card__title_cost)}>
                  {/* {item.price} */}
                  1000 сом
               </h4>
            </div>
            {/* `/${item.slug}` */}
            <Link href={ROUTES.USERS + `/name`} className={styles.card__author}>
               <div
                  className={styles.card__avatar}
                  // style={{ backgroundImage: `url(${item.author.profile_image})` }}
               />
               <div className={styles.card__col}>
                  <h5 className={styles.card__name}>
                     {/* {item.author.first_name + " " + item.author.last_name} */}
                     Artur Belevich
                  </h5>
                  <div className={styles.card__notice}>Автор объявления</div>
               </div>
            </Link>
            <div className={styles.card__descr}>
               {/* {item.description} */}
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti error eveniet
               minima quod laborum et, sed quasi sunt temporibus aliquid.
            </div>
            {/* <div className={styles.card__btnDesc}> */}
            <BtnBordered className="btn-bordered__card" onClick={handleClick}>
               Подробнее
            </BtnBordered>
            {/* </div> */}
            {/* <Link href={ROUTES.CARD_DETAILS + `/card-name`} className={styles.card__btnMob}>
               <BtnBordered className="btn-bordered__card">Подробнее</BtnBordered>
            </Link> */}
         </div>
      </div>
   );
};

export default StandartCard;
