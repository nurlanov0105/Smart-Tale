"use client";

import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import { Button } from "@/shared/ui";
import { DASHBOARD, ROUTES } from "@/shared/lib";
import Link from "next/link";
import { closeModal } from "@/views/modal";
import { images } from "@/shared/lib";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";

const CardModal: FC = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");
   const theme = useThemeStore((state) => state.theme);

   const pathname = usePathname();

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <div className={clsx(styles.modal, styles[theme])}>
         <div className={styles.modal__slider}>
            <CardSlider images={images} isLoading={false} isError={false} />
         </div>
         <div className={styles.modal__body}>
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
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
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
         </div>
      </div>
   );
};

export default CardModal;
