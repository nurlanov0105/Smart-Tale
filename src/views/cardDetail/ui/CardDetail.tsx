"use client";

import React, { useState } from "react";
import { useGetCommonUserAds } from "@/widgets/user/cardsSection";
import { SliderCards } from "@/widgets/user/sliderCards";
import { Chat } from "@/widgets/user/chat";
import { CardSlider } from "@/features/general/cardSlider";
import { useBuyEquipment, useOrderApply } from "@/widgets/general/cardModal";
import { CardCategory } from "@/features/general/cardCategory";
import {
   ISize,
   useFetchResource,
   useLikeEquipment,
   useLikeOrder,
   useLikeService,
} from "@/features/user/standartCard";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { Button, CommonSkeleton, GlobalLoading } from "@/shared/ui";
import {
   AnnouncementTypes,
   CookiesServices,
   EnumTokens,
   OrdersService,
   SkeletonTypes,
   images,
   useAnnouncementType,
} from "@/shared/lib";

import styles from "./styles.module.scss";
import { FeedbackList } from "@/widgets/general/feedbackList";

const CardDetail = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");
   const { type, slug } = useAnnouncementType();
   const author = CookiesServices.getCookiesValue(EnumTokens.CARD_AUTHOR);
   const {
      isError,
      isPending: isLoading,
      isSuccess,
      data,
   } = useFetchResource({ type, slug, isDetail: true });

   const {
      isError: isAdsError,
      isPending: isAdsLoading,
      data: isAdsData,
   } = useGetCommonUserAds({ slug: author || "", page: 1, param_tab: "all" });

   const { mutate: buyEquipment, isPending: isbuyEquipmentLoading } = useBuyEquipment();
   const { mutate: orderApply, isPending: isOrderLoading } = useOrderApply();
   const { mutate: likeEquipment, isPending: likeEquipmentLoading } = useLikeEquipment(slug);
   const { mutate: likeOrder, isPending: likeOrderLoading } = useLikeOrder(slug);
   const { mutate: likeService, isPending: likeServiceLoading } = useLikeService(slug);

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   if (isError) {
      return <h3 className="h3">Упс, произошла ошибка 😅</h3>;
   }

   if (isLoading) {
      return <GlobalLoading type="full" />;
   }

   const handleBuy = () => {
      buyEquipment(slug);
   };

   const handleService = () => {};

   const handleOrder = () => {
      orderApply(slug);
   };

   const handleLikeClick = () => {
      if (type === "equipment") {
         likeEquipment(slug);
      } else if (type === "order") {
         likeOrder(slug);
      } else if (type === "service") {
         likeService(slug);
      }
   };

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
         {isError ? (
            <ErrorMessage />
         ) : (
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
                           <div className={styles.detail__descr}>
                              {categoryData(selectedCategory)}
                           </div>
                        )}
                     </div>
                     {type === "order" && isSuccess && <FeedbackList slug={data.data.slug} />}
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
                  {type === AnnouncementTypes.equipment ? (
                     <Button onClick={handleBuy}>
                        {isbuyEquipmentLoading ? "Загрузка..." : "Купить"}
                     </Button>
                  ) : type === AnnouncementTypes.service ? (
                     <Button onClick={handleService}>Принять услугу</Button>
                  ) : (
                     <Button onClick={handleOrder}>
                        {isOrderLoading ? "Загрузка..." : "Принять заказ"}
                     </Button>
                  )}
                  <Button classType="btnBorder" onClick={handleLikeClick}>
                     {likeEquipmentLoading || likeOrderLoading || likeServiceLoading
                        ? "Загрузка..."
                        : "В избранные"}
                  </Button>
               </div>
            </div>
         )}

         <SliderCards
            data={
               (!isError && !isAdsError && !isLoading && !isAdsLoading && isAdsData.data) || images
            }
            type={SkeletonTypes.standart}
            isLoading={isLoading || isAdsLoading}
         />
      </div>
   );
};

export default CardDetail;
