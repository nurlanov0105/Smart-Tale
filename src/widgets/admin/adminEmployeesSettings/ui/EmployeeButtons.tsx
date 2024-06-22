import React, {FC} from 'react';
import styles from "@/widgets/admin/adminEmployeesSettings/ui/styles.module.scss";
import {Button} from "@/shared/ui";
import {showModal} from "@/views/modal";
import {EmployeeDetailsTypes, MODAL_KEYS} from "@/shared/lib";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {useFormContext} from "react-hook-form";

interface IProps{
    slug: string
    isSubmitting: boolean
}
const EmployeeButtons:FC<IProps> = ({slug, isSubmitting}) => {
    const position = useSubscribeStore(state => state.position)
    const {
        reset,
        formState: {isDirty}
    } = useFormContext<EmployeeDetailsTypes>()
    const handleDelete = () => {
        if (!position[RIGHT_ACTIONS.REMOVE_EMPLOYEE]){
            showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
            return
        }
        showModal(MODAL_KEYS.confirmationModal, { slug, componentName: MODAL_KEYS.deleteEmployee });
    };
    const handleReset = () => reset()

    return (
        <div className={styles.form__btn}>
            <Button type="button" onClick={handleDelete} classType="btn_danger">
                Удалить сотрудника
            </Button>
            {
                isDirty &&
                <Button
                    onClick={handleReset}
                    type="button"
                    classType="btn_bordered">
                    Отменить изменения
                </Button>
            }
            <Button disabled={!isDirty} type="submit">
                {
                    isSubmitting ? "Загрузка..." : "Изменить"
                }
            </Button>
        </div>
    );
};

export default EmployeeButtons;