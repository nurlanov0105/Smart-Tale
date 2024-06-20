"use client";

import { HeaderIntro } from "@/entities/general/headerIntro";
import { NoticeBtn } from "@/entities/general/noticeBtn";
import { ROUTES, useAuth, useThemeEffect } from "@/shared/lib";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Search } from "@/features/general/search";
import Link from "next/link";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { LogIn, Moon, ShieldCheck, SunMoon } from "lucide-react";
import { useThemeStore } from "@/shared/store/themeStore";
import { useEffect, useState } from "react";
// import { onMessageListener, requestForToken } from "../../../../../firebase-config";
import { toast } from "react-toastify";

const Header = () => {
   // theme
   const theme = useThemeStore((state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);
   const isSubscribed = true;

   useThemeEffect();

   // navbar
   const hidden = useOrdersStore((state) => state.hidden);

   // FCM state
   // const [notification, setNotification] = useState<{ title: string; body: string } | null>(null);

   // useEffect(() => {
   //    requestForToken();

   //    const unsubscribe = onMessageListener()
   //       .then((payload: any) => {
   //          setNotification({
   //             title: payload.notification.title,
   //             body: payload.notification.body,
   //          });
   //          toast.info(`${payload.notification.title} - ${payload.notification.body}`);
   //       })
   //       .catch((err) => console.log("failed: ", err));

   //    return () => {
   //       // @ts-ignore
   //       unsubscribe();
   //    };
   // }, []);

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
      </header>
   );
};

export default Header;
