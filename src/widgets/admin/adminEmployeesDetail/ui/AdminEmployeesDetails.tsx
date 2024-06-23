"use client";

import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { ChangeImage } from "@/features/general/changeImage";
import { AdminEmployeesItem } from "@/entities/admin/adminEmployeesItem";
import { AdminBack } from "@/entities/admin/adminBack";
import { AvatarSkeleton, CommonSkeleton, Emojis } from "@/shared/ui";
import { valuesData } from "../model/values.data";
import { TypeViewButtons } from "@/entities/user/typeViewButtons";
import { OrderItem } from "@/entities/general/orderItem";
import { useParams } from "next/navigation";
import { EmployeeOrderTypes } from "@/entities/admin/adminEmployeesItem/model/types";
import { CardType, useEmployeeOrders, useEmployeeQuery } from "@/shared/lib";
import styles from "./styles.module.scss";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { StandartCard } from "@/features/user/standartCard";

const AdminEmployeesDetails = () => {
   const [type, setType] = useState(valuesData[0].postValue);
   const [typeView, setTypeView] = useState(true);

   const { slug } = useParams<{ slug: string }>();

   const { data, isLoading, isError, isSuccess } = useEmployeeQuery(slug);

   const { data: orders } = useEmployeeOrders(slug);
   const ordersData = orders?.data?.data;

   const readyData = isError ? (
      <ErrorMessage />
   ) : isLoading ? (
      [...Array(3)].map((_, i: number) => <CommonSkeleton key={i} type="employees" />)
   ) : !!ordersData?.length ? (
      ordersData?.map((item: EmployeeOrderTypes) => {
         if (typeView) {
            return <AdminEmployeesItem key={item.slug} item={item} />;
         } else {
            return <OrderItem key={item.slug} item={item} isOrganization={true} />;
         }
      })
   ) : (
      <h3 className="h3">
         У данного сотрудника нет заказов <Emojis type="ups" />
      </h3>
   );

   return (
      <div>
         <AdminBack title="Назад" />
         <div className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               {isLoading ? (
                  <div className={styles.form__skeleton}>
                     <AvatarSkeleton />
                  </div>
               ) : (
                  <ChangeImage
                     image={data?.user?.profile_image}
                     name={`${data?.user?.first_name} ${data?.user?.last_name}`}
                     slug={slug.toString()}
                     isAdmin={true}
                     disabled={true}
                  />
               )}
               <div className={styles.form__tabs}>
                  <Tabs type={type} setType={setType} values={valuesData} />
                  <TypeViewButtons typeView={typeView} setTypeView={setTypeView} />
               </div>

               <div className={styles.form__list}>{readyData}</div>
            </fieldset>
         </div>
      </div>
   );
};

export default AdminEmployeesDetails;
