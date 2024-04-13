import React from "react";
import {NavbarCategories} from "@/features/navbarCategories";
import {Logo} from "@/entities/logo/index"
import {Logout} from "@/features/logout";
import styles from "./styles.module.scss"



const Navbar = () => {

   return <div className={styles.navbar}>
      <div>
         <Logo/>
         <NavbarCategories/>
      </div>
      <Logout/>
   </div>
};

export default Navbar



