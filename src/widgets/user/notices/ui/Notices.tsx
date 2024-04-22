"use client"
import React, {useState} from 'react';
import {Chats} from "@/features/user/chats";
import {NoticesContent} from "@/features/user/noticesContent";
import clsx from "clsx";
import styles from "./styles.module.scss"

const Notices = () => {
    const [type, setType] = useState("chats")
    const handleType = (newType: string) => setType(newType)
    const isType = (t : string) => t === type ? styles.notice__button_active : ""

    return (
        <div className={styles.notice}>
            <div className={styles.notice__container}>
                <div className={styles.notice__top}>
                    <button
                        className={clsx(styles.notice__button, isType("chats"))}
                        onClick={() => handleType("chats")}>Чаты
                    </button>
                    <button
                        className={clsx(styles.notice__button, isType("notices"))}
                        onClick={() => handleType("notices")}>Уведомления
                    </button>
                </div>

                {
                    type === "chats" ? <Chats/> : <NoticesContent/>
                }

            </div>
        </div>
    );
};

export default Notices;