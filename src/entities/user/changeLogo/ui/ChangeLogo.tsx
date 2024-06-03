import React, {useState} from 'react';
import Image from "next/image";
import clsx from "clsx";
import {CREATE_ORGANIZATION_NAMES} from "@/features/admin/organizationForm";
import {useThemeStore} from "@/shared/store/themeStore";
import {ChangeLogoProps} from "../model/types";
import styles from "./styles.module.scss";

const ChangeLogo = ({register, setValue}: ChangeLogoProps) => {

    const theme = useThemeStore((state) => state.theme);

    const [image, setImage] = useState<File | null>(null)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files){
            setImage(files[0])
            setValue(CREATE_ORGANIZATION_NAMES.logo, files[0], { shouldValidate: true });
        }
    }

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
                {...register(CREATE_ORGANIZATION_NAMES.logo)}
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