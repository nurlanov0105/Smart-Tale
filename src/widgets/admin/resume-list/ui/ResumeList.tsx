"use client"
import React from 'react';
import {ResumeMyItem} from "@/entities/admin/myResumeItem";
import clsx from "clsx";
import {useGetMyResumes} from "../model/useMyResume";
import {EmptyContent} from "@/entities/admin/emptyContent";
import {Button, GlobalLoading} from "@/shared/ui";
import styles from "./styles.module.scss"

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
                    <div className={styles.resume__top}>
                        <h4 className={styles.resume__title}>Найдено {data?.length} резюме</h4>
                        <Button>Добавить резюме</Button>
                    </div>
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