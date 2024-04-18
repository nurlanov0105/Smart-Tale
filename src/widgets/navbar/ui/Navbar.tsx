"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/navbarCategories";
import { Logo } from "@/entities/logo/index";
import { LogoutBtn } from "@/entities/logoutBtn";
import { SubscribeBox } from "@/entities/subscribeBox";

import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { AdminCategories } from "@/features/adminNavCategories";

const Navbar = () => {
   const navbarRef = useRef<HTMLDivElement>(null);

   const pathname = usePathname();
   const categoryType = pathname.includes("/admin");

   useEffect(() => {
      if (navbarRef.current) {
         navbarRef.current.scrollTop = navbarRef.current.scrollHeight;
      }
   }, []);

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
