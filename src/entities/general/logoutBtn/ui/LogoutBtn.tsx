import { LogOut } from "lucide-react";
import React from "react";
import { showModal } from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";
const LogoutBtn = () => {
   const handleLogoutBtn = () => {
      showModal(MODAL_KEYS.logout);
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
