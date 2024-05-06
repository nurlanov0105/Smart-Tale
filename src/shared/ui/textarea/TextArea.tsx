
"use client";

import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import {TextAreaProps} from "@/shared/lib/types";
import clsx from "clsx";
import {useThemeStore} from "@/shared/themeStore";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const theme = useThemeStore((state) => state.theme);
    const {  title, classname, isBordered, disabled, error, ...rest } = props;
    const isBorderedClass = (lastClass: string, borderedClass: string) =>
        isBordered ? borderedClass : lastClass

    return (
        <>
            <label htmlFor={title} className={clsx(isBorderedClass(styles.textarea, styles.textarea__bordered), styles[theme])}>
                <p className={styles.textarea__title}>{title}</p>
                <textarea
                    id={title}
                    className={isBorderedClass(styles.textarea__input, styles.textarea__borderedArea)}
                    {...rest}
                    ref={ref}
                    disabled={disabled}
                />
            </label>
            {
                error && <p className={styles.textarea__error}>максимум 250 символов, минимум 5</p>
            }
        </>
    );
});

export default TextArea;

TextArea.displayName = "TextArea";
