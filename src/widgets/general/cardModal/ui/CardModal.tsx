"use client";

import { FC, useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import {Button, GlobalLoading} from "@/shared/ui";
import { DASHBOARD, ROUTES } from "@/shared/lib";
import Link from "next/link";
import { closeModal } from "@/views/modal";
import { images } from "@/shared/lib";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";
import { useFetchResource, usePathStore } from "@/features/user/standartCard";
import { useQuery } from "@tanstack/react-query";
import { baseApiInstance } from "@/shared/api/instance";
import { EquipmentsEndpoints } from "@/shared/api";

const CardModal: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");
   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   const pathname = usePathStore((state) => state.pathname);
   const slug = usePathStore((state) => state.slug);

   const { isPending, isError, data } = useFetchResource();

   return (
      <div className={clsx(styles.modal, styles[theme])}>
         <div className={styles.modal__slider}>
            <CardSlider
               images={!isError && !isPending && data.images}
               isLoading={isPending}
               isError={isError}
            />
         </div>
         <div className={styles.modal__body}>
            {isError ? (
               <h3 className="h3">Упс, произошла ошибка</h3>
            ) : isPending ? (
               <GlobalLoading type="default"/>
            ) : (
               <>
                  <div className={styles.modal__header}>
                     <ModalCardHeader title="Профессиональные спицы для вязания" cost="1000" />
                  </div>
                  <div className={styles.modal__info}>
                     <AuthorInfo fullName="Sandy Wilder Cheng" avatarImg="" />

                     <div className={styles.modal__category}>
                        <CardCategory
                           handleCategoryClick={handleCategoryClick}
                           selectedCategory={selectedCategory}
                           isMobile={true}
                        />
                        <div className={styles.modal__descr}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                           commodo consequat
                        </div>
                     </div>
                     <div className={styles.modal__btns}>
                        {!pathname.includes("admin") &&
                           (pathname === DASHBOARD.PURCHASES ? (
                              <Link
                                 onClick={closeModal}
                                 href={ROUTES.CARD_DETAILS + "/detailCardName"}
                                 className={styles.modal__btn}>
                                 Подробнее
                              </Link>
                           ) : (
                              <>
                                 <Button>Принять заказ</Button>
                                 <Link
                                    onClick={closeModal}
                                    href={ROUTES.CARD_DETAILS + "/detailCardName"}
                                    className={styles.modal__btn}>
                                    Подробнее
                                 </Link>
                              </>
                           ))}
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default CardModal;
