"use client";

import React, { forwardRef } from "react";
import { InputFieldProps } from "@/shared/lib";
import styles from "./styles.module.scss";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const {  type, classname, title, disabled, error, ...rest } = props;

   return (
       <div className={classname}>
           <label htmlFor={title} className={styles.field}>
               <p className={styles.field__title}>{title}</p>
               <input
                   id={title}
                   className={styles.field__input}
                   {...rest}
                   ref={ref}
                   disabled={disabled}
                   type={type ? type : "text"}
               />
           </label>
           {
               error && <p className={styles.field__error}>максимум 250 символов, минимум 5</p>
           }
       </div>
   );
});

export default InputField;

InputField.displayName = "InputField";
