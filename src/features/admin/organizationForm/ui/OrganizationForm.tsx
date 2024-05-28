"use client"
import React from "react";
import clsx from "clsx";
import { Button, InputField, TextArea } from "@/shared/ui";
import {useThemeStore} from "@/shared/themeStore";
import {ChangeLogo} from "@/entities/user/changeLogo";
import {ValidationsSchemasService} from "@/shared/lib";

import {useCreateOrganization} from "../model/useCreateOrganization";
import {CREATE_ORGANIZATION_NAMES} from "../model/consts";
import styles from "./styles.module.scss";

const OrganizationForm = () => {
    const theme = useThemeStore((state) => state.theme);

    const {
        handleSubmit,
        register,
        isLoading,
        setValue} = useCreateOrganization()

    return (
        <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
            <h4 className="h4">Ваш логотип</h4>
            <ChangeLogo register={register} setValue={setValue}/>
            <div className={styles.form__row}>
                <h4 className="h4">Информация об организации</h4>
                <InputField
                    {...register(CREATE_ORGANIZATION_NAMES.title, ValidationsSchemasService.titleSchema)}
                    classname={styles.form__margin}
                    type="text"
                    title="Название организации"
                />
                <TextArea
                    {...register(CREATE_ORGANIZATION_NAMES.description, ValidationsSchemasService.descriptionSchema)}
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
