import React from 'react';
import styles from "./styles.module.scss";
import {Rows2, Rows3} from "lucide-react";
import clsx from "clsx";
import {TypeViewProps} from "../model/types";

const TypeViewButtons = ({typeView, setTypeView}: TypeViewProps) => {
    const handleView = () => setTypeView(true)
    const handleUnView = () => setTypeView(false)

    return (
        <div className={styles.button__types}>
            <button onClick={handleUnView}>
                <Rows2
                    className={clsx(styles.button__type, {
                        [styles.button__type_active]: !typeView,
                    })}
                />
            </button>
            <button onClick={handleView}>
                <Rows3
                    className={clsx(styles.button__type, {
                        [styles.button__type_active]: typeView,
                    })}
                />
            </button>
        </div>
    );
};

export default TypeViewButtons;