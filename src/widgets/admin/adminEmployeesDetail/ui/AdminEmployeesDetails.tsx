"use client";

import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { ChangeImage } from "@/features/general/changeImage";
import { AdminEmployeesItem, useGetCurrentOrders } from "@/features/admin/adminEmployeesItem";
import { AdminBack } from "@/entities/admin/adminBack";
import { AvatarSkeleton, Button, CommonSkeleton, Emojis } from "@/shared/ui";
import { valuesData } from "../model/values.data";
import { TypeViewButtons } from "@/entities/user/typeViewButtons";
import { OrderItem } from "@/entities/general/orderItem";
import { useParams } from "next/navigation";

import { CardType, MODAL_KEYS, useEmployeeOrders, useEmployeeQuery } from "@/shared/lib";
import styles from "./styles.module.scss";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { StandartCard } from "@/features/user/standartCard";
import { EmployeeOrderTypes } from "@/features/admin/adminEmployeesItem/model/types";
import { showModal } from "@/views/modal";

const AdminEmployeesDetails = () => {
   const [type, setType] = useState(valuesData[0].postValue);
   const [typeView, setTypeView] = useState(true);

   const { slug } = useParams<{ slug: string }>();

   const { data, isLoading, isError, isSuccess } = useEmployeeQuery(slug);
   const {
      data: currentOrders,
      isLoading: orderIsLoading,
      isError: orderIsError,
      isSuccess: orderIsSuccess,
   } = useGetCurrentOrders("active");

   const { data: orders } = useEmployeeOrders(slug);
   const ordersData = orders?.data?.data;

   const handleBtnClick = () => {
      showModal(MODAL_KEYS.infoListModal, {
         componentName: MODAL_KEYS.orderListModal,
         data: {
            data: currentOrders?.data,
            slug: data?.user?.slug ? data.user.slug : "",
         },
         type: "order",
      });
   };

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
      <div className={styles.orderBlock}>
         <span>
            <Emojis type="ups" />
         </span>
         <h3 className="h3">У данного сотрудника нет заказов</h3>
         <Button onClick={handleBtnClick}>Назначить заказ</Button>
      </div>
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
