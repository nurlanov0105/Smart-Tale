"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useGetCommonUserAds } from "@/widgets/user/cardsSection";
import { SliderCards } from "@/widgets/user/sliderCards";
import { Chat } from "@/features/user/chat";
import { CardSlider } from "@/features/general/cardSlider";
import { AnnouncementRoutes } from "@/widgets/general/cardModal";
import { CardCategory } from "@/features/general/cardCategory";
import { ISize, useFetchResource } from "@/features/user/standartCard";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { Button, CommonSkeleton, GlobalLoading } from "@/shared/ui";
import {
   AnnouncementTypes,
   CookiesServices,
   EnumTokens,
   MODAL_KEYS,
   OrdersService,
   SkeletonTypes,
   images,
   useAnnouncementType,
   useAuth,
} from "@/shared/lib";

import styles from "./styles.module.scss";
import { useLikeEquipment, useLikeOrder, useLikeService } from "@/entities/general/likeButton";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { showModal } from "@/views/modal";

const CardDetail = () => {
   const [selectedCategory, setSelectedCategory] = useState("Описание");
   const { type, slug } = useAnnouncementType();
   const author = CookiesServices.getCookiesValue(EnumTokens.CARD_AUTHOR);
   const currentUser = useSubscribeStore((state) => state.data);
   const { isAuth } = useAuth();

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

   const { mutate: likeEquipment, isPending: likeEquipmentLoading } = useLikeEquipment(slug, type);
   const { mutate: likeOrder, isPending: likeOrderLoading } = useLikeOrder(slug, type);
   const { mutate: likeService, isPending: likeServiceLoading } = useLikeService(slug, type);

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   const handleLikeClick = () => {
      if (isAuth) {
         if (type === AnnouncementTypes.equipment) {
            likeEquipment(slug);
         } else if (type === AnnouncementTypes.order) {
            likeOrder(slug);
         } else if (type === AnnouncementTypes.service) {
            likeService(slug);
         }
      } else {
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.authNotice });
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

   if (isError) {
      return <h3 className="h3">Упс, произошла ошибка 😅</h3>;
   }

   if (isLoading) {
      return <GlobalLoading type="full" />;
   }

   // if (currentUser?.profile.slug === data.data.author?.slug) {
   //    return redirect(AnnouncementRoutes[type] + `/${slug}`);
   // }

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
                     <h2 className="h2">{data.data.title}</h2>
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
                  </div>
               </div>
               <div className={styles.detail__right}>
                  <div className={styles.detail__header}>
                     <ModalCardHeader
                        title={data.title}
                        cost={data.data.price}
                        currency={data?.currency}
                        isLarge={true}
                     />
                  </div>

                  <div className={styles.detail__chat}>
                     <Chat author={data.data.author} />
                  </div>
                  <Button
                     classType={data.data?.is_liked ? "btnBorder_active" : "btnBorder"}
                     onClick={handleLikeClick}
                     disabled={
                        !isAuth ||
                        likeEquipmentLoading ||
                        likeOrderLoading ||
                        likeServiceLoading ||
                        currentUser?.profile.slug === data.data.author?.slug
                     }>
                     {likeEquipmentLoading || likeOrderLoading || likeServiceLoading
                        ? "Загрузка..."
                        : data.data?.is_liked
                        ? "В избранных"
                        : "В избранные"}
                  </Button>
                  {/* {type === AnnouncementTypes.equipment ? (
                     <Button onClick={handleBuy}>
                        {isbuyEquipmentLoading ? "Загрузка..." : "Купить"}
                     </Button>
                  ) : type === AnnouncementTypes.service ? (
                     <Button onClick={handleService}>Принять услугу</Button>
                  ) : (
                     <Button onClick={handleOrder}>
                        {isOrderLoading ? "Загрузка..." : "Принять заказ"}
                     </Button>
                  )} */}
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
