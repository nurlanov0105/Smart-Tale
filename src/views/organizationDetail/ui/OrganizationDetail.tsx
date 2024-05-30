"use client";

import { useOrganizationDetails } from "@/widgets/admin/adminOrganizationDetail/model/useOrganization";
import { GlobalLoading } from "@/shared/ui";
import { OrganizationIntro } from "@/features/general/organizationIntro";
import { getOrganizationDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";
import { OrderList } from "@/features/general/orderList";
import { EquipmentService, SkeletonTypes } from "@/shared/lib";
import { EquipmentQueryKeys } from "@/shared/api";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";

const OrganizationDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   const slug = "neobisteam";
   const { data, isLoading, isError } = useOrganizationDetails(slug);
   const { day, year, month } = getOrganizationDate(data?.created_at);

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <h3 className="h3">Упс, произошла ошибка</h3>;

   return (
      <section className={clsx(styles.section, styles[theme])}>
         <div className={styles.section__top}>
            <OrganizationIntro data={data} day={day} month={month.value} year={year} />
         </div>

         <OrderList
            fetchFunction={EquipmentService.getMyAds}
            queryKey={EquipmentQueryKeys.GET_MY_ADS}
            type={SkeletonTypes.listItem}
            tab={"type"}
         />
      </section>
   );
};

export default OrganizationDetail;
