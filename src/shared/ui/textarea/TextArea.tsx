
"use client";

import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import {TextAreaProps} from "@/shared/lib/types";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const {  title, disabled, error, ...rest } = props;

    return (
        <div>
            <label htmlFor={title} className={styles.textarea}>
                <p className={styles.textarea__title}>{title}</p>
                <textarea
                    id={title}
                    className={styles.textarea__input}
                    {...rest}
                    ref={ref}
                    disabled={disabled}
                />
            </label>
            <p className={styles.textarea__error}>максимум 250 символов, минимум 5</p>
        </div>
    );
});

export default TextArea;

TextArea.displayName = "TextArea";
