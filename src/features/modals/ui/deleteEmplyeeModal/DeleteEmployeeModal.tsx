import React from 'react';
import {Button, Emojis} from "@/shared/ui";
import styles from "./styles.module.scss";

const DeleteEmployeeModal = () => {
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
                    <Button className="btn_bordered">Нет</Button>
                    <Button>Да</Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteEmployeeModal;