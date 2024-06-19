"use client"
import React, {useCallback, useState} from "react";
import clsx from "clsx";
import {Button, GlobalLoading, InputField, TextArea} from "@/shared/ui";
import {useThemeStore} from "@/shared/store/themeStore";
import {ChangeLogo} from "@/entities/user/changeLogo";
import {MODAL_KEYS, ValidationsSchemasService} from "@/shared/lib";
import {UPDATE_ORGANIZATION_NAMES} from "../model/consts";
import {useUpdateOrganization} from "../model/useUpdateOrganization";
import {useInitialOrganizationSettings} from "../model/useInitialData";
import styles from "./styles.module.scss";
import {showModal} from "@/views/modal";
import {useParams} from "next/navigation";
import {CREATE_ORGANIZATION_NAMES} from "@/features/admin/organizationForm";

const OrganizationSettings = () => {
    const theme = useThemeStore((state) => state.theme);
    const [isEdited, setIsEdited] = useState(false)
    const {slug} = useParams()

    const {
        data,
        isSubmitting,
        isLoading,
        isSuccess,

        handleSubmit,
        watch,
        reset,
        register,
        setValue} = useUpdateOrganization(isEdited)

    const image = watch(UPDATE_ORGANIZATION_NAMES.logo)

    useInitialOrganizationSettings({reset, data, isSuccess})

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files){
            setIsEdited(true)
            setValue(CREATE_ORGANIZATION_NAMES.logo, files[0], { shouldValidate: true });
        }
    }, [setValue])

    const handleDelete = useCallback(() => {
        showModal(MODAL_KEYS.confirmationModal, {slug: slug.toString(), componentName: MODAL_KEYS.deleteOrganization});
    }, [slug]);

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
            <div className={styles.form__button}>
                <Button onClick={handleDelete} type="button" classType="btn_danger">Удалить организацию</Button>
                <Button type="submit">{
                    isSubmitting ? "Загрузка..." : "Изменить организацию"
                }</Button>
            </div>
        </form>
    );
};

export default OrganizationSettings;
