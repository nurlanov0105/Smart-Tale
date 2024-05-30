"use client"
import React from "react";
import {closeModal, ModalProps} from "@/views/modal";
import { Button, Emojis } from "@/shared/ui";
import {useActiveOrganization} from "../../model/useQueries";
import styles from "./styles.module.scss";

const ActivateOrganizationModal = (props: ModalProps) => {

    const {
        mutate,
        isPending,
    } = useActiveOrganization()

    const handleActivate = () => mutate(props?.slug ?? "")

    return (
        <div className={styles.content}>
            <Emojis type="unknown" />
            <h3 className="h3">Вы действительно хотите <br/> активировать данную организацию?</h3>
            <p className={styles.content__text}>Старая организация станет деактивной, <br/> но продолжит функционировать</p>
            <div className={styles.content__buttons}>
                <Button onClick={closeModal} className="btn_bordered">Отменить</Button>
                <Button onClick={handleActivate} type="button">
                    {
                        isPending ? "Загрузка..." : "Активировать"
                    }
                </Button>
            </div>
        </div>
    );
};

export default ActivateOrganizationModal;
