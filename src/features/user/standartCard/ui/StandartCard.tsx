"use client";

import { FC } from "react";
import { BtnBordered } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { MODAL_KEYS, ROUTES } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";

const StandartCard: FC = () => {
   const handleClick = () => {
      showModal(MODAL_KEYS.card);
   };

   return (
      <div className={styles.card}>
         <div className={styles.card__img} />
         <div className={styles.card__body}>
            <div className={styles.card__order}>
               <h4 className={clsx(styles.card__title, styles.card__title_order)}>Заказ №5</h4>
               <h4 className={clsx(styles.card__title, styles.card__title_cost)}>1000 сом</h4>
            </div>
            <Link href={ROUTES.USER + `/user007`} className={styles.card__author}>
               <div className={styles.card__avatar} />
               <div className={styles.card__col}>
                  <h5 className={styles.card__name}>Sandy Wilder Cheng</h5>
                  <div className={styles.card__notice}>Автор объявления</div>
               </div>
            </Link>
            <div className={styles.card__descr}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quis rerum
               molestias delectus est magnam, perspiciatis odit reiciendis enim pariatur.
            </div>
            <div className={styles.card__btnDesc}>
               <BtnBordered className="btn-bordered__card" onClick={handleClick}>
                  Подробнее
               </BtnBordered>
            </div>
            <Link href={ROUTES.CARD_DETAILS + `/card-name`} className={styles.card__btnMob}>
               <BtnBordered className="btn-bordered__card">Подробнее</BtnBordered>
            </Link>
         </div>
      </div>
   );
};

export default StandartCard;
