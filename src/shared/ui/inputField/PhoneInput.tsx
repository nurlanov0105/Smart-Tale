"use client"

import React from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import  PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import {COUNTRIES} from "@/shared/lib";
import type {InputPhoneProps} from "@/shared/lib/types/types";

import 'react-phone-number-input/style.css';
import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";

const InputPhone = ({control, classname, error, isDisabled}: InputPhoneProps) => {
    const validate = (value: string) => {
        return isValidPhoneNumber(`${value}`) || "Неверный формат номера"
    }
    const theme = useThemeStore(state => state.theme)

    return (
        <div className={styles.fieldWrapper}>
            <PhoneInputWithCountry
                international
                limitMaxLength={true}
                countries={COUNTRIES}
                defaultCountry="KG"
                disabled={isDisabled}
                name="tel"
                control={control}
                rules={{
                    required: "Это поле обязательно для заполнения",
                    validate: (value: string) => validate(value)
                }}
                className={clsx(styles.field__input_bordered, classname, styles[theme], error && styles.field__input_danger)}
            />

            {error && <p className={clsx(styles.field__phoneError)}>{error}</p>}
        </div>
    );
};

export default InputPhone;