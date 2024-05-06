"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { useThemeStore } from "@/shared/themeStore";
import { Button, InputField, PasswordField } from "@/shared/ui";

import { EmailSchema } from "../model/schema";
import { ROUTES } from "@/shared/lib";
import clsx from "clsx";
import styles from "@/features/auth/ui/styles.module.scss";

const LoginForm = () => {
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
         router.push(ROUTES.MARKETPLACE_EQUIPMENT);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.auth, styles[theme])}>
         <HeadingAuth isLoading={false} isError={false} />
         <div className={styles.auth__row}>
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
               <InputField classname={styles.auth__checkField} isBordered={true} type="checkbox" />
               <p className={styles.auth__text}>Запомнить меня</p>
            </label>
            <Button type="submit" disabled={!isValid}>
               Войти
            </Button>
            <TypeAuthButton type="login" />
         </div>
      </form>
   );
};

export default LoginForm;
