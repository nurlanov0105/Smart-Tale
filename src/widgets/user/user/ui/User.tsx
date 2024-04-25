"use client"
import React, {useState} from 'react';
import {CircleAlert} from "lucide-react";
import {Tabs} from "@/features/general/tabs";
import {CardsSection} from "@/widgets/user/cardsSection";
import avatar from "@@/logo.svg"
import Image from "next/image";
import styles from "./styles.module.scss"

const User = () => {
    const data = [{value: "Активно", postValue: "active"}, {value: "Деактивировано", postValue: "nactive"}]
    const [type, setType] = useState(data[0].postValue)

    return (
        <div className={styles.user}>
            <div className={styles.user__top}>
                <Image src={avatar} alt="avatar" width={60} height={60} className={styles.user__avatar}/>
                <div className={styles.user__info}>
                    <h4 className={styles.user__name}>Михаил Андреев</h4>
                    <div>
                        <p className={styles.user__text}>Был(а) в сети 3 мин. назад</p>
                    </div>
                    {/*<p className={styles.user__text}>На сайте с 01.07.2016</p>*/}
                    <div className={styles.user__more}>
                        <CircleAlert/>
                        <p>Подробнее</p>
                    </div>
                </div>
            </div>
            <div className={styles.user__bottom}>
                <Tabs type={type} setType={setType} values={data} variant="secondary"/>
            </div>
            <CardsSection/>
        </div>
    );
};

export default User;