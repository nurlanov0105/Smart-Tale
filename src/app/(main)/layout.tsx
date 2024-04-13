import React, { FC } from "react";
import { ChildrenComponent } from "@/shared/lib";
import {Navbar} from "@/widgets/navbar/index"

const MainLayout: FC<ChildrenComponent> = ({ children }) => {
   return (
      <div style={{
          display: "grid",
          gridTemplateColumns: "25rem auto"
      }}>
         <Navbar/>
         {children}
      </div>
   );
};

export default MainLayout;
