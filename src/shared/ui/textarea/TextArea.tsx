
"use client";

import React, { forwardRef } from "react";
import {TextAreaProps} from "@/shared/lib/types/types";
import clsx from "clsx";
import {useThemeStore} from "@/shared/themeStore";
import styles from "./styles.module.scss";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {

    const theme = useThemeStore((state) => state.theme);

    const {
        title,
        classname,
        isDisabled,
        error,
        type,
        ...rest
    } = props;


    return (
        <>
            <label htmlFor={title} className={clsx(styles[theme], styles.textarea__label, styles[type])}>
                <p className={styles.textarea__title}>{title}</p>
                <textarea
                    className={clsx(styles.textarea, styles[`${type}__textArea`])}
                    id={title}
                    {...rest}
                    ref={ref}
                    disabled={isDisabled}
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
