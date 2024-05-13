"use client";

import React, { FC } from "react";
import { InputMask } from "@react-input/mask";
import { TypeAuthButton } from "@/entities/auth/typeAuthButton";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { Button, InputField, PasswordField } from "@/shared/ui";
import { usePhoneNumber } from "@/shared/lib";

import { useEmailChecker, useRegisterForm, useThemeAndPasswordEffects } from "../model/hooks";
import { EmailSchema, NamingSchema, passwordSchema, TelSchema } from "../model/schema";
import clsx from "clsx";
import styles from "./styles.module.scss";

const RegisterForm: FC = () => {
   const { handleSubmit, errors, getValues, isValid, register, isLoading, watch, trigger } =
      useRegisterForm();

   const { theme } = useThemeAndPasswordEffects({ watch, trigger });

   // const {checkEmailValidity} = useEmailChecker({watch, errors, isValid})

   const { CountryCodes, country, masks } = usePhoneNumber(watch);

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.auth, styles[theme])}>
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
               <h5 className={styles.auth__title}>Телефон*</h5>
               {/*<InputField*/}
               {/*   {...register("tel", TelSchema)}*/}

               {/*   isBordered={true}*/}
               {/*   type="number"*/}
               {/*   error={errors.tel && errors.tel.message}*/}
               {/*/>*/}

               <InputMask
                  {...register("tel", TelSchema)}
                  placeholder={CountryCodes[country as keyof typeof CountryCodes]}
                  mask={masks[country as keyof typeof masks]}
                  replacement={{ _: /\d/ }}
                  className={styles.auth__inputMask}
               />

               {errors.tel && typeof errors.tel.message === "string" && (
                  <p className={styles.auth__error}>{errors.tel.message}</p>
               )}
            </div>
            <div>
               <h5 className={styles.auth__title}>Пароль*</h5>
               <PasswordField
                  {...register("password", passwordSchema)}
                  error={errors.password && errors.password.message}
               />
            </div>
            <div>
               <h5 className={styles.auth__title}>Подтвердите пароль*</h5>
               <PasswordField
                  {...register("rePassword", {
                     validate: (value) =>
                        value === getValues("password") || "Пароли должны совпадать",
                  })}
                  error={errors && errors.rePassword && errors.rePassword.message}
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
