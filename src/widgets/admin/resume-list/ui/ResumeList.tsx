"use client"
import React from 'react';
import {ResumeMyItem} from "@/entities/admin/myResumeItem";
import clsx from "clsx";
import styles from "./styles.module.scss"
import {useGetMyResumes} from "../model/useMyResume";
import {EmptyContent} from "@/entities/admin/emptyContent";
import {GlobalLoading} from "@/shared/ui";

const ResumeList = () => {
    const {data, isLoading, isError} = useGetMyResumes()

    if (isLoading) return <GlobalLoading type="full"/>
    if (isError) return <h3 className="h3">Упс, произошла ошибка</h3>

    return (
        <>
            {
                !data?.length && <EmptyContent type="resume"/>
            }

            {
                !!data?.length &&
                <div className={clsx(styles.resume)}>
                    <h4 className={styles.resume__title}>Найдено {data?.length} резюме</h4>
                    <div className={styles.resume__list}>
                        {
                            data?.map(resume =>
                                <ResumeMyItem {...resume} key={resume.slug}/>
                            )
                        }
                    </div>
                </div>
            }

        </>
    );
};

export default ResumeList;