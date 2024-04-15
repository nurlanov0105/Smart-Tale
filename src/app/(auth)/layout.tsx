import React, { FC } from "react";
import { ChildrenComponent } from "@/shared/lib";
import { AuthCommon } from "@/widgets/authCommon";

const AuthLayout: FC<ChildrenComponent> = ({ children }) => {
   return (
      <div>
         {children}
         {/* <AuthCommon /> */}
      </div>
   );
};

export default AuthLayout;
