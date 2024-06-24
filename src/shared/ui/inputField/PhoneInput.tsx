"use client"

import React from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import  PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import {COUNTRIES} from "@/shared/lib";
import type {InputPhoneProps} from "@/shared/lib/types/types";

import 'react-phone-number-input/style.css';
import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/store/themeStore";
import clsx from "clsx";

const InputPhone = ({control, classname, error, isDisabled, defaultValue}: InputPhoneProps) => {
    const validate = (value: string) => {
        return isValidPhoneNumber(`${value}`) || "Неверный формат номера"
    }
    const theme = useThemeStore(state => state.theme)

    const rules = () => {
        if (isDisabled) return undefined

        return {
            required: "Это поле обязательно для заполнения",
            validate: (value: string) => validate(value)
        }
    }

    return (
        <div className={styles.fieldWrapper}>
            <PhoneInputWithCountry
                international
                defaultValue={defaultValue}
                limitMaxLength={true}
                countries={COUNTRIES}
                defaultCountry="KG"
                disabled={isDisabled}
                name="tel"
                control={control}
                rules={rules()}
                className={clsx(styles.field__input_bordered, classname, styles[theme], error && styles.field__input_danger)}
            />

            {error && <p className={clsx(styles.field__phoneError)}>{error}</p>}
        </div>
    );
};

export default InputPhone;