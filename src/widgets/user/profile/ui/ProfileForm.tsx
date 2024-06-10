"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { Button, GlobalLoading, InputField } from "@/shared/ui";

import { useForm } from "react-hook-form";
import { showModal } from "@/views/modal";
import { ChangeImage } from "@/features/general/changeImage";
import { MODAL_KEYS, useAuth } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import { useChangeProfile, useGetProfile } from "../model/useQueries";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useUserStore } from "@/entities/general/userInfo";
import { ProfileData } from "../model/types";

const ProfileForm: FC = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<ProfileData>();
   const [inputDisabled, setinputDisabled] = useState(true);
   const isAuth = useAuth();
   const theme = useThemeStore((state) => state.theme);
   const image = useUserStore((state) => state.image);
   const addImage = useUserStore((state) => state.addImage);

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [middleName, setMiddleName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   const { isError, isPending: isLoading, data } = useGetProfile();
   const { mutate: changeProfile, isPending } = useChangeProfile();

   if (!isLoading) {
      console.log(data);
   }

   useEffect(() => {
      if (data) {
         addImage(data.data.profile_image);
         setFirstName(data.data.first_name);
         setLastName(data.data.last_name);
         setMiddleName(data.data.middle_name);
         setEmail(data.data.email);
         setPhoneNumber(data.data.phone_number);
      }
   }, [addImage, data]);

   const onSubmit = async (data: ProfileData) => {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("middle_name", middleName);
      formData.append("phone_number", phoneNumber);
      formData.append("email", email);
      if (image) {
         console.log(image);
         formData.append("profile_image", image);
      }

      if (formData) {
         // console.log(formData);
         changeProfile(formData);
         setinputDisabled(true);
      }
   };

   const handleDeleteClick = () => {
      showModal(MODAL_KEYS.confirmationModal, { componentName: MODAL_KEYS.deleteAccount });
   };

   const handleChangeClick = () => {
      setinputDisabled((prev) => !prev);
   };

   const handleCancelClick = () => {
      if (data) {
         setFirstName(data.data.first_name);
         setLastName(data.data.last_name);
         setMiddleName(data.data.middle_name);
         setEmail(data.data.email);
         setPhoneNumber(data.data.phone_number);
      }
      setinputDisabled(true);
   };

   if (isLoading) {
      return <GlobalLoading />;
   }

   // if (!isLoading) {
   //    console.log(data);
   // }

   const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
   };
   const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
   };
   const handleChangeMiddleName = (e: ChangeEvent<HTMLInputElement>) => {
      setMiddleName(e.target.value);
   };
   const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };
   const handleChangePnoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
   };

   return (
      <form className={clsx(styles.form, styles[theme])} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.form__content}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <ChangeImage
                  name={`${data?.data.first_name + " " + data?.data.last_name}`}
                  image={image}
                  disabled={inputDisabled}
               />
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        title="Имя"
                        disabled={inputDisabled}
                        value={firstName}
                        onChange={handleChangeFirstName}
                     />
                     <InputField
                        title="Фамилия"
                        disabled={inputDisabled}
                        value={lastName}
                        onChange={handleChangeLastName}
                     />
                  </div>
                  <InputField
                     title="Отчество"
                     disabled={inputDisabled}
                     value={middleName}
                     onChange={handleChangeMiddleName}
                  />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Контактные данные</legend>

               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        title="Почта"
                        disabled={inputDisabled}
                        value={email}
                        onChange={handleChangeEmail}
                     />
                     <InputField
                        title="Номер телефона"
                        disabled={inputDisabled}
                        value={phoneNumber}
                        onChange={handleChangePnoneNumber}
                     />
                  </div>
               </div>
            </fieldset>
         </div>

         <div className={styles.form__btns}>
            {isAuth && (
               <Button type="button" classType="btn_danger" onClick={handleDeleteClick}>
                  Удалить аккаунт
               </Button>
            )}

            {inputDisabled ? (
               <Button type="button" onClick={handleChangeClick}>
                  Изменить данные
               </Button>
            ) : (
               <div className={styles.form__btns}>
                  <Button type="button" onClick={handleCancelClick} classType="btn_bordered">
                     Отменить изменения
                  </Button>
                  <Button type="submit" className="active">
                     {isPending ? "Загрузка..." : "Сохранить изменения"}
                  </Button>
               </div>
            )}
         </div>
      </form>
   );
};

export default ProfileForm;
