"use client"
import React, {useCallback, useState} from "react";
import {useFormContext, useWatch} from "react-hook-form";
import clsx from "clsx";

import {GlobalLoading, InputField, TextArea} from "@/shared/ui";
import {useThemeStore} from "@/shared/store/themeStore";
import {ChangeLogo} from "@/entities/user/changeLogo";
import { ValidationsSchemasService} from "@/shared/lib";

import {UPDATE_ORGANIZATION_NAMES} from "../model/consts";
import {useUpdateOrganization} from "../model/useUpdateOrganization";
import {useInitialOrganizationSettings} from "../model/useInitialData";
import OrganizationButtons from "./OrganizationButtons";
import type {UpdateOrganizationTypes} from "../model/types";
import styles from "./styles.module.scss";

const OrganizationSettings = () => {
    const theme = useThemeStore((state) => state.theme);
    const [isEdited, setIsEdited] = useState(false)

    const {
        reset,
        register,
        control,
        setValue,
        watch
    } = useFormContext<UpdateOrganizationTypes>()

    const {
        data,
        isLoading,
        isSuccess,
        isSubmitting,
        handleSubmit,
    } = useUpdateOrganization(isEdited)

    const image = useWatch({control, name: UPDATE_ORGANIZATION_NAMES.logo})

    useInitialOrganizationSettings({reset, data, isSuccess})

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files){
            setIsEdited(true)
            setValue(UPDATE_ORGANIZATION_NAMES.logo, files[0], { shouldValidate: true, shouldDirty: true });
        }
    }, [setValue])

    if(isLoading) return <GlobalLoading type="full"/>

    return (
        <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
            <h4 className="h4">Ваш логотип</h4>
            <ChangeLogo image={image} handleFileChange={handleFileChange}/>
            <div className={styles.form__row}>
                <h4 className="h4">Информация об организации</h4>
                <InputField
                    {...register(UPDATE_ORGANIZATION_NAMES.title, ValidationsSchemasService.titleSchema)}
                    classname={styles.form__margin}
                    type="text"
                    title="Название организации"
                />
                <TextArea
                    {...register(UPDATE_ORGANIZATION_NAMES.description, ValidationsSchemasService.descriptionSchema)}
                    title="Описание организации"
                    type="default"
                />
            </div>
            <OrganizationButtons ownerSlug={data?.owner?.slug} isSubmitting={isSubmitting}/>
        </form>
    );
};

export default OrganizationSettings;
