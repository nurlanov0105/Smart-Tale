"use client";

import React, { useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import { Chat } from "@/widgets/user/chat";
import { BtnBordered } from "@/shared/ui";

import { images } from "@/shared/lib";
import styles from "./styles.module.scss";

const CardDetail = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <div className={styles.detail}>
         <div className={styles.detail__left}>
            <CardSlider images={images} isLarge={true} />
            <div className={styles.detail__content}>
               <AuthorInfo fullName="Sandy Wilder Cheng" avatarImg="" isLarge={true} />
               <div className={styles.detail__category}>
                  <CardCategory
                     handleCategoryClick={handleCategoryClick}
                     selectedCategory={selectedCategory}
                     isLarge={true}
                  />

                  <div className={styles.detail__descr}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit qui quidem
                     repudiandae quasi, quos et accusamus voluptate at libero eos tenetur officia
                     fuga dolorem doloremque. Eum repudiandae hic quaerat!
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.detail__right}>
            <ModalCardHeader
               title="Профессиональные спицы для вязания"
               cost="1000"
               isLarge={true}
            />

            <div className={styles.detail__chat}>
               <Chat />
            </div>
            <BtnBordered>В избранные</BtnBordered>
         </div>
      </div>
   );
};

export default CardDetail;
