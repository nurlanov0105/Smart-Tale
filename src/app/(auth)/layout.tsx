import React, { FC } from "react";
import { ChildrenComponent } from "@/shared/lib";
import { AuthCommon } from "@/widgets/authCommon";

import styles from "./styles.module.scss";

const AuthLayout: FC<ChildrenComponent> = ({ children }) => {
   return (
      <main className={styles.main}>
         <div className={styles.main__left}>
            <div className={styles.main__inner}>{children}</div>
         </div>
         <AuthCommon />
      </main>
   );
};

export default AuthLayout;
