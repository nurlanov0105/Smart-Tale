import React, {FC} from 'react';
import styles from "./styles.module.scss";

const GlobalLoading:FC<{type?: "full" | "default"}> = ({type = "default"}) => {
    return (
        <div className={styles[type]}>
            <div className="spinner" />
        </div>
    )
}

export default GlobalLoading;