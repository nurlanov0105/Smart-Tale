"use client";

import { FC } from "react";
import Image from "next/image";

import commerceBox from "@@/imgs/commerce/01.png";
import { Button } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { MODAL_KEYS, ROUTES } from "@/shared/lib";
import type { Props } from "../model/types";

import checkIcon from "@@/imgs/commerce/check.svg";
import styles from "./styles.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

const SubscribeCommerce: FC<Props> = ({ isSubscribed = false }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <>
         {!isSubscribed ? (
            <div className={clsx(styles.commerce, styles[theme])}>
               <div className={styles.commerce__box}>
                  <Image src={commerceBox} alt="commercial box" />
                  <div className={styles.commerce__text}>
                     <p>Оформите подписку, чтобы получить больше возможностей</p>
                     <p>С вами свяжется наш администратор 😉</p>
                  </div>
               </div>
               <Link href={ROUTES.SUBSCRIBE}>
                  <Button classType="btn_white">Оформить подписку</Button>
               </Link>
            </div>
         ) : (
            <div className={clsx(styles.box, styles[theme])}>
               <Image src={checkIcon} alt="check icon" width={20} height={20} />
               <div className={styles.box__col}>
                  <h4>Подписка оформлена</h4>
                  <p>Срок: до 1 августа 2024</p>
               </div>
            </div>
         )}
      </>
   );
};
export default SubscribeCommerce;
