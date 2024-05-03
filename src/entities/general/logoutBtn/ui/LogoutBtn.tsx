import { LogOut } from "lucide-react";
import React from "react";
import { showModal } from "@/views/modal";
import { MODAL_KEYS } from "@/shared/lib";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
const LogoutBtn = () => {
   const theme = useThemeStore((state) => state.theme);
   const handleLogoutBtn = () => {
      showModal(MODAL_KEYS.logout);
   };

   return (
      <button className={clsx(styles.button, styles[theme])} onClick={handleLogoutBtn}>
         <span>
            <LogOut />
         </span>
         <p>Выйти</p>
      </button>
   );
};

export default LogoutBtn;
