"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/general/navbarCategories";
import { usePathname } from "next/navigation";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { AuthBtn } from "@/entities/general/authBtn";
import { SubscribeBox } from "@/entities/user/subscribeBox";
import { Logo } from "@/entities/general/logo";
import { useThemeStore } from "@/shared/store/themeStore";
import { MARKETPLACE, ROUTES, useAuth, useNavbar, useSubscribed } from "@/shared/lib";

import { LogIn, Moon, ShieldCheck, SunMoon } from "lucide-react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { GlobalLoading } from "@/shared/ui";

const Navbar = () => {
   // theme
   const theme = useThemeStore((state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);

   const navbarRef = useRef<HTMLDivElement>(null);
   const pathname = usePathname();
   const categoryType = pathname.includes("/admin");

   const { isAuth, isLoading } = useAuth();

   const { isSubscribe, isLoading: isLoadingSubscribe } = useSubscribed();

   const { hidden, hover, handleMouseOut, handleMouseOver, handleOverlayClick } = useNavbar();

   useEffect(() => {
      if (navbarRef.current && MARKETPLACE.EQUIPMENT === pathname) {
         navbarRef.current.scrollTop = navbarRef.current.scrollHeight;
      }
   }, [pathname]);

   if (isLoading) return <div className={styles.navbar}></div>;

   return (
      <>
         <nav
            className={clsx(
               styles.navbar,
               hidden ? styles.navbar_hidden : "",
               hover ? styles.navbar_hover : ""
            )}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <div className={styles.logoLine}>
               <Logo />
               <div className={styles.navbar__links}>
                  <div className={clsx(styles.navbar__theme, styles[theme])} onClick={toggleTheme}>
                     {theme === "light" ? <Moon /> : <SunMoon />}
                  </div>
               </div>
               <div className={styles.navbar__btn}>
                  <NavbarPanel />
               </div>
            </div>
            <div ref={navbarRef} className={styles.navbar__scrollbox}>
               {isLoadingSubscribe ? (
                  <GlobalLoading type="default" />
               ) : (
                  <NavbarCategories isAuth={isAuth} />
               )}
            </div>
            <div className={styles.navbar__bottom}>
               {!categoryType && !isSubscribe && <SubscribeBox />}
               <AuthBtn />
            </div>
         </nav>
         <div
            className={clsx(styles.overlay, hidden && styles.overlay_active)}
            onClick={handleOverlayClick}
         />
      </>
   );
};
export default Navbar;
