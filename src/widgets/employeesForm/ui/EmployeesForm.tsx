import React from 'react';
import {Button, InputField} from "@/shared/ui";
import {RightAction} from "@/entities/rightAction";
import {rightsActionsData} from "@/features/rightActions/model/rightsActions.data";
import styles from "./styles.module.scss"

const EmployeesForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.form__row}>
                <h4 className="h4">Организация</h4>
                <InputField isBordered={true}/>

                <h4 className="h4">Приглашение сотрудника</h4>
                <InputField
                    title="Почта"
                    type="email"
                />
                <InputField
                    title="Должность"
                    type="text"
                />
                <div>
                    <ul className={styles.form__list}>
                        <h4 className="h4">Выдача прав доступа</h4>
                        {
                            rightsActionsData.map(action =>
                                <RightAction {...action} key={action.title}/>
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.form__btn}>
                <Button>Пригласить</Button>
            </div>
        </form>
    );
};

export default EmployeesForm;