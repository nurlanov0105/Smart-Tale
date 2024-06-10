"use client";

import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/lib";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   classType?:
      | "btn_danger"
      | "btn_danger"
      | "btn_bordered"
      | "btn_white"
      | "btn_fixed"
      | "btn_active"
      | "btnBorder"
      | "btnBorder_card"
      | "btnBorder_active";

   children: ReactNode;
}

const Button: FC<IButton> = ({ classType, children, ...props }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <button
         {...props}
         className={clsx(
            classType === "btnBorder" ||
               classType === "btnBorder_card" ||
               classType === "btnBorder_active"
               ? styles.btnBorder
               : styles.btn,
            classType ? styles[classType] : "",

            styles[theme]
         )}>
         <span>{children}</span>
      </button>
   );
};

export default Button;
