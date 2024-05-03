import React from "react";
import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { closeModal } from "@/views/modal";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const CloseModalBtn = () => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <button onClick={closeModal} className={clsx(styles.button, styles[theme])}>
         <span className={styles.icon}>
            <X />
         </span>
      </button>
   );
};

export default CloseModalBtn;
