"use client";
import React, { useState } from "react";
import { CircleAlert } from "lucide-react";
import { Tabs } from "@/features/general/tabs";
import { CardsSection } from "@/widgets/user/cardsSection";
import avatar from "@@/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import { SkeletonTypes } from "@/shared/lib";
import { AvatarSkeleton } from "@/shared/ui";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import { EquipmentQueryKeys, EquipmentService, UserQueryKeys } from "@/shared/api";
import { usePathname } from "next/navigation";
import { useGetCommonUser } from "../model/useQueries";

const User = () => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();

   const slug = pathname.split("/")[2];

   const { isError, isPending: isLoading, data } = useGetCommonUser(slug);

   // if (!isLoading) {
   //    console.log(data);
   // }

   // const isLoading = false,
   //    isError = false;

   // if (isError) {
   //    return <h3 className="h3">Произошла ошибка при получении данных</h3>;
   // }

   // const data = [
   //    { value: "Активно", postValue: "active" },
   //    { value: "Деактивировано", postValue: "nactive" },
   // ];
   // const [type, setType] = useState(data[0].postValue);

   return (
      <div className={clsx(styles.user, styles[theme])}>
         {isLoading ? (
            <AvatarSkeleton />
         ) : (
            <div className={styles.user__top}>
               <Image
                  src={avatar}
                  alt="avatar"
                  width={60}
                  height={60}
                  className={styles.user__avatar}
               />
               <div className={styles.user__info}>
                  <h4 className={styles.user__name}>Михаил Андреев</h4>
                  <div>
                     <p className={styles.user__text}>Был(а) в сети 3 мин. назад</p>
                  </div>

                  <div className={styles.user__more}>
                     <CircleAlert />
                     <p>Подробнее</p>
                  </div>

                  {/*<p className={styles.user__text}>На сайте с 01.07.2016</p>*/}
               </div>
            </div>
         )}

         <div className={styles.user__bottom}>
            {/* <Tabs type={type} setType={setType} values={data} variant="secondary" /> */}
         </div>
         <CardsSection
            fetchFunction={EquipmentService.getEquipments}
            queryKey={UserQueryKeys.COMMON_USER}
            type={SkeletonTypes.standart}
         />
      </div>
   );
};

export default User;
