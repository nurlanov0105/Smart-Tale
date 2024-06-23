"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

import { Button } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { CookiesServices, EnglishType, EnumTokens, MODAL_KEYS, ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import { StandartCardType } from "../model/types";
import { usePathname, useRouter } from "next/navigation";
import { LikeButton } from "@/entities/general/likeButton";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

const PriceFormat = dynamic(() => import("@/shared/ui/price/PriceFormat"), { ssr: false });

const StandartCard: FC<StandartCardType> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();
   const currentUser = useSubscribeStore((state) => state.data);
   const router = useRouter();

   const handleRoute = () => {
      if (currentUser?.profile.slug === item.author?.slug) {
         return router.push(ROUTES.DASHBOARD_PROFILE);
      } else {
         router.push(ROUTES.USERS + `/${item.author?.slug}`);
      }
   };

   const handleClick = () => {
      showModal(MODAL_KEYS.card, {
         slug: item.slug,
         type: EnglishType[item.type],
      });

      if (pathname.includes(ROUTES.USERS)) {
         CookiesServices.setToken({
            keyName: EnumTokens.CARD_AUTHOR,
            value: pathname.split("/")[2],
         });
      } else {
         !pathname.includes(ROUTES.CARD_DETAILS) &&
            CookiesServices.setToken({ keyName: EnumTokens.CARD_AUTHOR, value: item.author?.slug });
      }
   };

   if (!item) {
      return <h3 className="h3">Упс, нету данных 😅</h3>;
   }

   return (
      <div className={clsx(styles.card, styles[theme])}>
         {pathname.includes(ROUTES.DASHBOARD_FAVORITES) ? (
            <div className={styles.card__btnLike}>
               <LikeButton
                  isLiked={Boolean(item.is_liked) || false}
                  slug={item.slug}
                  type={item.type}
               />
            </div>
         ) : (
            ""
         )}

         <div className={styles.card__img} style={{ backgroundImage: `url(${item.image})` }} />
         <div className={styles.card__body}>
            <div className={styles.card__order}>
               <h4 className={clsx(styles.card__title, styles.card__title_order)}>{item.title}</h4>
               <h4 className={clsx(styles.card__title, styles.card__title_cost)}>
                  <PriceFormat type={item?.currency} price={+item?.price} />
               </h4>
            </div>
            {item?.author && (
               <button onClick={handleRoute} className={styles.card__author}>
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
               </button>
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
