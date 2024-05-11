"use client";

import { FC, useState } from "react";
import { BtnBordered, Button, InputField } from "@/shared/ui";

import { useForm } from "react-hook-form";
import { showModal } from "@/views/modal";
import { ChangeImage } from "@/features/general/changeImage";
import { MODAL_KEYS, useAuth } from "@/shared/lib";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import { stat } from "fs";
import clsx from "clsx";

const ProfileForm: FC = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data: any) => console.log(data);
   const [inputDisabled, setinputDisabled] = useState(true);
   const isAuth = useAuth();

   const theme = useThemeStore((state) => state.theme);

   const handleDeleteClick = () => {
      showModal(MODAL_KEYS.deleteAccount);
   };

   const handleChangeClick = () => {
      setinputDisabled((prev) => !prev);
   };

   const handleSaveClick = () => {
      setinputDisabled(true);
   };

   const handleCancelClick = () => {
      setinputDisabled(true);
   };

   return (
      <form className={clsx(styles.form, styles[theme])} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.form__content}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <ChangeImage name="data.name" image="data.image" disabled={inputDisabled} />
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField title="Имя" disabled={inputDisabled} />
                     <InputField title="Фамилия" disabled={inputDisabled} />
                  </div>
                  <InputField title="Отчество" disabled={inputDisabled} />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Контактные данные</legend>

               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField title="Почта" disabled={inputDisabled} />
                     <InputField title="Номер телефона" disabled={inputDisabled} />
                  </div>
               </div>
            </fieldset>
         </div>

         <div className={styles.form__btns}>
            {isAuth && (
               <Button className="btn_danger" onClick={handleDeleteClick}>
                  Удалить аккаунт
               </Button>
            )}

            {inputDisabled ? (
               <Button onClick={handleChangeClick}>Изменить данные</Button>
            ) : (
               <div className={styles.form__btns}>
                  <Button onClick={handleCancelClick} className="btn_bordered">
                     Отменить изменения
                  </Button>
                  <Button className="active" onClick={handleSaveClick}>
                     Сохранить изменения
                  </Button>
               </div>
            )}
         </div>
      </form>
   );
};

export default ProfileForm;
