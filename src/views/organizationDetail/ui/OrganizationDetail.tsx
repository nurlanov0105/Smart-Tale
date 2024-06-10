"use client";

import { useState } from "react";
import {useParams} from "next/navigation";
import { OrganizationIntro } from "@/features/general/organizationIntro";
import { getOrganizationDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";
import { OrderList } from "@/features/general/orderList";
import { Tabs } from "@/features/general/tabs";
import { EquipmentService, SkeletonTypes, announcementTabs, useOrganizationDetails } from "@/shared/lib";
import { GlobalLoading } from "@/shared/ui";
import { EquipmentQueryKeys } from "@/shared/api";
import { useThemeStore } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";

const OrganizationDetail = () => {
   const theme = useThemeStore((state) => state.theme);

   const {slug} = useParams();

   const { data, isLoading, isError } = useOrganizationDetails(slug.toString());
   const { day, year, month } = getOrganizationDate(data?.created_at || "2024");
   const [type, setType] = useState(announcementTabs[0].postValue);

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <h3 className="h3">Упс, произошла ошибка</h3>;

   return (
      <section className={clsx(styles.section, styles[theme])}>
         <div className={styles.section__top}>
            <OrganizationIntro data={data} day={day} month={month.value} year={year} />
            <Tabs type={type} setType={setType} values={announcementTabs} />
         </div>

         <OrderList
            fetchFunction={EquipmentService.getMyAds}
            queryKey={EquipmentQueryKeys.GET_MY_ADS}
            type={SkeletonTypes.listItem}
            param_tab={type}
         />
      </section>
   );
};

export default OrganizationDetail;
