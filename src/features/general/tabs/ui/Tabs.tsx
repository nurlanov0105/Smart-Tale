import React, { FC } from "react";
import { Button } from "@/shared/ui";
import { ButtonsProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";

const Tabs: FC<ButtonsProps> = ({ type, setType, values, variant }) => {
   const theme = useThemeStore((state) => state.theme);
   const handleType = (newType: string) => setType(newType);

   const isActive = (value: string) => {
      if (variant === "secondary") {
         return clsx(styles.button, {
            [styles.button_active]: value === type,
         });
      }
      return clsx(styles.order__button, {
         ["active"]: value === type,
      });
   };

   return (
      <div className={clsx(styles.buttons, styles[theme])}>
         {values.map((value) =>
            variant === "secondary" ? (
               <button
                  key={value.postValue}
                  className={clsx(styles.button, isActive(value.postValue))}
                  onClick={() => handleType(value.postValue)}>
                  {value.value}
               </button>
            ) : (
               <Button
                  type="button"
                  key={value.postValue}
                  classType="btnBorder"
                  onClick={() => handleType(value.postValue)}
                  className={isActive(value.postValue)}>
                  {value.value}
               </Button>
            )
         )}
      </div>
   );
};

export default Tabs;
