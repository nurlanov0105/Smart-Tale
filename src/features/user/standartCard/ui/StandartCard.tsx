"use client";

import { FC } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { BtnBordered, Button } from "@/shared/ui";
import { showModal } from "@/views/modal";

const StandartCard: FC = () => {
   const handleClick = () => {
      showModal("CardModal");
   };

   return (
      <div className={styles.card}>
         <div className={styles.card__img} />
         <div className={styles.card__body}>
            <div className={styles.card__order}>
               <h4 className={clsx(styles.card__title, styles.card__title_order)}>Заказ №5</h4>
               <h4 className={clsx(styles.card__title, styles.card__title_cost)}>1000 сом</h4>
            </div>
            <div className={styles.card__author}>
               <div className={styles.card__avatar} />
               <div className={styles.card__col}>
                  <h5 className={styles.card__name}>Sandy Wilder Cheng</h5>
                  <div className={styles.card__notice}>Автор объявления</div>
               </div>
            </div>
            <div className={styles.card__descr}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quis rerum
               molestias delectus est magnam, perspiciatis odit reiciendis enim pariatur.
            </div>
            <BtnBordered className="btn-bordered__card" onClick={handleClick}>
               Подробнее
            </BtnBordered>
         </div>
      </div>
   );
};

export default StandartCard;
