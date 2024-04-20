import React, {FC} from "react";
import { BtnBordered } from "@/shared/ui";
import { ButtonsProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ButtonsList:FC<ButtonsProps> = ({ type, setType, values }) => {
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

export default ButtonsList;
