"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/general/navbarCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { AuthBtn } from "@/entities/general/authBtn";
import { SubscribeBox } from "@/entities/user/subscribeBox";

import { LogIn, Moon, ShieldCheck, SunMoon } from "lucide-react";
import { Logo } from "@/entities/general/logo";
import { MARKETPLACE, ROUTES, useAuth, useNavbar } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";

const Navbar = () => {
   // theme
   const theme = useThemeStore((state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);

   const navbarRef = useRef<HTMLDivElement>(null);
   const pathname = usePathname() as string;
   const categoryType = pathname.includes("/admin");

   useEffect(() => {
      if (navbarRef.current && MARKETPLACE.EQUIPMENT === pathname) {
         navbarRef.current.scrollTop = navbarRef.current.scrollHeight;
      }
   }, [pathname]);

   const { hidden, hover, handleMouseOut, handleMouseOver, handleOverlayClick } = useNavbar();

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
               <NavbarCategories />
            </div>
            <div className={styles.navbar__bottom}>
               {!categoryType && <SubscribeBox />}
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
