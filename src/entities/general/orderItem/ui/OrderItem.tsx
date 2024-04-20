import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ItemProps } from "../model/types";
import { DASHBOARD, ROUTES } from "@/shared/lib";

import cardImage from "@@/imgs/order/equipment.png";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const OrderItem: FC<ItemProps> = ({ item, itemType, isAdmin }) => {
   //isAdmin для перехода на детальную страницу в админке
   return (
      <>
         {itemType === "equipment" && (
            <Link href={ROUTES.ORDER_DETAILS + "/orderName"} className={styles.item}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p
                        className={clsx(styles.item__subtitle, {
                           [styles.item__subtitle_green]: item.type === "equipment",
                        })}>
                        {item.type === "equipment" ? "Оборудование" : "Заказ"}
                     </p>

                     <h6 className={styles.item__title}>Швейная машинка</h6>
                     <p className={styles.item__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt...
                     </p>
                  </div>
               </div>
               <p className={styles.item__detail}>Посмотреть детали</p>
               <span className={styles.item__date}>2 апреля 2024</span>
            </Link>
         )}

         {itemType === "order" && (
            <Link href={ROUTES.ORDER_DETAILS + "/orderName"} className={styles.item}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p className={styles.item__subtitle}>Заказ №234</p>
                     <h6 className={styles.item__title}>Сшить костюм</h6>
                     <p className={styles.item__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt...
                     </p>
                  </div>
               </div>
               <p className={styles.item__detail}>Посмотреть детали</p>
               <span className={styles.item__date}>2 апреля 2024</span>
            </Link>
         )}

         {/*{*/}
         {/*    itemType === "order" &&*/}
         {/*    <Link href={DASHBOARD.ORDER_DETAIL} className={styles.item}>*/}
         {/*       <div className={styles.item__left}>*/}
         {/*          <Image*/}
         {/*              className={styles.item__image}*/}
         {/*              src={cardImage}*/}
         {/*              alt="card"*/}
         {/*              width={75}*/}
         {/*              height={75}*/}
         {/*          />*/}
         {/*          <div className={styles.item__info}>*/}
         {/*             <p className={styles.item__subtitle}>Заказ №234</p>*/}
         {/*             <h6 className={styles.item__title}>Сшить костюм</h6>*/}
         {/*             <p className={styles.item__text}>*/}
         {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
         {/*                incididunt...*/}
         {/*             </p>*/}
         {/*          </div>*/}
         {/*       </div>*/}
         {/*       <p className={styles.item__price}>1000 сом</p>*/}
         {/*    </Link>*/}

         {/*}*/}
         {/*{*/}
         {/*    itemType === "my-order" &&*/}
         {/*    <Link href={DASHBOARD.ORDER_DETAIL} className={styles.item}>*/}
         {/*       <div className={styles.item__left}>*/}
         {/*          <Image*/}
         {/*              className={styles.item__image}*/}
         {/*              src={cardImage}*/}
         {/*              alt="card"*/}
         {/*              width={75}*/}
         {/*              height={75}*/}
         {/*          />*/}
         {/*          <div className={styles.item__info}>*/}
         {/*             <p className={clsx(styles.item__subtitle)}>Заказ</p>*/}
         {/*             <h6 className={styles.item__title}>Швейная машинка</h6>*/}
         {/*             <p className={styles.item__text}>*/}
         {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
         {/*                incididunt...*/}
         {/*             </p>*/}
         {/*          </div>*/}
         {/*       </div>*/}
         {/*       <p className={styles.item__detail}>Посмотреть детали</p>*/}
         {/*       <span className={styles.item__date}>2 апреля 2024</span>*/}
         {/*    </Link>*/}
         {/*}*/}
      </>
   );
};

export default OrderItem;

//
// const OrderItem: FC<ItemProps> = ({ id, type, itemType, isDetail, historyType }) => {
//    const pathname = usePathname();

//    // const href = pathname === DASHBOARD.LISTINGS ? DASHBOARD.MY_ORDER_DETAIL : ROUTES.ORDER_DETAILS;

//    return (
//       <Link href={ROUTES.ORDER_DETAILS + "/orderName"} className={styles.item}>
//          <div className={styles.item__left}>
//             <Image
//                className={styles.item__image}
//                src={cardImage}
//                alt="card"
//                width={75}
//                height={75}
//             />
//             <div className={styles.item__info}>
//                {itemType === "order" ? (
//                   <p className={clsx(styles.item__subtitle)}>Заказ №234</p>
//                ) : itemType === "equipment" ? (
//                   <p className={clsx(styles.item__subtitle, styles.item__subtitle_green)}>
//                      Оборудование
//                   </p>
//                ) : itemType === "current" || "completed" ? (
//                   <p className={clsx(styles.item__subtitle)}>2000 сом</p>
//                ) : (
//                   <p
//                      className={clsx(
//                         styles.item__subtitle,
//                         type === "order" ? styles.item__subtitle_green : ""
//                      )}>
//                      {type === "order" ? "Заказ" : "Оборудование"}
//                   </p>
//                )}
//                <h6 className={styles.item__title}>Сшить костюм</h6>
//                <p className={styles.item__text}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                   incididunt...
//                </p>
//             </div>
//          </div>
//          {itemType === "order" && !isDetail ? (
//             <p className={styles.item__price}>1000 сом</p>
//          ) : (
//             <p className={styles.item__detail}>Посмотреть детали</p>
//          )}
//          {itemType === "current" || "completed" ? (
//             <span className={styles.item__date}>2 апреля 2024</span>
//          ) : (
//             ""
//          )}
//       </Link>
//
