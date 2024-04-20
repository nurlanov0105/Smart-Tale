import React, {FC} from 'react';
import {ItemProps} from "../model/types";
import {Button} from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import {ADMIN_ROUTES} from "@/shared/lib";
import avatar from "@@/imgs/auth/auth-1.jpg"
import styles from "./styles.module.scss"

const AdminEmployeesItem:FC<ItemProps> = ({item}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__info}>
                <div>
                    <h5 className={styles.item__subtitle}>Заказ №234</h5>
                    <p className={styles.item__title}>Сшить костюм</p>
                    <p className={styles.item__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt...</p>
                    <p className={styles.item__price}>1000 сом</p>
                </div>
                <div><p className={styles.item__date}>Принял 10 апреля 2024</p></div>
            </div>
            <div className={styles.item__border}>
                <h4 className="h4">Сотрудники</h4>
                <div className={styles.item__employees}>
                    <Link href={ADMIN_ROUTES.EMPLOYEES_DETAIL} className={styles.item__employee}>
                        <Image className={styles.item__image} src={avatar} alt="avatar" width={48} height={48}/>
                        <div>
                            <h4 className="h4">Кирилл Олейников</h4>
                            <p className={styles.item__salary}>ЗП 900 сом</p>
                        </div>
                    </Link>
                    <Link href={ADMIN_ROUTES.EMPLOYEES_DETAIL} className={styles.item__employee}>
                        <Image className={styles.item__image} src={avatar} alt="avatar" width={48} height={48}/>
                        <div>
                            <h4 className="h4">Кирилл Олейников</h4>
                            <p className={styles.item__salary}>ЗП 900 сом</p>
                        </div>
                    </Link>
                    <Link href={ADMIN_ROUTES.EMPLOYEES_DETAIL} className={styles.item__employee}>
                        <Image className={styles.item__image} src={avatar} alt="avatar" width={48} height={48}/>
                        <div>
                            <h4 className="h4">Кирилл Олейников</h4>
                            <p className={styles.item__salary}>ЗП 900 сом</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.item__border}>
                <h4 className="h4">Заказчик</h4>
                <div className={styles.item__employees}>
                    <div className={styles.item__employee}>
                        <Image className={styles.item__image} src={avatar} alt="avatar" width={48} height={48}/>
                        <div>
                            <h4 className="h4">Олег Васильев</h4>
                            <p className={styles.item__salary}>+996 700 010 101</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.item__button}><Button>Завершить Заказ</Button></div>
        </div>
    );
};

export default AdminEmployeesItem