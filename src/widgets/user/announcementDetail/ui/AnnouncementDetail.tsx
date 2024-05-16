"use client"
import React, {useState} from 'react';
import {Tabs} from "@/features/general/tabs";
import {orderDetailsValues} from "@/widgets/user/createAnnouncement/model/values";
import {AnnouncementDetailForm} from "@/features/user/ announcementDetailForm";
import styles from "./styles.module.scss";

const AnnouncementDetail = () => {
    const [type, setType] = useState(orderDetailsValues[0].postValue);

    return (
        <div className={styles.order}>
            <div className={styles.order__block}>
                <h3 className="h3">Тип объявления</h3>
                <div className={styles.order__margin}>
                    <Tabs type={type} setType={setType} values={orderDetailsValues}/>
                </div>
            </div>

            <h3 className="h3">Информация об оборудовании</h3>
            <AnnouncementDetailForm type={type}/>
        </div>
    );
};

export default AnnouncementDetail;