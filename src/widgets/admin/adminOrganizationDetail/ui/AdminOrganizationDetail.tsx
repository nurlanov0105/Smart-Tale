"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/general/logo";
import { Tabs } from "@/features/general/tabs";
import { valuesData } from "../model/values.data";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
import { SkeletonTypes } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

import { EmployeesList } from "@/features/general/employeesList";
import { useOrganizationDetails } from "../model/useOrganization";
import { GlobalLoading } from "@/shared/ui";
import { parseISO, getYear, getDate, getMonth } from "date-fns";
import { monthsForDate, monthsList } from "@/entities/general/selectDate/model/helper";
import { getOrganizationDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";
// import { AdminBack } from "@/entities/admin/adminBack";

const AdminOrganizationDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   const [dataList, setData] = useState([
      { id: 1, type: "equipment" },
      { id: 2, type: "equipment" },
      { id: 3, type: "equipment" },
      { id: 4, type: "equipment" },
      { id: 5, type: "equipment" },
      { id: 6, type: "equipment" },
   ]);
   const slug = "neobisteam";
   const [type, setType] = useState(valuesData[0].postValue);

   const { data, isLoading, isError } = useOrganizationDetails(slug);

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
            <EmployeesList />
         ) : (
            <OrderList
               data={dataList}
               isError={false}
               isLoading={false}
               type={SkeletonTypes.listItem}
            />
         )}
      </div>
   );
};

export default AdminOrganizationDetail;
