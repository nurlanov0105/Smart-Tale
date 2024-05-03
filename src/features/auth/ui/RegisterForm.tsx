"use client";

import React, { useEffect } from "react";
import { Button, InputField } from "@/shared/ui";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/lib";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const RegisterForm = () => {
   const theme = useThemeStore((state) => state.theme);
   const router = useRouter();

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   return (
      <div className={clsx(styles.auth, styles[theme])}>
         <HeadingAuth isLoading={false} isError={false} />
         <div className={styles.auth__row}>
            <div>
               <h5 className={styles.auth__title}>Фамилия*</h5>
               <InputField isBordered={true} />
            </div>
            <div>
               <h5 className={styles.auth__title}>Имя*</h5>
               <InputField isBordered={true} />
            </div>
            <div>
               <h5 className={styles.auth__title}>Отчество*</h5>
               <InputField isBordered={true} />
            </div>
            <div>
               <h5 className={styles.auth__title}>Почта*</h5>
               <InputField isBordered={true} type="email" />
            </div>
            <div>
               <h5 className={styles.auth__title}>Пароль*</h5>
               <InputField isBordered={true} type="password" />
            </div>
            <label className={styles.auth__checkbox}>
               <InputField classname={styles.auth__checkField} isBordered={true} type="checkbox" />
               <p className={styles.auth__text}>Запомнить меня</p>
            </label>
            <Button onClick={() => router.push(ROUTES.CONFIRMATION_REGISTER)}>
               Зарегистрироваться
            </Button>
            <TypeAuthButton type="register" />
         </div>
      </div>
   );
};

export default RegisterForm;
