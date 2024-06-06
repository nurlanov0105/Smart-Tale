"use client";

import { FC, useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import { Button, GlobalLoading } from "@/shared/ui";
import { AnnouncementTypes, DASHBOARD, ROUTES } from "@/shared/lib";
import { closeModal } from "@/views/modal";
import { images } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import { ISize, useFetchResource, usePathStore } from "@/features/user/standartCard";
import { usePathname, useRouter } from "next/navigation";
import { AnnouncementRoutes } from "../model/consts";
import { ErrorMessage } from "@/entities/general/errorMessage";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useBuyEquipment } from "../model/useQueries";

type Props = {
   slug: string;
   type: string;
};

const CardModal: FC<Props> = ({ slug, type }) => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();
   const router = useRouter();

   const { isPending, isError, data } = useFetchResource({ type, slug });
   const { mutate: buyEquipment, isPending: isLoading } = useBuyEquipment();

   const [selectedCategory, setSelectedCategory] = useState("Описание");
   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };
   console.log(type);

   const handleBtnClick = () => {
      router.push(AnnouncementRoutes[type] + `/${slug}`);

      closeModal();
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

   if (!isPending && !data.data) {
      return <ErrorMessage />;
   }
   // description phone_number email size [{id,size}]

   const handleBuy = () => {
      buyEquipment(slug);
   };

   const handleService = () => {};

   const handleOrder = () => {};

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
         <div className={styles.modal__body}>
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
                     />
                  </div>
                  <div className={styles.modal__info}>
                     <AuthorInfo
                        fullName={data.data.author?.first_name + " " + data.data.author?.last_name}
                        avatarImg={data.data.author?.profile_image}
                        slug={data.data.author?.slug}
                     />

                     <div className={styles.modal__category}>
                        <CardCategory
                           handleCategoryClick={handleCategoryClick}
                           selectedCategory={selectedCategory}
                           isMobile={true}
                           type={type}
                        />
                        <div className={styles.modal__descr}>{categoryData(selectedCategory)}</div>
                     </div>
                     <div className={styles.modal__btns}>
                        {!pathname.includes("admin") &&
                           (pathname === DASHBOARD.PURCHASES ? (
                              <Button onClick={handleBtnClick} className={styles.modal__btn}>
                                 Подробнее
                              </Button>
                           ) : (
                              <>
                                 {type === AnnouncementTypes.equipment ? (
                                    <Button onClick={handleBuy}>
                                       {isLoading ? "Загрузка..." : "Купить"}
                                    </Button>
                                 ) : type === AnnouncementTypes.service ? (
                                    <Button onClick={handleService}>Принять услугу</Button>
                                 ) : (
                                    <Button onClick={handleOrder}>Принять заказ</Button>
                                 )}

                                 <Button onClick={handleBtnClick} className={styles.modal__btn}>
                                    Подробнее
                                 </Button>
                              </>
                           ))}
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default CardModal;
