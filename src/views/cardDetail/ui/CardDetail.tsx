"use client";

import React, { useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import { Chat } from "@/widgets/user/chat";
import { BtnBordered, CommonSkeleton, GlobalLoading } from "@/shared/ui";
import { SliderCards } from "@/widgets/user/sliderCards";

import { ROUTES, SkeletonTypes, images } from "@/shared/lib";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useFetchResource, usePathStore } from "@/features/user/standartCard";
import { Loader } from "lucide-react";

const CardDetail = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");
   const pathname = usePathStore((state) => state.pathname);
   const slug = usePathStore((state) => state.slug);

   const { isError, isPending: isLoading, data } = useFetchResource(pathname, slug);

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   if (isError) {
      return <h3 className="h3">Упс, произошла ошибка 😅</h3>;
   }

   if (isLoading) {
      return <GlobalLoading type="full" />;
   }

   return (
      <div className={styles.detailWrapper}>
         <div className={styles.detail}>
            <div className={styles.detail__left}>
               <CardSlider
                  images={(!isError && !isLoading && data.images) || images}
                  isLarge={true}
                  isLoading={isLoading}
               />

               <div className={styles.detail__content}>
                  <AuthorInfo
                     fullName={data.author?.first_name + " " + data.author?.last_name}
                     avatarImg={data.author?.profile_image}
                     isLarge={true}
                  />
                  <div className={styles.detail__category}>
                     <CardCategory
                        handleCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                        isLarge={true}
                     />

                     {isLoading ? (
                        <div className={styles.detail__descr}>
                           <CommonSkeleton type="authorText" />
                        </div>
                     ) : (
                        <div className={styles.detail__descr}>{data.description}</div>
                     )}
                  </div>
               </div>
            </div>
            <div className={styles.detail__right}>
               <div className={styles.detail__header}>
                  <ModalCardHeader
                     title={data.title}
                     cost={`${Math.round(data.price)}`}
                     isLarge={true}
                  />
               </div>

               <div className={styles.detail__chat}>
                  <Chat author={data.author} />
               </div>
               <BtnBordered>В избранные</BtnBordered>
            </div>
         </div>
         <SliderCards
            data={(!isError && !isLoading && data.images) || images}
            type={SkeletonTypes.standart}
            isLoading={isLoading}
         />
      </div>
   );
};

export default CardDetail;
