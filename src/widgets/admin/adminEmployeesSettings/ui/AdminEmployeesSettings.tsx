"use client";
import React, { useState } from "react";
import { Button, InputField, Select } from "@/shared/ui";
import { organizationsData } from "@/features/admin/positionForm";
import { rightsActionsData } from "@/entities/admin/rightAction";
import { RightAction } from "@/entities/admin/rightAction";
import { AdminBack } from "@/entities/admin/adminBack";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import {useForm} from "react-hook-form";
import {useEmployeeDetails} from "@/widgets/admin/adminEmployeesSettings/model/useEmployeeDetails";
import {emailSchema, titleSchema} from "@/features/user/orderForm/model/validationSchema";

const AdminEmployeesSettings = () => {
   const [selected, setSelected] = useState(organizationsData[0]);
   const theme = useThemeStore((state) => state.theme);
   const handleDelete = () => {
      showModal(MODAL_KEYS.deleteEmployee, {slug: "qwe"})
   }



   const {
      data,
      isError,
      isLoading,
      register,
      handleSubmit,
      isSuccess
   } = useEmployeeDetails("adilet-adilet")

   return (
      <div className={styles[theme]}>
         <AdminBack title="Назад" />
         <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField {...register("name", titleSchema)} title="Имя" disabled={true} value="Игорь" />
                     <InputField {...register("lastName", titleSchema)} title="Фамилия" disabled={true} value="Вайтенко" />
                  </div>
                  <InputField {...register("patronymic", titleSchema)} title="Отчество" disabled={true} value="Вайтенкович" />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Контактные данные</legend>

               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField {...register("email", emailSchema)} title="Почта" disabled={true} value="vaitekno@gmail.com" />
                     <InputField title="Номер телефона" disabled={true} value="123346784" />
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
                     data={organizationsData}
                     type="default"
                  />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Права доступа</legend>
               <ul className={styles.form__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction register={register} action={action} key={action.title} />
                  ))}
               </ul>
            </fieldset>
         </form>
         <div className={styles.form__btn}>
            <Button onClick={handleDelete} className="btn_danger">Удалить сотрудника</Button>
            <Button>Сохранить</Button>
         </div>
      </div>
   );
};

export default AdminEmployeesSettings;
