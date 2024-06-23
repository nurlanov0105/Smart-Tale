"use client";

import { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { closeModal, showModal } from "@/views/modal";
import { CardSlider } from "@/features/general/cardSlider";
import { CardCategory } from "@/features/general/cardCategory";
import { Chat } from "@/features/user/chat";
import { ISize, useFetchResource, usePathStore } from "@/features/user/standartCard";
import { Button, GlobalLoading } from "@/shared/ui";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { CookiesServices, EnumTokens, images, MODAL_KEYS, useGetDates } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import { AnnouncementTypes, DASHBOARD, ROUTES } from "@/shared/lib";
import { AnnouncementRoutes, CardDetailsRoutes } from "../model/consts";
import { useBuyEquipment, useOrderApply } from "../model/useQueries";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { monthsForDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";

type Props = {
   slug: string;
   type: string;
};

const CardModal: FC<Props> = ({ slug, type }) => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();
   const router = useRouter();
   const [showChat, setShowChat] = useState(false);
   const currentUser = useSubscribeStore((state) => state.data);

   const { isPending, isError, data } = useFetchResource({ type, slug });
   // const { mutate: buyEquipment, isPending: isLoading } = useBuyEquipment();
   const { mutate: orderApply, isPending: isOrderLoading } = useOrderApply();

   const { day, month, year } = useGetDates(data?.data?.deadline);
   const monthFormat = monthsForDate()[month]?.value;

   const [selectedCategory, setSelectedCategory] = useState("Описание");
   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   const handleBtnClick = () => {
      if (currentUser?.profile.slug === data.data.author?.slug) {
         router.push(AnnouncementRoutes[type] + `/${slug}`);
      } else {
      }
      router.push(CardDetailsRoutes[type] + `/${slug}`);

      closeModal();
   };

   const handleShowChat = () => {
      setShowChat((prev) => !prev);
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
               {data.data.size.map((item: ISize, i: number) => (
                  <li key={i}>{item.size}</li>
               ))}
            </ul>
         );
      }
   };

   if (!isPending && !data?.data) {
      return <ErrorMessage />;
   }

   const handleOrder = () => {
      orderApply(slug);
   };

   const handleRoute = () => {
      router.push(AnnouncementRoutes[type] + `/${slug}`);

      closeModal();

      if (!slug) {
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.error });
      }
   };

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
            {isError ? (
               <h3 className="h3">Упс, произошла ошибка</h3>
            ) : isPending ? (
               <GlobalLoading type="default" />
            ) : (
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
                     {showChat ? (
                        <div className={styles.modal__inner}>
                           <button type="button" onClick={handleShowChat}>
                              Назад
                           </button>
                           <AuthorInfo
                              fullName={
                                 data.data.author?.first_name + " " + data.data.author?.last_name
                              }
                              avatarImg={data.data.author?.profile_image}
                              slug={data.data.author?.slug}
                           />
                        </div>
                     ) : (
                        <AuthorInfo
                           fullName={
                              data.data.author?.first_name + " " + data.data.author?.last_name
                           }
                           avatarImg={data.data.author?.profile_image}
                           slug={data.data.author?.slug}
                        />
                     )}

                     {showChat ? (
                        <Chat author={data.data.author} isModal={true} />
                     ) : (
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
                           <div className={styles.modal__btns}>
                              {currentUser?.profile.slug !== data.data.author?.slug ? (
                                 type !== AnnouncementTypes.order ? (
                                    <Button onClick={handleShowChat}>Написать</Button>
                                 ) : (
                                    <Button onClick={handleOrder} disabled={data.data?.is_applied}>
                                       {isOrderLoading
                                          ? "Загрузка..."
                                          : data.data?.is_applied
                                          ? "Запрос уже отправлен"
                                          : "Отправить заявку"}
                                    </Button>
                                 )
                              ) : (
                                 ""
                              )}

                              {currentUser?.profile.slug === data.data.author?.slug && (
                                 <Button onClick={handleRoute}>Изменить</Button>
                              )}

                              <Button onClick={handleBtnClick} className={styles.modal__btn}>
                                 Подробнее
                              </Button>
                           </div>
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
