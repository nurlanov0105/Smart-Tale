import React from 'react';
import {Button} from "@/shared/ui";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";

const OrderDetailBtns = () => {

    const handleDeleteClick = () => {
        showModal(MODAL_KEYS.deleteAnnouncement, {slug: "nitki-s-igolkami-2", type: "order"});
    };
    const handleHideClick = () => {
        showModal(MODAL_KEYS.hideAnnouncement, {slug: "nitki-s-igolkami-2", type: "order"});
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
               <Button type="submit">Сохранить изменения</Button>
           </div>
        </div>
    );
};

export default OrderDetailBtns;