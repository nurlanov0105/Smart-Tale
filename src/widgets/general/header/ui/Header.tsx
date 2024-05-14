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
import { LogIn, Moon, ShieldCheck, SunMoon } from "lucide-react";
import { useThemeStore } from "@/shared/themeStore";
import { useEffect } from "react";

const Header = () => {
   // theme
   const theme = useThemeStore((state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);
   const isSubscribed = true;

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   // navbar
   const hidden = useOrdersStore((state) => state.hidden);

   return (
      <header className={clsx(styles.header, styles.header_mb, styles[theme])}>
         <div className={clsx(styles.header__block, styles.header_left)}>
            <div className={clsx(styles.header__btn, hidden ? styles.header__btn_show : "")}>
               <NavbarPanel />
            </div>

            <div className={styles.header__intro}>
               <HeaderIntro />
            </div>
            <div className={styles.header__links}>
               <div className={clsx(styles.header__theme)} onClick={toggleTheme}>
                  {theme === "light" ? <Moon /> : <SunMoon />}
               </div>
            </div>
         </div>
         <div className={clsx(styles.header__block, styles.header_right)}>
            <div className={styles.header__links}>
               <div className={clsx(styles.header__theme)} onClick={toggleTheme}>
                  {theme === "light" ? <Moon /> : <SunMoon />}
               </div>
            </div>
            <Search />
            <NoticeBtn />
         </div>
      </header>
   );
};

export default Header;
