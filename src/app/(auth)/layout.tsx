import React, { FC, PropsWithChildren } from "react";
import { AuthCommon } from "@/widgets/general/authCommon";
import styles from "./styles.module.scss";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
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
