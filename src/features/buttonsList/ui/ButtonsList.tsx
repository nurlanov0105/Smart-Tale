import React from "react";
import { BtnBordered } from "@/shared/ui";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { ButtonsProps } from "../model/types";

const ButtonsList = ({ type, setType, values }: ButtonsProps) => {
   const handleType = (newType: string) => setType(newType);

   const isActive = (value: string) => {
      return clsx(styles.order__button, {
         ["active"]: value === type,
      });
   };

   return (
      <div className={styles.buttons}>
         {values.map((value) => (
            <BtnBordered
               key={value.postValue}
               onClick={() => handleType(value.postValue)}
               className={isActive(value.postValue)}>
               {value.value}
            </BtnBordered>
         ))}
      </div>
   );
};

export default ButtonsList;
