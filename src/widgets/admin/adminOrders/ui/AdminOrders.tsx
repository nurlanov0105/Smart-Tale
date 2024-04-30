"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { valuesData } from "../model/values.data";
import { AdminEmployeesItem } from "@/entities/admin/adminEmployeesItem";
import { organizationsData } from "@/features/admin/positionForm";
import { AdminBack } from "@/entities/admin/adminBack";
import { ChangeImage } from "@/features/general/changeImage";
import styles from "./styles.module.scss";
import { AvatarSkeleton, CommonSkeleton } from "@/shared/ui";

const AdminOrders = () => {
   const [type, setType] = useState(valuesData[0].postValue);
   const [selected, setSelected] = useState(organizationsData[0]);
   const data = [1, 2, 3, 4, 5];

   // skeleton
   const isLoading = false;

   const readyData = isLoading
      ? [...Array(3)].map((_, i: number) => <CommonSkeleton key={i} type="employees" />)
      : data.map((item) => <AdminEmployeesItem key={item} item={item} />);

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
                  <ChangeImage image="sd" name="Кирилл Олейников" isAdmin={true} />
               )}

               <Tabs type={type} setType={setType} values={valuesData} />
               <div className={styles.form__list}>{readyData}</div>
            </fieldset>
         </div>
      </div>
   );
};

export default AdminOrders;
