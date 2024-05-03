"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/general/navbarCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShallow } from "zustand/react/shallow";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { AdminCategories } from "@/features/admin/adminNavCategories";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { LogoutBtn } from "@/entities/general/logoutBtn";
// import { SubscribeBox} from "@/entities/user/subscribeBox"

import { LogIn, Moon, ShieldCheck, SunMoon } from "lucide-react";
import { Logo } from "@/entities/general/logo";
import { MARKETPLACE, ROUTES } from "@/shared/lib";
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

   const { hidden, hover, addHover, removeHover, toggleHidden } = useOrdersStore(
      useShallow((state) => ({
         hidden: state.hidden,
         hover: state.hover,
         addHover: state.addHover,
         removeHover: state.removeHover,
         toggleHidden: state.toggleHidden,
      }))
   );

   useEffect(() => {
      if (navbarRef.current && MARKETPLACE.EQUIPMENT === pathname) {
         navbarRef.current.scrollTop = navbarRef.current.scrollHeight;
      }
   }, [pathname]);
   const handleMouseOver = () => {
      if (hidden) {
         addHover();
      }
   };
   const handleMouseOut = () => {
      if (hidden && hover) {
         removeHover();
      }
   };
   const handleOverlayClick = () => {
      toggleHidden();
   };
   return (
      <>
         <nav
            className={clsx(
               styles.navbar,
               hidden ? styles.navbar_hidden : "",
               hover ? styles.navbar_hover : ""
               // closed ? styles.navbar_closed : ""
            )}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <div className={styles.logoLine}>
               <Logo />
               <div className={styles.navbar__links}>
                  <Link href={ROUTES.MODE} className={styles.navbar__link}>
                     <span>Mode</span>
                     <ShieldCheck />
                  </Link>
                  <Link href={ROUTES.SIGN_IN} className={styles.navbar__link}>
                     <span>Login</span>
                     <LogIn />
                  </Link>
                  <div className={clsx(styles.navbar__theme, styles[theme])} onClick={toggleTheme}>
                     {theme === "light" ? <Moon /> : <SunMoon />}
                  </div>
               </div>
               <div className={styles.navbar__btn}>
                  <NavbarPanel />
               </div>
            </div>
            <div ref={navbarRef} className={styles.navbar__scrollbox}>
               {categoryType ? <AdminCategories /> : <NavbarCategories />}
            </div>
            <div className={styles.navbar__bottom}>
               {/* {!categoryType && <SubscribeBox />} */}
               <LogoutBtn />
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
