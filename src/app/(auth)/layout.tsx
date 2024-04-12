import React, { FC } from "react";
import { ChildrenComponent } from "@/shared/lib";

const AuthLayout: FC<ChildrenComponent> = ({ children }) => {
   return (
      <div>
         <h2>AuthLayout</h2>
         {children}
      </div>
   );
};

export default AuthLayout;
