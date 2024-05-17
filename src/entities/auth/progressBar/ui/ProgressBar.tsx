import React, {FC} from 'react';
import {useProgress} from "@/features/auth/model/hooks";
import styles from "./styles.module.scss";

const ProgressBar:FC<{isLoading: boolean}> = ({isLoading}) => {

    const { progress } = useProgress(isLoading);

    return (
        <div className={styles.bar}>
            <div className={styles.bar__progress} style={{width: `${progress}%`}}></div>
        </div>
    );
};

export default ProgressBar;