import React from "react";
import { BtnBordered } from "@/shared/ui";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { ButtonsProps } from "../model/types";


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
                        className={isActive(value.postValue)}>{value.value}
                    </BtnBordered>
                )
            }

        </div>
    );

>>>>>>> d66f926170f19fe965a2421b35a7281168f30e4f:src/entities/buttonsList/ui/ButtonsList.tsx

};

export default ButtonsList;
