"use client";
import React, { useState } from "react";
// import { AdminBack } from '@/entities/admin/adminBack';
import { Button, InputField, Select } from "@/shared/ui";
import { organizationsData } from "@/features/admin/positionForm";
import { rightsActionsData } from "@/entities/admin/rightAction";
import { RightAction } from "@/entities/admin/rightAction";
import styles from "./styles.module.scss";

const AdminEmployeesDetail = () => {
   const [selected, setSelected] = useState(organizationsData[0]);

   return (
      <div>
         {/*<AdminBack title="Детали сотрудника"/>*/}
         <form className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField title="Имя" />
                     <InputField title="Фамилия" />
                  </div>
                  <InputField title="Отчество" />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Контактные данные</legend>

               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField title="Почта" />
                     <InputField title="Номер телефона" />
                  </div>
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Должность сотрудника</legend>
               <div className={styles.form__wrapper}>
                  <Select
                     selected={selected}
                     setSelected={setSelected}
                     title="Должность"
                     employees={organizationsData}
                  />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Права доступа</legend>
               <ul className={styles.form__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction {...action} key={action.title} />
                  ))}
               </ul>
            </fieldset>
         </form>
         <div className={styles.form__btn}>
            <Button>Сохранить</Button>
         </div>
      </div>
   );
};

export default AdminEmployeesDetail;
