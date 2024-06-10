"use client";
import React, { useState } from "react";
import {useParams} from "next/navigation";
import { OrganizationIntro } from "@/features/general/organizationIntro";
import { EmployeesList } from "@/features/general/employeesList";
import { OrderList } from "@/features/general/orderList";
import { Tabs } from "@/features/general/tabs";

import {SkeletonTypes, useEmployees, EquipmentService} from "@/shared/lib";
import { useThemeStore, useOrganizationDetails } from "@/shared/lib";
import { EquipmentQueryKeys } from "@/shared/api";
import { GlobalLoading } from "@/shared/ui";

import { valuesData } from "../model/values.data";
import { getOrganizationDate } from "../model/helper";
import clsx from "clsx";
import styles from "./styles.module.scss";

const AdminOrganizationDetail = () => {
   const theme = useThemeStore((state) => state.theme);

   const { slug } = useParams();
   const [type, setType] = useState(valuesData[0].postValue);

   const { data, isLoading, isError } = useOrganizationDetails(slug.toString());

   const getEmployees = useEmployees(type);

   const { day, year, month } = getOrganizationDate(data?.created_at || "2024");

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <h3 className="h3">Упс, произошла ошибка</h3>;

   return (
      <div className={clsx(styles.organization, styles[theme])}>
         {/*<AdminBack title="Детали организации"/>*/}
         <div className={styles.organization__intro}>
            <OrganizationIntro data={data} day={day} month={month.value} year={year} />
         </div>
         <div className={styles.organization__margin}>
            <Tabs type={type} setType={setType} values={valuesData} />
         </div>

         {type === "users-list" ? (
            <EmployeesList data={getEmployees.data} isLoading={getEmployees.isLoading} />
         ) : (
            <OrderList
               fetchFunction={EquipmentService.getMyAds}
               queryKey={EquipmentQueryKeys.GET_MY_ADS}
               type={SkeletonTypes.listItem}
               tab={type}
            />
         )}
      </div>
   );
};

export default AdminOrganizationDetail;
