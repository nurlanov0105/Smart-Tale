import React from 'react';
import styles from "./styles.module.scss"
import {InputField} from "@/shared/ui";

const RegisterForm = () => {
    return (
        <div className={styles.register}>
            <div>
                <h5 className={styles.register__title}>Фамилия*</h5>
                <InputField
                />
            </div>
            <div>
                <h5 className={styles.register__title}>Имя*</h5>
                <InputField
                />
            </div>
            <div>
                <h5 className={styles.register__title}>Отчество*</h5>
                <InputField
                />
            </div>
            <div>
                <h5 className={styles.register__title}>Почта*</h5>
                <InputField
                    type="email"
                />
            </div>
            <div>
                <h5 className={styles.register__title}>Пароль*</h5>
                <InputField
                    type="password"
                />
            </div>
        </div>
    );
};

export default RegisterForm;