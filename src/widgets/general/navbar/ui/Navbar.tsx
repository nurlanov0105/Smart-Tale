"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/general/navbarCategories";
import { Logo } from "@/entities/general/logo";
import { LogoutBtn } from "@/entities/general/logoutBtn";
// import { SubscribeBox} from "@/entities/user/subscribeBox"

import { usePathname } from "next/navigation";
import { AdminCategories } from "@/features/admin/adminNavCategories";
import { MARKETPLACE } from "@/shared/lib";
import styles from "./styles.module.scss";

const Navbar = () => {
   const navbarRef = useRef<HTMLDivElement>(null);

   const pathname = usePathname() as string;
   const categoryType = pathname.includes("/admin");

   useEffect(() => {
      if (navbarRef.current && MARKETPLACE.EQUIPMENT === pathname) {
         navbarRef.current.scrollTop = navbarRef.current.scrollHeight;
      }
   }, [pathname]);

   return (
      <div className={styles.navbar}>
         <div className={styles.logoLine}>
            <Logo />
         </div>
         <div ref={navbarRef} className={styles.navbar__scrollbox}>
            {categoryType ? <AdminCategories /> : <NavbarCategories />}
         </div>

         <div className={styles.navbar__bottom}>
            {/* {!categoryType && <SubscribeBox />} */}

            <LogoutBtn />
         </div>
      </div>
   );
};

export default Navbar;
