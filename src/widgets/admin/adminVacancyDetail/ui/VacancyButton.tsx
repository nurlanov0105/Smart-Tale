import React, {FC} from 'react';
import {useFormContext} from "react-hook-form";
import {Button} from "@/shared/ui";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import {VacancyDetailsTypes} from "../model/types";
import styles from "./styles.module.scss";

interface IProps{
    id: string
    isSubmitting: boolean
    isHide: boolean
}
const VacancyButtons:FC<IProps> = ({id, isSubmitting, isHide}) => {

    const {
        reset,
        formState: {isDirty, isValid}
    } = useFormContext<VacancyDetailsTypes>()

    const handleReset = () => reset();
    const handleOpenResponses = () => {
        showModal(MODAL_KEYS.responsesUsers);
    };
    const handleDelete = () => {
        showModal(MODAL_KEYS.confirmationModal, { componentName: MODAL_KEYS.deleteVacancy, slug: id });
    };
    const handleHide = () => {
        const typeModal = isHide ? MODAL_KEYS.unHideVacancy : MODAL_KEYS.hideVacancy
        showModal(MODAL_KEYS.confirmationModal, { componentName: typeModal, slug: id });
    };

    return (
        <div className={styles.form__btnsWrapper}>
            <div className={styles.form__btns}>
                <Button onClick={handleHide} type="button">
                    {isHide ? "Показать" : "Скрыть"}
                </Button>
                <Button onClick={handleDelete} type="button" classType="btn_danger">Удалить</Button>
            </div>
            <div className={styles.form__btns}>
                <Button onClick={handleOpenResponses} type="button">
                    Посмотреть на отклики
                </Button>
                {isDirty && (
                    <Button onClick={handleReset} classType="btn_bordered" type="button">
                        Отменить изменения
                    </Button>
                )}
                <Button disabled={!isDirty || !isValid || isSubmitting} type="submit">
                    {isSubmitting ? "Загрузка..." : "Изменить"}
                </Button>
            </div>
        </div>
    );
};

export default VacancyButtons;