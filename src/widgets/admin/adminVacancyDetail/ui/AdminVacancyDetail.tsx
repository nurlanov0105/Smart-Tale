"use client"
import React from 'react';
import {Controller} from "react-hook-form";
import clsx from "clsx";
import {showModal} from "@/views/modal";
import {Button, GlobalLoading, InputField, Select, TextArea} from "@/shared/ui";
import {useThemeStore} from "@/shared/store/themeStore";
import {
    cityFilter,
    currencies, experienceFilter,
    graphicsFilter,
    MODAL_KEYS,
    SELECT_TYPES,
    ValidationsSchemasService
} from "@/shared/lib";

import {useVacancyDetails} from "../model/useVacancyDetails";
import {useInitialVacancyData} from "../model/useInitialData";
import {VACANCY_FORM_NAMES} from "../model/consts";
import styles from "./styles.module.scss"

const AdminVacancyDetail = () => {
    const theme = useThemeStore((state) => state.theme);

    const handleOpenResponses = () => {
        showModal(MODAL_KEYS.responsesUsers)
    }
    const handleDelete = () => {
        showModal(MODAL_KEYS.confirmationModal, {componentName: MODAL_KEYS.deleteAnnouncement})
    }

    const {
        vacancy,
        isSuccess,
        isSubmitting,
        isDirty,
        isLoading,
        isValid,

        handleSubmit,
        reset,
        register,
        control,
        errors
    } = useVacancyDetails()

    useInitialVacancyData({vacancy, reset, isSuccess})

    if (isLoading) return <GlobalLoading type="full"/>

    const handleReset = () => reset()

    return (
        <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
            <h4 className="h4">Название должности</h4>
            <div className={styles.form__row}>
                <InputField
                    {...register(VACANCY_FORM_NAMES.job_title, ValidationsSchemasService.titleSchema)}
                    classname={styles.form__input}
                    isBordered={true}
                    type="text"
                />
                <h4 className="h4">Расскажите про вакансию</h4>
                <div className={styles.form__margin}>
                    <TextArea
                        {...register(VACANCY_FORM_NAMES.description, ValidationsSchemasService.descriptionSchema)}
                        classname={styles.form__area}
                        type="default"
                    />
                </div>
                <div className={styles.form__block}>
                    <h4 className="h4">График работы</h4>
                    <Controller
                        name={VACANCY_FORM_NAMES.schedule}
                        control={control}
                        defaultValue={graphicsFilter[0]}
                        rules={{ required: "Выберите график работы" }}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onChange={field.onChange}
                                data={graphicsFilter}
                                type={SELECT_TYPES.vacancy}
                                error={errors?.schedule?.message}
                            />
                        )}
                    />

                </div>

                <div className={styles.form__block}>
                    <h4 className="h4">Заработная плата</h4>
                    <div className={styles.form__salary}>
                        <InputField
                            {...register(VACANCY_FORM_NAMES.min_salary, ValidationsSchemasService.priceSchema)}
                            classname={styles.form__inputBorder}
                            title="от "
                            type="number"

                        />
                        <InputField
                            {...register(VACANCY_FORM_NAMES.max_salary, ValidationsSchemasService.priceSchema)}
                            classname={styles.form__inputBorder}
                            title="до "
                            type="number"
                        />
                        <div>

                            <Controller
                                name={VACANCY_FORM_NAMES.currency}
                                defaultValue={currencies[0]}
                                control={control}
                                rules={{ required: "Выберите валюту" }}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onChange={field.onChange}
                                        data={currencies}
                                        type={SELECT_TYPES.vacancy}
                                        error={errors?.currency?.message}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.form__block}>
                    <h4 className="h4">Город</h4>
                    <Controller
                        name={VACANCY_FORM_NAMES.location}
                        defaultValue={cityFilter[0]}
                        control={control}
                        rules={{ required: "Выберите город" }}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onChange={field.onChange}
                                data={cityFilter}
                                type={SELECT_TYPES.vacancy}
                                error={errors?.location?.message}
                            />
                        )}
                    />
                </div>
                <div className={styles.form__filter}>
                    <h4 className="h4">Опыт работы</h4>
                    {
                        experienceFilter.map(item =>
                            <label key={item.postValue} className={styles.form__label}>
                                <span>
                                    <InputField
                                        {...register(VACANCY_FORM_NAMES.experience)}
                                        value={item.postValue}
                                        isBordered={true}
                                        type="radio"
                                        classname={styles.form__radio}
                                    />
                                </span>
                                <p>{item.value}</p>
                            </label>
                        )
                    }
                </div>

            </div>

            <div className={styles.form__btnsWrapper}>
                <Button onClick={handleOpenResponses} type="button">Посмотреть на отклики</Button>
                <div className={styles.form__btns}>
                    <Button onClick={handleDelete} type="button" className="btn_danger">Удалить вакансию</Button>
                    {
                        isDirty && <Button onClick={handleReset} className="btn_bordered" type="button">Отменить изменения</Button>
                    }
                    <Button disabled={!isDirty || !isValid || isSubmitting} type="submit">{
                        isSubmitting ? "Загрузка..." : "Изменить"
                    }</Button>
                </div>
            </div>
        </form>
    );
};

export default AdminVacancyDetail;