import React, {FC} from 'react';
import {useFormContext} from "react-hook-form";
import {Button} from "@/shared/ui";
import {showModal} from "@/views/modal";
import {EmployeeDetailsTypes, MODAL_KEYS} from "@/shared/lib";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import styles from "./styles.module.scss";

interface IProps{
    slug: string
    isSubmitting: boolean
}
const EmployeeButtons:FC<IProps> = ({slug, isSubmitting}) => {
    const position = useSubscribeStore(state => state.position)
    const profileSLug = useSubscribeStore(state => state.data?.profile.slug)
    const orgSlug = useSubscribeStore(state => state.data?.org.slug)

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
    const handleLeave = () => {
        showModal(MODAL_KEYS.confirmationModal, { slug: orgSlug, componentName: MODAL_KEYS.leaveOrganization })
    }

    return (
        <div className={styles.form__btn}>
            {
                slug === profileSLug &&
                <Button type="button" onClick={handleLeave} classType="btn_danger">Покинуть организацию</Button>
            }
            {
                slug !== profileSLug &&
                <Button type="button" onClick={handleDelete} classType="btn_danger">
                    Удалить сотрудника
                </Button>
            }

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