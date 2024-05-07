import React, {FC} from 'react';
import {ChevronLeft} from "lucide-react";
import styles from "./styles.module.scss"
import {useRouter} from "next/navigation";

const AdminBack:FC<{title: string}> = ({title}) => {
    const router = useRouter()
    const handleRoute = () => router.back()
    return (
        <button type="button" onClick={handleRoute} className={styles.back}>
            <span className={styles.back__button}>
                <ChevronLeft />
            </span>
            <h4 className="h4">{title}</h4>
        </button>
    );
};

export default AdminBack;