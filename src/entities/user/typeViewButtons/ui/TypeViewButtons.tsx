import React from 'react';
import styles from "./styles.module.scss";
import {Rows2, Rows3} from "lucide-react";
import clsx from "clsx";
import {TypeViewProps} from "../model/types";

const TypeViewButtons = ({typeView, setTypeView}: TypeViewProps) => {
    const handleTypeView = () => setTypeView(!typeView);

    return (
        <div className={styles.button__types}>
            <button onClick={handleTypeView}>
                <Rows2
                    className={clsx(styles.button__type, {
                        [styles.button__type_active]: !typeView,
                    })}
                />
            </button>
            <button onClick={handleTypeView}>
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