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
import { UserQueryKeys } from "@/shared/api";
import styles from "./styles.module.scss";
import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";

const PurchasesPage: NextPage = () => {
   const [type, setType] = useState(announcementFavoritesTabs[0].postValue);

    const initialData = {
        data: [],
        has_next_page: true,
        next_page_number: 1
    }

   return (
      <div className={styles.favorites}>
         <div className={styles.favorites__tabs}>
            <Tabs type={type} setType={setType} values={announcementTabs} />
         </div>

         {/*<CardsSection*/}
         {/*   fetchFunction={UserService.getFavorites}*/}
         {/*   queryKey={UserQueryKeys.FAVORITES}*/}
         {/*   param_tab={type}*/}
         {/*   type={SkeletonTypes.standart}*/}
         {/*/>*/}
          <CardSection2
              initialData={initialData}
              queryKey={UserQueryKeys.FAVORITES}
              dependencies={{param_tab: type}}
          />
      </div>
   );
};

export default PurchasesPage;
