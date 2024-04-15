import React from "react";
import { NavbarCategories } from "@/features/navbarCategories";
import { Logo } from "@/entities/logo/index";
import styles from "./styles.module.scss";
import { LogoutBtn } from "@/entities/logoutBtn";

const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <Logo />
         <div className={styles.navbar__scrollbox}>
            <NavbarCategories />
         </div>

         <LogoutBtn />
      </div>
   );
};

export default Navbar;
