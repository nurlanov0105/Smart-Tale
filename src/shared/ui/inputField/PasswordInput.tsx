"use client";

import React, { forwardRef, useState } from "react";
import Image from "next/image";
import { InputFieldProps } from "@/shared/lib";

import showIcon from "@@/imgs/form/show.svg";
import hideIcon from "@@/imgs/form/hide.svg";
import clsx from "clsx";
import styles from "./styles.module.scss";

const PasswordField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const { classname, title, disabled, error, ...rest } = props;
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   return (
      <div className={clsx(classname, styles.fieldWrapper)}>
         <label htmlFor={title} className={clsx(styles.field__bordered)}>
            <p className={styles.field__title}>{title}</p>
            <div className={styles.field__inputWrapper}>
               <input
                  id={title}
                  className={clsx(
                     styles.field__input,
                     styles.field__input_psw,
                     styles.field__input_bordered,
                     error && styles.field__input_danger
                  )}
                  {...rest}
                  ref={ref}
                  disabled={disabled}
                  type={showPassword ? "text" : "password"}
               />
               <Image
                  src={showPassword ? hideIcon : showIcon}
                  alt="toggle visibility"
                  onClick={togglePasswordVisibility}
                  className={styles.field__toggleIcon}
               />
            </div>
         </label>
         {error && <p className={styles.field__error}>{error}</p>}
      </div>
   );
});

export default PasswordField;

PasswordField.displayName = "passwordField";
