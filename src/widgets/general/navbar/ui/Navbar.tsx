"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/general/navbarCategories";
import { Logo } from "@/entities/general/logo";
import { LogoutBtn } from "@/entities/general/logoutBtn";
// import { SubscribeBox} from "@/entities/user/subscribeBox"

import { usePathname } from "next/navigation";
import { AdminCategories } from "@/features/admin/adminNavCategories";
import { MARKETPLACE, ROUTES } from "@/shared/lib";

import { useOrdersStore } from "@/entities/general/navbarPanel";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import Link from "next/link";
import { LogIn, ShieldCheck } from "lucide-react";
import clsx from "clsx";
import styles from "./styles.module.scss";


const Navbar = () => {
   const hidden = useOrdersStore((state) => state.hidden);
   const hover = useOrdersStore((state) => state.hover);
   const closed = useOrdersStore((state) => state.closed);
   const addHover = useOrdersStore((state) => state.addHover);
   const removeHover = useOrdersStore((state) => state.removeHover);
   const toggleHidden = useOrdersStore((state) => state.toggleHidden);

   const navbarRef = useRef<HTMLDivElement>(null);

   const pathname = usePathname() as string;
   const categoryType = pathname.includes("/admin");

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
         <div
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
         </div>
         <div
            className={clsx(styles.overlay, hidden && styles.overlay_active)}
            onClick={handleOverlayClick}
         />
      </>
   );
};

export default Navbar;
