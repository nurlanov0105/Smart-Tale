"use client"
import React from 'react';
import {ResumeMyItem} from "@/entities/admin/myResumeItem";
import clsx from "clsx";
import styles from "./styles.module.scss"

const ResumeList = () => {

    return (
        <div className={clsx(styles.resume)}>
            <h4 className={styles.resume__title}>Найдено 2 резюме</h4>
            <div className={styles.resume__list}>
                <ResumeMyItem/>
                <ResumeMyItem/>
            </div>
        </div>
    );
};

export default ResumeList;