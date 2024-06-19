"use client";
import { ChangeEvent, FC, useEffect, useState, useCallback } from "react";

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
      formState: { errors },
   } = useForm<ProfileData>();
   const [inputDisabled, setInputDisabled] = useState(true);
   const isAuth = useAuth();
   const theme = useThemeStore((state) => state.theme);
   const image = useUserStore((state) => state.image);
   const addImage = useUserStore((state) => state.addImage);

   const [profileData, setProfileData] = useState<ProfileData>({
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      phone_number: "",
   });

   const { isError, isPending: isLoading, data } = useGetProfile();
   const { mutate: changeProfile, isPending } = useChangeProfile();

   useEffect(() => {
      if (data) {
         addImage(data?.profile.profile_image);
         setProfileData({
            first_name: data?.profile.first_name,
            last_name: data?.profile.last_name,
            middle_name: data?.profile.middle_name,
            email: data?.profile.email,
            phone_number: data?.profile.phone_number,
         });
      }
   }, [addImage, data]);

   const onSubmit = async (data: ProfileData) => {
      const formData = new FormData();
      formData.append("first_name", profileData.first_name);
      formData.append("last_name", profileData.last_name);
      formData.append("middle_name", profileData.middle_name);
      formData.append("phone_number", profileData.phone_number);
      formData.append("email", profileData.email);
      if (image && typeof image != "string") {
         formData.append("profile_image", image);
      }

      changeProfile(formData);
      setInputDisabled(true);
   };

   const handleDeleteClick = () => {
      showModal(MODAL_KEYS.confirmationModal, { componentName: MODAL_KEYS.deleteAccount });
   };

   const handleChangeClick = () => {
      setInputDisabled((prev) => !prev);
   };

   const handleCancelClick = () => {
      if (data) {
         setProfileData({
            first_name: data.profile.first_name,
            last_name: data.profile.last_name,
            middle_name: data.profile.middle_name,
            email: data.profile.email,
            phone_number: data.profile.phone_number,
         });
      }
      setInputDisabled(true);
   };

   const handleChangeFirstName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setProfileData((prevData) => ({
         ...prevData,
         first_name: e.target.value,
      }));
   }, []);

   const handleChangeLastName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setProfileData((prevData) => ({
         ...prevData,
         last_name: e.target.value,
      }));
   }, []);

   const handleChangeMiddleName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setProfileData((prevData) => ({
         ...prevData,
         middle_name: e.target.value,
      }));
   }, []);

   const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setProfileData((prevData) => ({
         ...prevData,
         email: e.target.value,
      }));
   }, []);

   const handleChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setProfileData((prevData) => ({
         ...prevData,
         phone_number: e.target.value,
      }));
   }, []);

   if (isLoading) {
      return <GlobalLoading />;
   }

   return (
      <form className={clsx(styles.form, styles[theme])} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.form__content}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <ChangeImage
                  name={`${data?.profile.first_name + " " + data?.profile.last_name}`}
                  image={image}
                  disabled={inputDisabled}
               />
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        title="Имя"
                        disabled={inputDisabled}
                        value={profileData.first_name}
                        onChange={handleChangeFirstName}
                     />
                     <InputField
                        title="Фамилия"
                        disabled={inputDisabled}
                        value={profileData.last_name}
                        onChange={handleChangeLastName}
                     />
                  </div>
                  <InputField
                     title="Отчество"
                     disabled={inputDisabled}
                     value={profileData.middle_name}
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
                        value={profileData.email}
                        onChange={handleChangeEmail}
                     />
                     <InputField
                        title="Номер телефона"
                        disabled={inputDisabled}
                        value={profileData.phone_number}
                        onChange={handleChangePhoneNumber}
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
