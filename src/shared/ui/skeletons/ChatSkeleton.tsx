"use client";

import React, { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

const ChatSkeleton: FC<{ type?: string }> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <div className={styles.chat}>
         <div className={styles.chat__content}>
            <div className={styles.chat__left}>
               <div className={styles.chat__left__btns}>
                  <span className={clsx(styles.card, styles.chat__left__btn)}></span>
                  <span className={clsx(styles.card, styles.chat__left__btn)}></span>
               </div>
               <div className={styles.chat__left__content}>
                  <div className={styles.chat__left__itemWrapper}>
                     {[...Array(9)].map((_, idx) => (
                        <div key={idx} className={styles.chat__left__item}>
                           <div className={styles.chat__left__item__leftBar}>
                              <span
                                 className={clsx(
                                    styles.card,
                                    styles.chat__left__item__leftBar__avatar
                                 )}></span>
                              <div className={styles.chat__left__item__content}>
                                 <span
                                    className={clsx(
                                       styles.card,
                                       styles.chat__left__item__content__top
                                    )}></span>
                                 <span
                                    className={clsx(
                                       styles.card,
                                       styles.chat__left__item__content__bottom
                                    )}></span>
                              </div>
                              <span
                                 className={clsx(
                                    styles.card,
                                    styles.chat__left__item__content__image
                                 )}></span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className={styles.chat__right}>
               <div className={styles.chat__header}>
                  <div className={styles.chat__header__top}>
                     <div className={styles.chat__header__leftBar}>
                        <span className={clsx(styles.card, styles.chat__avatar)}></span>
                        <div className={styles.chat__left__item__content}>
                           <span
                              className={clsx(styles.card, styles.chat__header__top__top)}></span>
                           <span
                              className={clsx(
                                 styles.card,
                                 styles.chat__header__top__bottom
                              )}></span>
                        </div>
                        <span
                           className={clsx(
                              styles.card,
                              styles.chat__header__top__imageCircle
                           )}></span>
                     </div>
                  </div>
                  <div className={styles.chat__header__bottom}>
                     <div className={styles.chat__header__leftBar}>
                        <span className={clsx(styles.card, styles.chat__header__top__image)}></span>
                        <div className={styles.chat__left__item__content}>
                           <span
                              className={clsx(styles.card, styles.chat__header__top__line)}></span>
                        </div>
                     </div>
                     <span className={clsx(styles.card, styles.chat__header__top__bottom)}></span>
                  </div>
               </div>
               <div className={styles.chat__bottom}>
                  <div className={styles.chat__chatList}>
                     <span
                        className={clsx(
                           styles.card,
                           styles.chat__user,
                           styles.chat__chatList__big
                        )}></span>
                     <span
                        className={clsx(
                           styles.card,
                           styles.chat__me,
                           styles.chat__chatList__small
                        )}></span>
                     <span
                        className={clsx(
                           styles.card,
                           styles.chat__user,
                           styles.chat__chatList__small
                        )}></span>
                     <span
                        className={clsx(
                           styles.card,
                           styles.chat__me,
                           styles.chat__chatList__big
                        )}></span>
                     <span
                        className={clsx(
                           styles.card,
                           styles.chat__user,
                           styles.chat__chatList__normal
                        )}></span>
                  </div>
                  <div className={styles.chat__footer}>
                     <span className={clsx(styles.card, styles.chat__footer__box)}></span>
                     <span className={clsx(styles.card, styles.chat__footer__input)}></span>
                     <span className={clsx(styles.card, styles.chat__footer__btn)}></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChatSkeleton;
