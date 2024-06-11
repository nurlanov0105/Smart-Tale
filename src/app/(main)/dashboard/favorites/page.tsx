"use client";

import { CardsSection } from "@/widgets/user/cardsSection";
import {
   SkeletonTypes,
   UserService,
   announcementFavoritesTabs,
   announcementTabs,
} from "@/shared/lib";
import { NextPage } from "next";
import { Tabs } from "@/features/general/tabs";
import { useState } from "react";
import { FavoritesDefineService } from "@/widgets/user/cardsSection/model/values.data";
import styles from "./styles.module.scss";
import { EquipmentQueryKeys, UserQueryKeys } from "@/shared/api";

const PurchasesPage: NextPage = () => {
   const [type, setType] = useState(announcementFavoritesTabs[0].postValue);

   return (
      <div className={styles.favorites}>
         <div className={styles.favorites__tabs}>
            <Tabs type={type} setType={setType} values={announcementTabs} />
         </div>

         <CardsSection
            fetchFunction={UserService.getFavorites}
            queryKey={UserQueryKeys.FAVORITES}
            param_tab={type}
            type={SkeletonTypes.standart}
         />
      </div>
   );
};

export default PurchasesPage;
