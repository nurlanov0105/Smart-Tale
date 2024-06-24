"use client";

import { HeaderIntro } from "@/entities/general/headerIntro";
import { NoticeBtn } from "@/entities/general/noticeBtn";
import { useThemeEffect } from "@/shared/lib";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Search } from "@/features/general/search";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { Moon, SunMoon } from "lucide-react";
import { useThemeStore } from "@/shared/store/themeStore";


const Header = () => {
   // theme
   const theme = useThemeStore((state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);
   useThemeEffect();
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
                  {theme === "light" ? (
                     <Moon className={styles.header__moon} />
                  ) : (
                     <SunMoon className={styles.header__sun} />
                  )}
               </div>
            </div>
         </div>
         <div className={clsx(styles.header__block, styles.header_right)}>
            <div className={styles.header__links}>
               <div className={clsx(styles.header__theme)} onClick={toggleTheme}>
                  {theme === "light" ? (
                     <Moon className={styles.header__moon} />
                  ) : (
                     <SunMoon className={styles.header__sun} />
                  )}
               </div>
            </div>
            <Search />
            <NoticeBtn />
         </div>
         {/* <div className={styles.header_absolute}>
            {permission === "denied" && renderDeniedNotificationBlock()}
            {permission === "default" && renderAllowNotificationBlock()}
            {permission === "granted" && renderGrantedNotificationBlock()}
         </div> */}
      </header>
   );
};

export default Header;
