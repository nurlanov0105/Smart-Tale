import React from 'react';
import {Button, Emojis} from "@/shared/ui";
import {useDeleteResume} from "../../model/useQueries";
import {closeModal} from "@/views/modal";
import styles from "./styles.module.scss";

const DeleteResumeModal = ({slug}: {slug: string}) => {

    const {mutate, isPending} = useDeleteResume()
    const handleDelete = () => {
        mutate(slug)
        closeModal()
    }

    return (
        <div className={styles.modal}>
            <Emojis type="unknown"/>
            <div className="modalFlex">
                <h3 className="h3">
                    Вы действительно хотите
                    <br/>
                    удалить резюме?
                </h3>
                <p className="greyText">Все данные будут удалены!</p>
                <div className={styles.modal__btns}>
                    <Button onClick={closeModal} className="btn_bordered">Нет</Button>
                    <Button onClick={handleDelete}>
                        {isPending ? "Загрузка..." : "Да"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteResumeModal;