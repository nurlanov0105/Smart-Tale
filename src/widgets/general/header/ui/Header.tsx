"use client";

import { HeaderIntro } from "@/entities/general/headerIntro";
import { NoticeBtn } from "@/entities/general/noticeBtn";
import { ROUTES, useAuth } from "@/shared/lib";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Search } from "@/features/general/search";
import Link from "next/link";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { LogIn, ShieldCheck } from "lucide-react";

const Header = () => {
   const hidden = useOrdersStore((state) => state.hidden);

   const isAuth = useAuth();

   return (
      <div className={clsx(styles.header, styles.header_mb)}>
         <div className={clsx(styles.header__block, styles.header_left)}>
            <div className={clsx(styles.header__btn, hidden ? styles.header__btn_show : "")}>
               <NavbarPanel />
            </div>

            <HeaderIntro />
            <div className={styles.header__links}>
               <Link href={ROUTES.MODE} className={styles.header__link}>
                  <span>Mode</span>
                  <ShieldCheck />
               </Link>
               <Link href={ROUTES.SIGN_IN} className={styles.header__link}>
                  <span>Login</span>
                  <LogIn />
               </Link>
            </div>
         </div>
         <div className={clsx(styles.header__block, styles.header_right)}>
            <div className={styles.header__links}>
               <Link href={ROUTES.MODE} className={styles.header__link}>
                  <span>Mode</span>
                  <ShieldCheck />
               </Link>
               <Link href={ROUTES.SIGN_IN} className={styles.header__link}>
                  <span>Login</span>
                  <LogIn />
               </Link>
            </div>
            <Search />
            <NoticeBtn />
         </div>
      </div>
   );
};

export default Header;
