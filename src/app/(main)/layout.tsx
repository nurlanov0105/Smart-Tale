import React, { FC } from "react";
import { Navbar } from "@/widgets/navbar";
import { ChildrenComponent } from "@/shared/lib";

import { Header } from "@/widgets/header";

import styles from "./styles.module.scss";

const MainLayout: FC<ChildrenComponent> = ({ children }) => {
   return (
      <main className={styles.main}>
         <Navbar />
         <div className={styles.main__wrapper}>
            <Header />
            <div className={styles.main__content}>{children}</div>
         </div>
      </main>
   );
};

export default MainLayout;
