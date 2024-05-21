"use client";

import { FC, useState } from "react";
import { CardSlider } from "@/features/general/cardSlider";
import { ModalCardHeader } from "@/entities/general/modalCardHeader";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { CardCategory } from "@/features/general/cardCategory";
import { Button, GlobalLoading } from "@/shared/ui";
import { DASHBOARD, ROUTES } from "@/shared/lib";
import Link from "next/link";
import { closeModal } from "@/views/modal";
import { images } from "@/shared/lib";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";
import { useFetchResource, usePathStore } from "@/features/user/standartCard";
import { useQuery } from "@tanstack/react-query";
import { baseApiInstance } from "@/shared/api/instance";
import { EquipmentsEndpoints } from "@/shared/api";
import { usePathname, useRouter } from "next/navigation";

type Props = {
   slug: string;
};

const CardModal: FC<Props> = ({ slug }) => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();
   const router = useRouter();
   const setUrl = usePathStore((state) => state.setUrl);

   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");
   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   const handleBtnClick = () => {
      setUrl({ pathname, slug });
      router.push(ROUTES.CARD_DETAILS + `/${slug}`);
      closeModal();
   };

   const { isPending, isError, data } = useFetchResource(pathname, slug);

   return (
      <div className={clsx(styles.modal, styles[theme])}>
         <div className={styles.modal__slider}>
            {!isError && (
               <CardSlider
                  images={(!isError && !isPending && data.images) || images}
                  isLoading={isPending}
               />
            )}
         </div>
         <div className={styles.modal__body}>
            {isError ? (
               <h3 className="h3">Упс, произошла ошибка</h3>
            ) : isPending ? (
               <GlobalLoading type="full" />
            ) : (
               <>
                  <div className={styles.modal__header}>
                     <ModalCardHeader
                        title={data.title}
                        cost={`${Math.round(Number(data.price))}`}
                     />
                  </div>
                  <div className={styles.modal__info}>
                     <AuthorInfo
                        fullName={data.author?.first_name + " " + data.author?.last_name}
                        avatarImg={data.author?.profile_image}
                     />

                     <div className={styles.modal__category}>
                        <CardCategory
                           handleCategoryClick={handleCategoryClick}
                           selectedCategory={selectedCategory}
                           isMobile={true}
                        />
                        <div className={styles.modal__descr}>{data.description}</div>
                     </div>
                     <div className={styles.modal__btns}>
                        {!pathname.includes("admin") &&
                           (pathname === DASHBOARD.PURCHASES ? (
                              <Button onClick={handleBtnClick} className={styles.modal__btn}>
                                 Подробнее
                              </Button>
                           ) : (
                              <>
                                 <Button>Принять заказ</Button>
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
