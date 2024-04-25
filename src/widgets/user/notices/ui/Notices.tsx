"use client"
import React, {useState} from 'react';
import {Chats} from "@/features/user/chats";
import {NoticesContent} from "@/features/user/noticesContent";
import {Tabs} from "@/features/general/tabs";
import {noticesTabs} from "@/widgets/user/notices/model/values.data";
import styles from "./styles.module.scss"

const Notices = () => {
    const [type, setType] = useState(noticesTabs[0].postValue)

    return (
        <div className={styles.notice}>
            <div className={styles.notice__container}>
                <div className={styles.notice__top}>
                    <Tabs type={type} setType={setType} values={noticesTabs} variant="secondary"/>
                </div>

                {
                    type === "chats" ? <Chats/> : <NoticesContent/>
                }

            </div>
        </div>
    );
};

export default Notices;