import React, {FC} from 'react';
import {Button} from "@/shared/ui";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";
import {UseFormReset} from "react-hook-form";
import {OrderCreateFormType} from "@/features/user/orderForm/model/types";

interface IProps{
    isDirty: boolean
    isDisabled: boolean
    reset: UseFormReset<OrderCreateFormType>
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
            {/*<div className={styles.buttons}>*/}
            {/*    {*/}
            {/*        isDirty && <>*/}
            {/*            <Button type="button" className="btn_bordered">Отменить изменения</Button>*/}
            {/*            <Button type="submit">Сохранить изменения</Button>*/}
            {/*        </>*/}
            {/*    }*/}

            {/*</div>*/}
        </div>
    );
};

export default OrderDetailBtns;