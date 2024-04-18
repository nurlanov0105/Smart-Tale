"use client"

import React from 'react';
import {Button, InputField, TextArea} from "@/shared/ui";
import styles from "./styles.module.scss";

const PositionForm = () => {
    return (
        <form className={styles.position}>
            <div className={styles.position__row}>
                <h4 className="h4">Организация</h4>
                <InputField isBordered={true}/>

                <h4 className="h4">Создание должности</h4>
                <InputField
                    title="Название"
                    type="email"
                />
                <TextArea
                    title="Описание"
                />
            </div>

            <div className={styles.position__btn}>
                <Button>Создать</Button>
            </div>
        </form>
    );
};

export default PositionForm;