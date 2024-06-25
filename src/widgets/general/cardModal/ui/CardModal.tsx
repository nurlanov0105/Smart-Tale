"use client";

import { FC, useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";

import { CardCategory } from "@/features/general/cardCategory";
import { Chat } from "@/features/user/chat";
import { CardButtons } from "@/features/general/cardButtons";
import { ISize, useFetchResource } from "@/features/user/standartCard";
import { GlobalLoading } from "@/shared/ui";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { images, useGetDates } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import { AnnouncementTypes } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { monthsForDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";
import { RIGHT_ACTIONS } from "@/shared/lib/constants/consts";

type Props = {
   slug: string;
   type: string;
};

const CardModal: FC<Props> = ({ slug, type }) => {
   const theme = useThemeStore((state) => state.theme);
   const [showChat, setShowChat] = useState<boolean>(false);

   const { isPending, isError, data, isSuccess } = useFetchResource({ type, slug });

   const { day, month, year } = useGetDates(data?.data?.deadline);
   const monthFormat = monthsForDate()[month]?.value;

   const [selectedCategory, setSelectedCategory] = useState("Описание");
   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   const handleShowChat = () => {
      setShowChat((prev) => !prev);
   };

   const categoryData = (selectedCategory: string) => {
      if (selectedCategory === "Описание") {
         return <p>{data.data.description}</p>;
      }

      if (selectedCategory === "Контакты автора") {
         return (
            <ul>
               <li>
                  Номер телефона: {data.data.phone_number ? data.data.phone_number : "Отсутствует"}
               </li>
               <li>Почта: {data.data.email ? data.data.email : "Отсутствует"}</li>
            </ul>
         );
      }

      return (
         <ul className={styles.modal__list}>
            {data.data.size.map((item: ISize, i: number) => (
               <li key={i}>{item.size}</li>
            ))}
         </ul>
      );
   };

   if (!isPending && !data?.data) {
      return <ErrorMessage />;
   }

   // if (isError){
   //    return <ErrorMessage />;
   // }

   return (
      <div className={clsx(styles.modal, styles[theme])}>
         <div className={styles.modal__slider}>
            {!isError && (
               <CardSlider
                  images={(!isError && !isPending && data?.data?.images) || images}
                  isLoading={isPending}
               />
            )}
         </div>
         <div className={clsx(styles.modal__body, isPending && styles.modal_loading)}>
            {isError && <h3 className="h3">Упс, произошла ошибка</h3>}
            {isPending && <GlobalLoading type="default" />}
            {isSuccess && (
               <>
                  <div className={styles.modal__header}>
                     <ModalCardHeader
                        title={data.data.title}
                        cost={`${Math.round(Number(data.data.price))}`}
                        type={type}
                        deadline={`${day} ${monthFormat} ${year}`}
                     />
                  </div>

                  <div className={styles.modal__info}>
                     <div className={clsx(showChat && styles.modal__inner)}>
                        {showChat && (
                           <button type="button" onClick={handleShowChat}>
                              Назад
                           </button>
                        )}
                        <AuthorInfo
                           fullName={
                              data.data.author?.first_name + " " + data.data.author?.last_name
                           }
                           avatarImg={data.data.author?.profile_image}
                           slug={data.data.author?.slug}
                        />
                     </div>
                     {showChat && <Chat author={data.data.author} isModal={true} />}
                     {!showChat && (
                        <>
                           <div className={styles.modal__category}>
                              <CardCategory
                                 handleCategoryClick={handleCategoryClick}
                                 selectedCategory={selectedCategory}
                                 isMobile={true}
                                 type={type}
                              />
                              <div className={styles.modal__descr}>
                                 {categoryData(selectedCategory)}
                              </div>
                              {type === AnnouncementTypes.equipment && (
                                 <b>В наличие: {data?.data?.quantity}</b>
                              )}
                           </div>

                           <CardButtons
                              authorSlug={data?.data?.author?.slug}
                              isApplied={data?.data?.is_applied}
                              handleShowChat={handleShowChat}
                              type={type}
                              slug={slug}
                           />
                        </>
                     )}
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default CardModal;
