import React from 'react';
import {BtnBordered} from "@/shared/ui";
import {ButtonsProps} from "@/entities/buttonsList";
import clsx from "clsx";
import styles from "./styles.module.scss";


const ButtonsList = ({type, setType, values}: ButtonsProps) => {

    const handleType = (newType: string) => setType(newType)
    const isActive = (value: string) => {
        return clsx(styles.order__button, {
            ['active']: value === type,
        })
    }

    return (
        <div className={styles.buttons}>
            {
                values.map(value =>
                    <BtnBordered
                        key={value.postValue}
                        onClick={() => handleType(value.postValue)}
                        className={isActive("equipment")}>{value.value}
                    </BtnBordered>
                )
            }

        </div>
    );
};

export default ButtonsList;