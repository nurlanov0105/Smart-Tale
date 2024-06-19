import React, {useState} from 'react';
import Image from "next/image";
import clsx from "clsx";
import {CREATE_ORGANIZATION_NAMES} from "@/features/admin/organizationForm";
import {useThemeStore} from "@/shared/store/themeStore";
import {ChangeLogoProps} from "../model/types";
import styles from "./styles.module.scss";

const ChangeLogo = ({handleFileChange, image}: ChangeLogoProps) => {

    const theme = useThemeStore((state) => state.theme);

    return (
        <>
            <div className={clsx(styles.form__images, styles[theme])}>
                {
                    image &&
                    <div className={styles.form__imageWrapper}>
                        <Image
                            width={100}
                            height={100}
                            className={styles.form__image}
                            src={URL.createObjectURL(image)}
                            alt="equipment"
                        />
                    </div>
                }
                <div className={styles.form__empty}>
                    <label htmlFor="file" className={styles.form__empty__text}>
                        {
                            image ? " Изменить  файл" : " Добавить файл"
                        }
                    </label>
                </div>
            </div>
            <input
                id="file"
                accept="image/*,.png,.jpg"
                className="visually-hidden"
                type="file"
                onChange={handleFileChange}
            />
        </>
    );
};

export default ChangeLogo;