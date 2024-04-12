import React, { FC } from "react";
import { ChildrenComponent } from "@/shared/lib";

const MainLayout: FC<ChildrenComponent> = ({ children }) => {
   return (
      <div>
         <h2>MainLayout</h2>
         {children}
      </div>
   );
};

export default MainLayout;
