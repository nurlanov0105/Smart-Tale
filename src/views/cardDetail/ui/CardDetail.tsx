"use client";

import React, { useState } from "react";
import { SliderCards } from "@/widgets/user/sliderCards";
import { Chat } from "@/widgets/user/chat";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { CardCategory } from "@/features/general/cardCategory";
import { ISize, useFetchResource } from "@/features/user/standartCard";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { BtnBordered, CommonSkeleton, GlobalLoading } from "@/shared/ui";
import { SkeletonTypes, images, useAnnouncementType } from "@/shared/lib";

import styles from "./styles.module.scss";

const CardDetail = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");
   const { type, slug } = useAnnouncementType();
   const { isError, isPending: isLoading, data } = useFetchResource({ type, slug, isDetail: true });

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   if (isError) {
      return <h3 className="h3">Упс, произошла ошибка 😅</h3>;
   }

   if (isLoading) {
      return <GlobalLoading type="full" />;
   }

   const categoryData = (selectedCategory: string) => {
      if (selectedCategory === "Описание") {
         return <p>{data.data.description}</p>;
      } else if (selectedCategory === "Контакты автора") {
         return (
            <ul>
               <li>
                  Номер телефона: {data.data.phone_number ? data.data.phone_number : "Отсутствует"}
               </li>
               <li>Почта: {data.data.email ? data.data.email : "Отсутствует"}</li>
            </ul>
         );
      } else {
         return (
            <ul className={styles.modal__list}>
               {data.data?.size?.map((item: ISize, i: number) => (
                  <li key={i}>{item.size}</li>
               ))}
            </ul>
         );
      }
   };

   return (
      <div className={styles.detailWrapper}>
         <div className={styles.detail}>
            <div className={styles.detail__left}>
               <CardSlider
                  images={(!isError && !isLoading && data.data.images) || images}
                  isLarge={true}
                  isLoading={isLoading}
               />

               <div className={styles.detail__content}>
                  <AuthorInfo
                     fullName={data.data.author?.first_name + " " + data.data.author?.last_name}
                     avatarImg={data.data.author?.profile_image}
                     isLarge={true}
                     slug={data.data.author?.slug}
                  />
                  <div className={styles.detail__category}>
                     <CardCategory
                        handleCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                        isLarge={true}
                        type={type}
                     />

                     {isLoading ? (
                        <div className={styles.detail__descr}>
                           <CommonSkeleton type="authorText" />
                        </div>
                     ) : (
                        <div className={styles.detail__descr}>{categoryData(selectedCategory)}</div>
                     )}
                  </div>
               </div>
            </div>
            <div className={styles.detail__right}>
               <div className={styles.detail__header}>
                  <ModalCardHeader
                     title={data.title}
                     cost={`${Math.round(data.data.price)}`}
                     isLarge={true}
                  />
               </div>

               <div className={styles.detail__chat}>
                  <Chat author={data.data.author} />
               </div>
               <BtnBordered>В избранные</BtnBordered>
            </div>
         </div>
         <SliderCards
            data={(!isError && !isLoading && data.data.images) || images}
            type={SkeletonTypes.standart}
            isLoading={isLoading}
         />
      </div>
   );
};

export default CardDetail;
