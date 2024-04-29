"use client";

import React, { useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import { Chat } from "@/widgets/user/chat";
import { BtnBordered } from "@/shared/ui";
import { SliderCards } from "@/widgets/user/sliderCards";

import { ROUTES, SkeletonTypes, images } from "@/shared/lib";
import styles from "./styles.module.scss";
import Link from "next/link";

const CardDetail = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <div className={styles.detailWrapper}>
         <div className={styles.detail}>
            <div className={styles.detail__left}>
               <CardSlider images={images} isLarge={true} />
               <div className={styles.detail__content}>
                  <Link href={ROUTES.CARD_DETAILS + "/authorName"}>
                     <AuthorInfo fullName="Sandy Wilder Cheng" avatarImg="" isLarge={true} />
                  </Link>
                  <div className={styles.detail__category}>
                     <CardCategory
                        handleCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                        isLarge={true}
                     />

                     <div className={styles.detail__descr}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit qui
                        quidem repudiandae quasi, quos et accusamus voluptate at libero eos tenetur
                        officia fuga dolorem doloremque. Eum repudiandae hic quaerat!
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.detail__right}>
               <div className={styles.detail__header}>
                  <ModalCardHeader
                     title="Профессиональные спицы для вязания"
                     cost="1000"
                     isLarge={true}
                  />
               </div>

               <div className={styles.detail__chat}>
                  <Chat />
               </div>
               <BtnBordered>В избранные</BtnBordered>
            </div>
         </div>
         <SliderCards
            data={[...Array(8)]}
            type={SkeletonTypes.standart}
            isLoading={false}
            isError={false}
         />
      </div>
   );
};

export default CardDetail;
