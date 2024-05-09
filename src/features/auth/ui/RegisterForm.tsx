"use client";

import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { useThemeStore } from "@/shared/themeStore";
import { Button, InputField, PasswordField } from "@/shared/ui";

import { ROUTES, useDebounce } from "@/shared/lib";
import { EmailSchema, NamingSchema, passwordSchema } from "../model/schema";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { RegisterFormProps, registerFormType } from "../model/types";

const RegisterForm: FC<RegisterFormProps> = ({ handleRegister, isLoading, checkEmailValidity }) => {
   const theme = useThemeStore((state) => state.theme);

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
      watch,
   } = useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
   });

   const email = watch("email");
   const debouncedEmail = useDebounce(email, 500);

   useEffect(() => {
      if (!errors.email) {
         checkEmailValidity(debouncedEmail);
      }
   }, [debouncedEmail, isValid, errors.email, checkEmailValidity]);

   const onSubmit = (data: any) => {
      handleRegister(data);
      reset();
   };

   const password = React.useRef({});
   password.current = watch("password", "");

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.auth, styles[theme])}>
         <HeadingAuth isLoading={false} isError={false} />
         <div className={styles.auth__row}>
            <div>
               <h5 className={styles.auth__title}>Фамилия*</h5>
               <InputField
                  {...register("lastName", NamingSchema)}
                  isBordered={true}
                  error={errors.lastName && errors.lastName.message}
               />
            </div>
            <div>
               <h5 className={styles.auth__title}>Имя*</h5>
               <InputField
                  {...register("firstName", NamingSchema)}
                  isBordered={true}
                  error={errors.firstName && errors.firstName.message}
               />
            </div>
            <div>
               <h5 className={styles.auth__title}>Отчество*</h5>
               <InputField
                  {...register("middleName", NamingSchema)}
                  isBordered={true}
                  error={errors.middleName && errors.middleName.message}
               />
            </div>
            <div>
               <h5 className={styles.auth__title}>Почта*</h5>
               <InputField
                  {...register("email", EmailSchema)}
                  isBordered={true}
                  type="email"
                  error={errors.email && errors.email.message}
               />
            </div>
            <div>
               <h5 className={styles.auth__title}>Пароль*</h5>
               <PasswordField
                  {...register("password", passwordSchema)}
                  type="password"
                  error={errors.password && errors.password.message}
               />
            </div>
            <div>
               <h5 className={styles.auth__title}>Подтвердите пароль*</h5>
               <PasswordField
                  {...register("rePassword", {
                     validate: (value) => value === password.current || "Пароли должны совпадать",
                  })}
                  type="password"
                  error={errors.rePassword && errors.rePassword.message}
               />
            </div>
            {/* <label className={styles.auth__checkbox}>
               <InputField
                  {...register("rememberMe")}
                  classname={styles.auth__checkField}
                  isBordered={true}
                  type="checkbox"
               />
               <p className={styles.auth__text}>Запомнить меня</p>
            </label> */}
            <Button type="submit" disabled={!isValid || isLoading}>
               {isLoading ? "Загрузка..." : "Зарегистрироваться"}
            </Button>
            <TypeAuthButton type="register" />
         </div>
      </form>
   );
};

export default RegisterForm;
