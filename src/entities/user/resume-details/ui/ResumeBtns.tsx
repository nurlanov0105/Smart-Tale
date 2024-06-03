import React, {FC} from 'react';
import {UseFormReset} from "react-hook-form";
import {useParams} from "next/navigation";
import {showModal} from "@/views/modal";
import {Button} from "@/shared/ui";
import {MODAL_KEYS} from "@/shared/lib";
import {ResumeFormTypes} from "../model/types";
import styles from "./styles.module.scss";

interface IProps{
    reset: UseFormReset<ResumeFormTypes>
    isDirty: boolean
    isValid: boolean
    isSubmitting: boolean
}
const ResumeBtns: FC<IProps> = ({isSubmitting, isValid, reset, isDirty}) => {
    const handleReset = () => reset()

    const {slug} = useParams()
    const handleDelete = () => showModal(MODAL_KEYS.deleteResume, {slug: slug.toString()})
    const handleHide = () => showModal(MODAL_KEYS.hideAnnouncement, {slug: slug.toString()})

    return (
        <div className={styles.form__btnsWrapper}>
            <div className={styles.form__btns}>
                <Button onClick={handleHide} type="button">Скрыть резюме</Button>
                <Button onClick={handleDelete} type="button" className="btn_danger">Удалить резюме</Button>
            </div>
            <div className={styles.form__btns}>
                {
                    isDirty && <Button onClick={handleReset} type="button" className="btn_bordered">Отменить изменения</Button>
                }
                <Button type="submit" disabled={!isValid || !isDirty}>
                    {isSubmitting ? "Загрузка..." : "Изменить резюме"}
                </Button>
            </div>
        </div>
    );
};

export default ResumeBtns;