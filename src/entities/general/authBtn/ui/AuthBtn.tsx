import { LogIn, LogOut } from "lucide-react";
import React from "react";
import { showModal } from "@/views/modal";
import { EnumTokens, MODAL_KEYS, ROUTES, useAuth } from "@/shared/lib";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";
import clsx from "clsx";
import Link from "next/link";

const AuthBtn = () => {
   const theme = useThemeStore((state) => state.theme);
   const handleLogoutBtn = () => {
      showModal(MODAL_KEYS.confirmationModal, {componentName: MODAL_KEYS.logout});
   };

   const {isAuth} = useAuth();

   return isAuth ? (
      <button className={clsx(styles.button, styles[theme])} onClick={handleLogoutBtn}>
         <span>
            <LogOut />
         </span>
         <p>Выйти</p>
      </button>
   ) : (
      <Link href={ROUTES.SIGN_IN} className={clsx(styles.button, styles[theme])}>
         <span>
            <LogIn />
         </span>
         <span>Войти</span>
      </Link>
   );
};

export default AuthBtn;
