import React from 'react';
import {Button} from "@/shared/ui";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";

const OrderDetailBtns = () => {

    const handleDeleteClick = () => {
        showModal(MODAL_KEYS.deleteAnnouncement);
    };
    const handleHideClick = () => {
        showModal(MODAL_KEYS.hideAnnouncement);
    };

    return (
        <div className={styles.buttons__wrapper}>
           <div className={styles.buttons}>
               <Button type="button" className="btn_danger" onClick={handleDeleteClick}>
                   Удалить
               </Button>
               <Button type="button" onClick={handleHideClick}>
                   Скрыть объявление
               </Button>
           </div>

           <div className={styles.buttons}>
               <Button type="button" className="btn_bordered">Отменить изменения</Button>
               <Button type="button">Сохранить изменения</Button>
           </div>
        </div>
    );
};

export default OrderDetailBtns;