"use client";

import React, { forwardRef } from "react";
import { InputFieldProps } from "@/shared/lib";
import styles from "./styles.module.scss";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const { type, title, disabled, error, ...rest } = props;

   return (
      <div className={styles.fieldWrapper}>
         <label className={styles.field}>
            <h4 className={styles.field__title}>{title}</h4>
            <input
               className={styles.field__input}
               {...rest}
               ref={ref}
               type={type ? type : "text"}
               disabled={disabled}
            />
         </label>
         {error && <p className={styles.field__error}>максимум 250 символов, минимум 5</p>}
      </div>
   );
});

export default InputField;

InputField.displayName = "inputField";
