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
import {useEmployeeQuery} from "@/widgets/admin/adminEmployeesSettings/model/useEmployeeQuery";

const AdminEmployeesDetails = () => {
   const [type, setType] = useState(valuesData[0].postValue);
   const [typeView, setTypeView] = useState(false);

   const {data, isLoading} = useEmployeeQuery("adilet-adilet")
    console.log(data)

   const dataList = [
       {
           id: 1,
           type: "Order",
           status: "process",
           service: "Order",
           slug: "buy-products",
           title: "Купить продукты",
           description: "Делать это быстро",
           created_at: "2 апреля 2024"
       },
       {
           id: 2,
           type: "Order",
           status: "process",
           service: "Order",
           slug: "buy-products",
           title: "Купить продукты",
           description: "Делать это быстро",
           created_at: "2 апреля 2024"
       },
       {
           id: 3,
           type: "Order",
           status: "process",
           service: "Order",
           slug: "buy-products",
           title: "Купить продукты",
           description: "Делать это быстро",
           created_at: "2 апреля 2024"
       }

   ];


   // skeleton

   const readyData = isLoading
      ? [...Array(3)].map((_, i: number) => <CommonSkeleton key={i} type="employees" />)
      : dataList.map((item) => {
          if (typeView) {
              return <AdminEmployeesItem key={item.id} item={item} />
          }else {
              return <OrderItem key={item.id} item={item}/>
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
