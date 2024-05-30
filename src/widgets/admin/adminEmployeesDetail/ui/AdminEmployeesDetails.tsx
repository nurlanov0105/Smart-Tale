"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { ChangeImage } from "@/features/general/changeImage";
import { AdminEmployeesItem } from "@/entities/admin/adminEmployeesItem";
import { AdminBack } from "@/entities/admin/adminBack";
import { AvatarSkeleton, CommonSkeleton } from "@/shared/ui";
import { valuesData } from "../model/values.data";
import styles from "./styles.module.scss";
import {TypeViewButtons} from "@/entities/user/typeViewButtons";
import {OrderItem} from "@/entities/general/orderItem";
import {useEmployeeOrders, useEmployeeQuery} from "@/widgets/admin/adminEmployeesSettings/model/useEmployeeQuery";
import {useParams} from "next/navigation";
import {EmployeeOrderTypes} from "@/entities/admin/adminEmployeesItem/model/types";

const AdminEmployeesDetails = () => {
   const [type, setType] = useState(valuesData[0].postValue);
   const [typeView, setTypeView] = useState(false);

   const {slug} = useParams()

   const {data, isLoading} = useEmployeeQuery(slug.toString())
    const orders = useEmployeeOrders(slug.toString())
    console.log(orders.data)

   const readyData = isLoading
      ? [...Array(3)].map((_, i: number) => <CommonSkeleton key={i} type="employees" />)
      : orders?.data?.data?.data?.map((item: EmployeeOrderTypes) => {
          if (typeView) {
              return <AdminEmployeesItem key={item.slug} item={item} />
          }else {
              return <OrderItem key={item.slug} item={item}/>
          }
       });

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
                      image="sd"
                      name={`${data?.first_name} ${data?.last_name}`}
                      slug={slug.toString()}
                      isAdmin={true}

                  />
               )}
                <div className={styles.form__tabs}>
                    <Tabs type={type} setType={setType} values={valuesData} />
                    <TypeViewButtons typeView={typeView} setTypeView={setTypeView}/>
                </div>

               <div className={styles.form__list}>{readyData}</div>
            </fieldset>
         </div>
      </div>
   );
};

export default AdminEmployeesDetails;
