import React from "react";
import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { closeModal } from "@/views/modal";

const CloseModalBtn = () => {
   return (
      <button onClick={closeModal} className={styles.button}>
         <span className={styles.icon}>
            <X />
         </span>
      </button>
   );
};

export default CloseModalBtn;
