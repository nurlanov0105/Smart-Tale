"use client";

import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import likeImage from "@@/like.svg";
import Image from "next/image";
import { InputFieldProps } from "@/shared/lib";

const Field = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
   const { placeholder, type, disabled, icon, error, ...rest } = props;

   return (
      <div>
         <input
            className={styles.input}
            {...rest}
            ref={ref}
            placeholder={placeholder}
            disabled={disabled}
         />
         <div>
            <Image src={icon} alt="asd" width={40} height={40} />
            <Image src={likeImage} alt="asd" width={40} height={40} />
         </div>
      </div>
   );
});

export default Field;

Field.displayName = "field";
