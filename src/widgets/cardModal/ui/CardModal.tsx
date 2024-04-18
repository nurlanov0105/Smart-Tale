"use client";

import { FC, useState } from "react";
import { CardSlider } from "@/features/cardSlider";
import styles from "./styles.module.scss";
import { ModalCardHeader } from "@/entities/modalCardHeader";
import { AuthorInfo } from "@/entities/authorInfo";
import { CardCategory } from "@/features/cardCategory";
import { Button } from "@/shared/ui";

const CardModal: FC = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <div className={styles.modal}>
         <CardSlider images={[...Array(5)]} />
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
                  />
                  <div className={styles.modal__descr}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </div>
               </div>
               <Button>Принять заказ</Button>
            </div>
         </div>
      </div>
   );
};

export default CardModal;
