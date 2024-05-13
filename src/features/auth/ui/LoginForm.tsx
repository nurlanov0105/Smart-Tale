"use client";

import React, { FC, useEffect } from "react";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { useThemeStore } from "@/shared/themeStore";
import { Button, InputField, PasswordField } from "@/shared/ui";

import { EmailSchema, passwordSchema } from "../model/schema";
import {useLoginForm} from "../model/hooks";
import clsx from "clsx";
import styles from "./styles.module.scss";

const LoginForm: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const {
      handleSubmit,
      register,
      errors,
      isValid,
       isLoading
   } = useLoginForm()

   // const isRemember = useRememberMe();
   // const [isRememberMe, setRememberMe] = useState(useRememberMe());

   // useEffect(() => {
   //       setRememberMe(isRemember);
   //    }, [isRemember]);
   //
   //    const handleRememberChange = () => {
   //       setRememberMe(!isRememberMe);
   //    };

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);


   return (
      <form onSubmit={handleSubmit} className={clsx(styles.auth, styles[theme])}>
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
                  {...register("password", passwordSchema)}
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
                  // checked={isRememberMe}
                  // onChange={handleRememberChange}
               />
               <p className={styles.auth__text}>Запомнить меня</p>
            </label>
            <Button type="submit" disabled={!isValid || isLoading}>
               {isLoading ? "Загрузка..." : "Войти"}
            </Button>
            <TypeAuthButton type="login" />
         </div>
      </form>
   );
};

export default LoginForm;
