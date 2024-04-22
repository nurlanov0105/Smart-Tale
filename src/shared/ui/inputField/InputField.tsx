"use client";

import React, { forwardRef } from "react";
import { InputFieldProps } from "@/shared/lib";
import styles from "./styles.module.scss";
import clsx from "clsx";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const { type, classname, title, disabled, error, isBordered, ...rest } = props;

   const isBorderedClass = (lastClass: string, borderedClass: string) =>
      isBordered ? borderedClass : lastClass;

   return (
      <div className={clsx(classname, styles.fieldWrapper)}>
         <label htmlFor={title} className={isBorderedClass(styles.field, styles.field__bordered)}>
            <p className={styles.field__title}>{title}</p>
            <input
               id={title}
               className={isBorderedClass(styles.field__input, styles.field__input_bordered)}
               {...rest}
               ref={ref}
               disabled={disabled}
               type={type ? type : "text"}
            />
         </label>
         {error && <p className={styles.field__error}>максимум 250 символов, минимум 5</p>}
      </div>
   );
});

export default InputField;

InputField.displayName = "inputField";
