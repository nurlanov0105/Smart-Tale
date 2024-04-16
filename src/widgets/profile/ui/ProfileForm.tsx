"use client";

import { FC } from "react";
import { Button, InputField } from "@/shared/ui";
import styles from "./styles.module.scss";
import Image from "next/image";

import userIcon from "@@/imgs/form/user.svg";
import { useForm } from "react-hook-form";
import { useModalStore } from "@/widgets/modal/model/modalState";
import { HideAnnouncement } from "@/features/modals";

const ProfileForm: FC = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data: any) => console.log(data);
   const showModal = useModalStore((state) => state.showModal);

   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.form__content}>
            <fieldset className={styles.form__user}>
               <div className={styles.form__avatar}>
                  <Image src={userIcon} alt="user icon" />
               </div>
               <div className={styles.form__userBox}>
                  <h3 className={styles.form__name}>Кирилл Олейников</h3>
                  <button
                     onClick={() => showModal("HideAnnouncement")}
                     className={styles.form__photoSpan}>
                     Изменить фото профиля
                  </button>
               </div>
            </fieldset>
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
         </div>

         <div className={styles.form__btn}>
            <Button>Изменить данные</Button>
         </div>
      </form>
   );
};

export default ProfileForm;
