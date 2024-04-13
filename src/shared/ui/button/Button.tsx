import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "./styles.scss";

const Button = ({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
   return (
      <button {...props} className={clsx("btn", className ? className : "")}>
         <span>{children}</span>
      </button>
   );
};

export default Button;
