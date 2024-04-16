"use client";

import React, { useEffect, useRef } from "react";
import { NavbarCategories } from "@/features/navbarCategories";
import { Logo } from "@/entities/logo/index";
import styles from "./styles.module.scss";
import { LogoutBtn } from "@/entities/logoutBtn";

const Navbar = () => {
   const navbarRef = useRef<HTMLDivElement>(null);

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
            <NavbarCategories />
         </div>

         <LogoutBtn />
      </div>
   );
};

export default Navbar;
