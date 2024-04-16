import React from 'react';
import {X} from "lucide-react";
import styles from "./styles.module.scss"
import {useModalStore} from "@/widgets/modal/model/modalState";

const CloseModalBtn = () => {
    const closeModal = useModalStore(state => state.closeModal)
    return (
        <button onClick={closeModal} className={styles.button}>
            <span className={styles.icon}><X/></span>
        </button>
    );
};

export default CloseModalBtn;