"use client";

import React, { forwardRef } from "react";
import { InputFieldProps } from "@/shared/lib";
import styles from "./styles.module.scss";

const Field = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const { type, title, disabled, error, ...rest } = props;

   return (
      <>
         <div className={styles.field}>
            <p className={styles.field__title}>{title}</p>
            <input className={styles.field__input} {...rest} ref={ref} disabled={disabled} />
         </div>
         <p className={styles.field__error}>максимум 250 символов, минимум 5</p>
      </>
   );
});

export default Field;

Field.displayName = "field";
