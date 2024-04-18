import { LogOut } from "lucide-react";
import React from "react";
import styles from "./styles.module.scss";
import { showModal } from "@/widgets/modal";
const LogoutBtn = () => {
   const handleLogoutBtn = () => {
      showModal("LogoutModal");
   };

   return (
      <button className={styles.button} onClick={handleLogoutBtn}>
         <span>
            <LogOut />
         </span>
         <p>Выйти</p>
      </button>
   );
};

export default LogoutBtn;
