"use client";

import React from "react";
import { Button, InputField } from "@/shared/ui";
import { HeadingAuth } from "@/entities/headingAuth";
import { TypeAuthButton } from "@/entities/typeAuthButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/lib";
import styles from "./styles.module.scss";

const RegisterForm = () => {
   const router = useRouter();

   return (
      <div className={styles.auth}>
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
