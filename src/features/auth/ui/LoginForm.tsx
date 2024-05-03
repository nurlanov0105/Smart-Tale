"use client";

import React, { useEffect } from "react";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { Button, InputField } from "@/shared/ui";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { ROUTES } from "@/shared/lib";
import styles from "@/features/auth/ui/styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const LoginForm = () => {
   const theme = useThemeStore((state) => state.theme);

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   return (
      <div className={clsx(styles.auth, styles[theme])}>
         <HeadingAuth isLoading={false} isError={false} />
         <div className={styles.auth__row}>
            <div>
               <h5 className={styles.auth__title}>Почта*</h5>
               <InputField classname={styles.auth__field} isBordered={true} type="email" />
            </div>
            <div>
               <h5 className={styles.auth__title}>Пароль*</h5>
               <InputField isBordered={true} type="password" />
            </div>
            <label className={styles.auth__checkbox}>
               <InputField classname={styles.auth__checkField} isBordered={true} type="checkbox" />
               <p className={styles.auth__text}>Запомнить меня</p>
            </label>
            <Button>Войти</Button>
            <TypeAuthButton type="login" />
         </div>
      </div>
   );
};

export default LoginForm;
