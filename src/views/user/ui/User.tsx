"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Tabs } from "@/features/general/tabs";
import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes, UserService, announcementTabs } from "@/shared/lib";
import { AvatarSkeleton } from "@/shared/ui";
import { useThemeStore } from "@/shared/store/themeStore";
import { UserQueryKeys } from "@/shared/api";

import { CircleAlert } from "lucide-react";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { useGetCommonUser } from "../model/useQueries";
import clsx from "clsx";
import styles from "./styles.module.scss";
import userIcon from "@@/imgs/form/user.svg";

const User = () => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();

   const slug = pathname.split("/")[2];

   const { isError, isPending: isLoading, data } = useGetCommonUser(slug);

   const [type, setType] = useState(announcementTabs[0].postValue);

   if (!isLoading) {
      console.log(data);
   }

   // const data = [
   //    { value: "Активно", postValue: "active" },
   //    { value: "Деактивировано", postValue: "nactive" },
   // ];
   // const [type, setType] = useState(data[0].postValue);

   return (
      <div className={clsx(styles.user, styles[theme])}>
         {isLoading ? (
            <AvatarSkeleton />
         ) : isError ? (
            <ErrorMessage />
         ) : (
            <div className={styles.user__top}>
               <div
                  className={styles.user__avatar}
                  style={{
                     backgroundImage: data.data.profile_image
                        ? `url(${data.data.profile_image})`
                        : "",
                  }}>
                  {!data.data.profile_image ? <Image src={userIcon} alt="user icon" /> : ""}
               </div>

               <div className={styles.user__info}>
                  <h4 className={styles.user__name}>
                     {data.data.first_name + " " + data.data.last_name}
                  </h4>
                  <div>
                     <p className={styles.user__mb}>{data.data.email}</p>
                     <p className={styles.user__text}>Был(а) в сети 3 мин. назад</p>
                  </div>

                  {/* <div className={styles.user__more}>
                     <CircleAlert />
                     <p>Подробнее</p>
                  </div> */}

                  {/*<p className={styles.user__text}>На сайте с 01.07.2016</p>*/}
               </div>
            </div>
         )}

         <div className={styles.user__bottom}>
            <Tabs type={type} setType={setType} values={announcementTabs} />
         </div>
         <CardsSection
            fetchFunction={UserService.getCommonUserAds}
            queryKey={UserQueryKeys.COMMON_USER}
            type={SkeletonTypes.standart}
            slug={slug}
            param_tab={type}
         />
      </div>
   );
};

export default User;
