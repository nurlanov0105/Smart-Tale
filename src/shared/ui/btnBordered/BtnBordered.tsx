import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "./styles.scss";

const BtnBordered = ({
   className,
   children,
   ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
   return (
      <button {...props} className={clsx("btn-bordered", className ? className : "")}>
         <span>{children}</span>
      </button>
   );
};

export default BtnBordered;
