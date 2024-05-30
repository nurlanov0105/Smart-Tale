import React, {FC} from 'react';
import {UseFormReset} from "react-hook-form";
import {showModal} from "@/views/modal";
import {AnnouncementCreateFormType} from "@/features/user/orderForm/model/types";
import {Button} from "@/shared/ui";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";

interface IProps{
    isDirty: boolean
    isDisabled: boolean
    reset: UseFormReset<any>
}
const OrderDetailBtns:FC<IProps> = ({isDirty, reset, isDisabled}) => {

    const handleDeleteClick = () => {
        showModal(MODAL_KEYS.deleteAnnouncement, {slug: "nitki-s-igolkami-2", type: "order"});
    };
    const handleHideClick = () => {
        showModal(MODAL_KEYS.hideAnnouncement, {slug: "nitki-s-igolkami-2", type: "order"});
    };
    const handleReset = () => reset()

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

            {
                isDirty &&
                <div className={styles.buttons}>
                    <Button onClick={handleReset} type="button" className="btn_bordered">Отменить изменения</Button>
                    <Button disabled={!isDisabled} type="submit">Сохранить изменения</Button>
                </div>
            }
        </div>
    );
};

export default OrderDetailBtns;