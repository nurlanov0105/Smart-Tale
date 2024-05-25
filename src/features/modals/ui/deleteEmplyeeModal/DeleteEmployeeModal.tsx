import React from 'react';
import {Button, Emojis} from "@/shared/ui";
import {useDeleteEmployee} from "../../model/useQueries";
import {closeModal} from "@/views/modal";
import styles from "./styles.module.scss";

const DeleteEmployeeModal = ({slug}: {slug: string}) => {

    const {mutate} = useDeleteEmployee()
    const handleDelete = () => mutate(slug)

    return (
        <div className={styles.modal}>
            <Emojis type="unknown"/>
            <div className="modalFlex">
                <h3 className="h3">
                    Вы действительно хотите
                    <br/>
                    удалить сотрудника?
                </h3>
                <p className="greyText">Сотрудник будет удалён!</p>
                <div className={styles.modal__btns}>
                    <Button onClick={closeModal} className="btn_bordered">Нет</Button>
                    <Button onClick={handleDelete}>Да</Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteEmployeeModal;