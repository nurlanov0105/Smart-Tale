import React, { FC } from "react";
import { BtnBordered } from "@/shared/ui";
import { ButtonsProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Tabs: FC<ButtonsProps> = ({ type, setType, values, variant }) => {
   const handleType = (newType: string) => setType(newType);

   const isActive = (value: string) => {
      if (variant === "secondary"){
         return clsx(styles.button, {
            [styles.button_active]: value === type
         })
      }
      return clsx(styles.order__button, {
         ["active"]: value === type,
      });
   }

   return (
      <div className={styles.buttons}>
         {values.map((value) => (
                variant === "secondary" ?
                 <button
                     key={value.postValue}
                     className={clsx(styles.button, isActive(value.postValue))}
                     onClick={() => handleType(value.postValue)}
                 >
                    {value.value}
                 </button>
                 :
                 <BtnBordered
                     type="button"
                     key={value.postValue}
                     onClick={() => handleType(value.postValue)}
                     className={isActive(value.postValue)}>
                    {value.value}
                 </BtnBordered>
         ))}
      </div>
   );
};

export default Tabs;
