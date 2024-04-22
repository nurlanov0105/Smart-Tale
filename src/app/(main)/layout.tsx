import React, {FC, PropsWithChildren} from "react";
import { Navbar } from "@/widgets/general/navbar";
import { Header } from "@/widgets/general/header";
import styles from "./styles.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
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
