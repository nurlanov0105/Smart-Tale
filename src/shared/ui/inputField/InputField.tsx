"use client";

import React, { forwardRef } from "react";
import { InputFieldProps } from "@/shared/lib";
import styles from "./styles.module.scss";
import clsx from "clsx";
import {GlobalLoading} from "@/shared/ui";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const { type, classname, title, isLoading, defaultChecked, disabled, error, isBordered, value, ...rest } = props;

   const isBorderedClass = (lastClass: string, borderedClass: string, dangerClass?: string) =>
      isBordered ? (error ? dangerClass : borderedClass) : lastClass;

   return (
      <div className={clsx(classname, styles.fieldWrapper)}>
         <label htmlFor={title} className={isBorderedClass(styles.field, styles.field__bordered)}>
            {!isBordered && <p className={styles.field__title}>{title}</p>}
            <input
                id={title}
                value={value}
                className={isBorderedClass(
                  styles.field__input,
                  styles.field__input_bordered,
                  styles.field__input_danger
               )}
               {...rest}
               ref={ref}
               disabled={disabled || isLoading}
               type={type || "text"}
                defaultChecked={defaultChecked}
                aria-busy={isLoading}
            />
         </label>

         {error && <p className={styles.field__error}>{error}</p>}
         {/*<p className={styles.field__length}>5/250</p>*/}
      </div>
   );
});

export default InputField;

InputField.displayName = "inputField";
