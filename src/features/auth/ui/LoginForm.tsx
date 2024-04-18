"use client";
import React from "react";
import { HeadingAuth } from "@/entities/headingAuth";
import { Button, InputField } from "@/shared/ui";
import { TypeAuthButton } from "@/entities/typeAuthButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/lib";
import styles from "@/features/auth/ui/styles.module.scss";

const LoginForm = () => {
   const router = useRouter();

   return (
      <div className={styles.auth}>
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
            <Button onClick={() => router.push(ROUTES.CONFIRMATION_LOGIN)}>Войти</Button>
            <TypeAuthButton type="login" />
         </div>
      </div>
   );
};

export default LoginForm;
