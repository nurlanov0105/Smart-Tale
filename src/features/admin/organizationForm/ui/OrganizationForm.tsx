"use client"
import React, {useState} from "react";
import { Button, InputField, TextArea } from "@/shared/ui";
import {useThemeStore} from "@/shared/themeStore";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {useCreateOrganization} from "@/features/admin/organizationForm/model/useCreateOrganization";
import {descriptionSchema, titleSchema} from "@/features/user/orderForm/model/validationSchema";

const OrganizationForm = () => {
    const theme = useThemeStore((state) => state.theme);
    const [image, setImage] = useState<File | null>(null)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files){
            setImage(files[0])
            console.log(files[0])
            setValue("logo", files[0], { shouldValidate: true });
        }
    }


    const {
        handleSubmit,
        register,
        isLoading,
        setValue} = useCreateOrganization()

    return (
        <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
            <h4 className="h4">Ваш логотип</h4>
            <div className={styles.form__images}>
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
                {...register("logo")}
                id="file"
                accept="image/*,.png,.jpg"
                className="visually-hidden"
                type="file"
                onChange={handleFileChange}
            />
            <div className={styles.form__row}>
                <h4 className="h4">Информация об организации</h4>
                <InputField
                    {...register("title", titleSchema)}
                    classname={styles.form__margin}
                    disabled={false}
                    type="text"

                    title="Название организации"
                />
                <TextArea
                    {...register("description", descriptionSchema)}
                    isDisabled={false}
                    title="Описание организации"
                    type="default"
                />
            </div>
            <div className={styles.form__button}>
                <Button type="submit">Создать организацию</Button>
            </div>
        </form>
    );
};

export default OrganizationForm;
