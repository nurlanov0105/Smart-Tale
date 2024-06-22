import React, { FC } from "react";
import Image from "next/image";
import { ItemProps } from "../model/types";
import { useRouter } from "next/navigation";
import cardImage from "@@/imgs/order/equipment.png";
import clsx from "clsx";
import styles from "./styles.module.scss";

import { orderValues } from "@/entities/general/orderItem/model/value.data";
import { useThemeStore } from "@/shared/store/themeStore";
import {boardHeadings} from "@/features/user/boardColumn/model/consts";
import {PriceFormat} from "@/shared/ui";
import {ROUTES} from "@/shared/lib";

const OrderItem: FC<ItemProps> = ({ item, isCurrent, isOrganization }) => {
   const theme = useThemeStore((state) => state.theme);

   const title = orderValues[item.type];

   const router = useRouter();
   const handleItemClick = () => {
      if (isOrganization) {
         router.push(ROUTES.ORGANIZATION_ANNOUNCEMENT_DETAILS + `/${item.slug}`);
      } else if (item.type === "Order") {
         router.push(ROUTES.CARD_DETAILS_ORDER + `/${item.slug}`);
      } else if (item.type === "Equipment") {
         router.push(ROUTES.CARD_DETAILS_EQUIPMENT + `/${item.slug}`);
      } else {
         router.push(ROUTES.CARD_DETAILS_SERVICE + `/${item.slug}`);
      }
   };

   const status = boardHeadings[item?.status as keyof typeof boardHeadings]

   return (
      <>
         {item.type === "Equipment" && (
             <div onClick={handleItemClick} className={clsx(styles.item, styles[theme])}>
                <div className={styles.item__left}>
                   <Image
                       className={styles.item__image}
                       src={item.image || cardImage}
                       alt="card"
                       width={75}
                       height={75}
                   />
                   <div className={styles.item__info}>
                      <p className={clsx(styles.item__subtitle, styles.item__subtitle_green)}>
                         {title}
                      </p>
                      <h6 className={styles.item__title}>{item.title}</h6>
                      <p className={styles.item__text}>{item.description}</p>
                   </div>
                </div>
                {/*<p className={styles.item__detail}>Посмотреть детали</p>*/}
                <p className={styles.item__price}>
                   <PriceFormat type={item?.currency} price={+item?.price}/>
                </p>
                <span className={styles.item__date}>2 апреля 2024</span>
             </div>
         )}
         {item.type === "Order" && (
             <div onClick={handleItemClick} className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={item.image || cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p className={styles.item__subtitle}>Заказ</p>
                     <h6 className={styles.item__title}>{item.title}</h6>
                     <p className={styles.item__text}>{item.description}</p>
                  </div>
               </div>
               <span className={styles.item__date}>2 апреля 2024</span>
                <p style={{
                   backgroundColor: isCurrent && status?.light && status[theme]
                }} className={styles.item__status}>{isCurrent && status?.name}</p>
                {!isCurrent && <p className={styles.item__price}>
                   <PriceFormat type={item?.currency} price={+item?.price}/>
                </p>}

            </div>
         )}
         {item.type === "Service" && (
            <div onClick={handleItemClick} className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p className={clsx(styles.item__subtitle, styles.item__subtitle_primary)}>
                        Услуга
                     </p>
                     <h6 className={styles.item__title}>{item.title}</h6>
                     <p className={styles.item__text}>{item.description}</p>
                  </div>
               </div>
               <div className={styles.item__box}>
                  {/*<p className={styles.item__status}>{isCurrent && item.status}</p>*/}
                  {/*{!isCurrent && <p className={styles.item__detail}>Посмотреть детали</p>}*/}
                  <p className={styles.item__price}>
                     <PriceFormat type={item?.currency} price={+item?.price}/>
                  </p>
                  <span className={styles.item__date}>2 апреля 2024</span>
                  {status?.name && (
                     <p
                        style={{
                           backgroundColor: status?.light && status[theme],
                        }}
                        className={styles.item__status}>
                        {status?.name}
                     </p>
                  )}
                  {!isCurrent && <p className={styles.item__detail}>Посмотреть детали</p>}
               </div>
            </div>
         )}
      </>
   );
};
export default OrderItem;
