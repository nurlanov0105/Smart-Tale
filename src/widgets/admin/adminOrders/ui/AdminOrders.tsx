"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { valuesData } from "../model/values.data";
import { AdminEmployeesItem } from "@/entities/admin/adminEmployeesItem";
import { organizationsData } from "@/features/admin/positionForm";
import { AdminBack } from "@/entities/admin/adminBack";
import { ChangeImage } from "@/features/general/changeImage";
import styles from "./styles.module.scss";

const AdminOrders = () => {
   const [type, setType] = useState(valuesData[0].postValue);
   const [selected, setSelected] = useState(organizationsData[0]);
   const data = [1, 2, 3, 4, 5];

   return (
      <div>
         <AdminBack title="Назад" />
         <div className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <ChangeImage image="sd" name="Кирилл Олейников" isAdmin={true} />
               <Tabs type={type} setType={setType} values={valuesData} />
               <div className={styles.form__list}>
                  {data.map((item) => (
                     <AdminEmployeesItem key={item} item={item} />
                  ))}
               </div>
            </fieldset>
         </div>
      </div>
   );
};

export default AdminOrders;
