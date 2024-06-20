import React, {useCallback} from 'react';
import {Button} from "@/shared/ui";
import styles from "./styles.module.scss";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import {useParams} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {UpdateOrganizationTypes} from "../model/types";

const OrganizationButtons = () => {
    const {slug} = useParams<{slug: string}>()

    const {
        formState: {isSubmitting, isValid}
    } = useFormContext<UpdateOrganizationTypes>()

    const handleDelete = useCallback(() => {
        showModal(MODAL_KEYS.confirmationModal, {slug, componentName: MODAL_KEYS.deleteOrganization});
    }, [slug]);

    return (
        <div className={styles.form__button}>
            <Button onClick={handleDelete} type="button" classType="btn_danger">Удалить организацию</Button>

            <Button disabled={!isValid} type="submit">{
                isSubmitting ? "Загрузка..." : "Изменить организацию"
            }</Button>
        </div>
    );
};

export default OrganizationButtons;