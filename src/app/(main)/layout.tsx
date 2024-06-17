import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "@/widgets/general/navbar";
import { Header } from "@/widgets/general/header";
import { NavbarLine } from "@/entities/general/navbarLine";
import { HeaderIntro } from "@/entities/general/headerIntro";
import styles from "./styles.module.scss";
import {cookies} from "next/headers";
import jwt from "jsonwebtoken";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <main className={styles.main}>
         <NavbarLine />
         <Navbar />
         <div className={styles.main__wrapper}>
            <Header />
            <div className={styles.main__content} data-id="main">
               <div className={styles.main__intro}>
                  <HeaderIntro />
               </div>
               {children}
            </div>
         </div>
      </main>
   );
};

export default MainLayout;
