import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   classType?:
      | "btn_danger"
      | "btn_danger"
      | "btn_bordered"
      | "btn_white"
      | "btn_fixed"
      | "btnBorder"
      | "btnBorder_card";
   children: ReactNode;
}

const Button: FC<IButton> = ({ classType, children, ...props }) => {
   return (
      <button
         {...props}
         className={clsx(
            classType === "btnBorder" || classType === "btnBorder_card"
               ? styles.btnBorder
               : styles.btn,
            classType ? styles[classType] : ""
         )}>
         <span>{children}</span>
      </button>
   );
};

export default Button;
