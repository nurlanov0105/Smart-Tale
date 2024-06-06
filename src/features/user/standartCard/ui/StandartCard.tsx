"use client";

import { FC } from "react";
import { Button } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { CookiesServices, EnglishType, EnumTokens, MODAL_KEYS, ROUTES } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useThemeStore } from "@/shared/store/themeStore";
import { StandartCardType } from "../model/types";

const StandartCard: FC<StandartCardType> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);

   const handleClick = () => {
      showModal(MODAL_KEYS.card, {
         slug: item.slug,
         type: EnglishType[item.type],
      });

      CookiesServices.setToken({ keyName: EnumTokens.CARD_AUTHOR, value: item.author?.slug });
   };

   if (!item) {
      return <h3 className="h3">Упс, нету данных 😅</h3>;
   }

   return (
      <div className={clsx(styles.card, styles[theme])}>
         <div className={styles.card__img} style={{ backgroundImage: `url(${item.image})` }} />
         <div className={styles.card__body}>
            <div className={styles.card__order}>
               <h4 className={clsx(styles.card__title, styles.card__title_order)}>{item.title}</h4>
               <h4 className={clsx(styles.card__title, styles.card__title_cost)}>
                  {Math.round(Number(item.price))} сом
               </h4>
            </div>
            {item?.author && (
               <Link href={ROUTES.USERS + `/${item.author?.slug}`} className={styles.card__author}>
                  <div
                     className={styles.card__avatar}
                     style={{
                        backgroundImage: `url(${
                           item.author?.profile_image ? item.author?.profile_image : ""
                        })`,
                     }}
                  />
                  <div className={styles.card__col}>
                     <h5 className={styles.card__name}>
                        {item.author?.first_name + " " + item.author?.last_name}
                     </h5>
                     <div className={styles.card__notice}>Автор объявления</div>
                  </div>
               </Link>
            )}
            <div className={styles.card__descr}>{item.description}</div>

            <div className={styles.card__btn}>
               <Button classType="btnBorder_card" onClick={handleClick}>
                  Подробнее
               </Button>
            </div>
         </div>
      </div>
   );
};

export default StandartCard;
