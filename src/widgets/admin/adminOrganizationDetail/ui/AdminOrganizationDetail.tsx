"use client";
import React, { useState } from "react";
import { EmployeesList } from "@/features/general/employeesList";
import { OrderList } from "@/features/general/orderList";
import { Tabs } from "@/features/general/tabs";
import { Logo } from "@/entities/general/logo";
import { useThemeStore } from "@/shared/themeStore";
import { SkeletonTypes } from "@/shared/lib";
import { GlobalLoading } from "@/shared/ui";

import { valuesData } from "../model/values.data";
import { useOrganizationDetails } from "../model/useOrganization";
import { getOrganizationDate } from "../model/helper";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {useEmployees} from "@/widgets/admin/adminEmployees/model/useEmployees";

const AdminOrganizationDetail = () => {
   const theme = useThemeStore((state) => state.theme);

   const slug = "neobisteam";
   const [type, setType] = useState(valuesData[0].postValue);

   const { data, isLoading, isError } = useOrganizationDetails(slug);

    const getEmployees = useEmployees(type)

   const { day, year, month } = getOrganizationDate(data?.created_at);

   if (isLoading) return <GlobalLoading type="full" />;

   if (isError) return <h3 className="h3">Упс, произошла ошибка</h3>;

   return (
      <div className={clsx(styles.organization, styles[theme])}>
         {/*<AdminBack title="Детали организации"/>*/}
         <Logo data={data} type="organization" />
         <p className={styles.organization__date}>
            Создан {day} {month.value} {year}
         </p>
         <div className={styles.organization__margin}>
            <Tabs type={type} setType={setType} values={valuesData} />
         </div>

         {type === "users-list" ? (
            <EmployeesList data={getEmployees.data} isLoading={getEmployees.isLoading}/>
         ) : (
            <OrderList
               data={[]}
               isError={false}
               isLoading={false}
               type={SkeletonTypes.listItem}
            />
         )}
      </div>
   );
};

export default AdminOrganizationDetail;
