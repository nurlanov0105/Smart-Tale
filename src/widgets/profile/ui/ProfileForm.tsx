"use client";

import { FC } from "react";
import { Button, InputField } from "@/shared/ui";
import styles from "./styles.module.scss";

import { useForm } from "react-hook-form";
import { showModal } from "@/widgets/modal";
import {ChangeImage} from "@/features/changeImage";

const ProfileForm: FC = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data: any) => console.log(data);

   const handleDeleteClick = () => {
      showModal("DeleteModal");
   };

   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.form__content}>

            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <ChangeImage name="data.name" image="data.image"/>
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
         </div>

         <div className={styles.form__btns}>
            <Button className="btn_danger" onClick={handleDeleteClick}>
               Удалить аккаунт
            </Button>
            <Button>Изменить данные</Button>
         </div>
      </form>
   );
};

export default ProfileForm;
