"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { useThemeStore } from "@/shared/themeStore";
import { Button, InputField, PasswordField } from "@/shared/ui";

import { ROUTES } from "@/shared/lib";
import { EmailSchema, NamingSchema } from "../model/schema";
import clsx from "clsx";
import styles from "./styles.module.scss";

const RegisterForm = () => {
   const theme = useThemeStore((state) => state.theme);
   const router = useRouter();

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
   });

   const onSubmit = (data: any) => {
      console.log(data);
      reset();

      if (data) {
         router.push(ROUTES.CONFIRMATION_REGISTER);
      }
   };

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
                  {...register("password", {
                     required: "Пароль обязателен",
                     minLength: { value: 8, message: "Пароль должен быть не менее 8 символов" },
                  })}
                  type="password"
                  error={errors.password && errors.password.message}
               />
            </div>
            <label className={styles.auth__checkbox}>
               <InputField
                  {...register("rememberMe")}
                  classname={styles.auth__checkField}
                  isBordered={true}
                  type="checkbox"
               />
               <p className={styles.auth__text}>Запомнить меня</p>
            </label>
            <Button type="submit" disabled={!isValid}>
               Зарегистрироваться
            </Button>
            <TypeAuthButton type="register" />
         </div>
      </form>
   );
};

export default RegisterForm;
