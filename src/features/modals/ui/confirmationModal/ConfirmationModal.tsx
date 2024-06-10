import React from 'react';
import {Button, Emojis} from "@/shared/ui";
import {closeModal} from "@/views/modal";
import {ModalActionsMap} from "../../model/helper";
import {ModalProps} from "../../model/types";
import styles from "./styles.module.scss";

const ConfirmationModal = ({type, componentName, slug}: ModalProps) => {

    const {
        buttonText,
        emoji,
        title,
        description,
        request
    } = ModalActionsMap[componentName as keyof typeof ModalActionsMap]

    const requestType = request(type)

    const {
        mutate,
        isPending

    } = requestType()

    const handleDelete = () => mutate(slug)

    return (
        <div className={styles.modal}>
            <Emojis type={emoji as "unknown" | "reverse" | "sad" | "fine" | "holidayStuff" | "okay" | "holidaySmile"}/>
            <div className="modalFlex">
                <h3 className="h3">
                    {
                        title
                    }
                </h3>
                <p className="greyText">
                    {description}
                </p>
                <div className={styles.modal__btns}>
                    <Button onClick={closeModal} classType="btn_bordered">Нет</Button>
                    <Button onClick={handleDelete}>
                        {isPending ? "Загрузка..." : buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;