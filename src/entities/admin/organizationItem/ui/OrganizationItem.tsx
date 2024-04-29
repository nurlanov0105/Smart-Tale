import React, {FC, useState} from 'react';
import Link from "next/link";
import {ADMIN_ROUTES} from "@/shared/lib";
import logo from "@@/logo.svg";
import {TypesItemOrganization} from "../model/types";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";

const OrganizationItem:FC<TypesItemOrganization> = ({item}) => {

    return (
        <Link href={ADMIN_ROUTES.ORGANIZATION_DETAIL} className={styles.organization}>
            <div className={styles.organization__left}>
                <Image
                    className={styles.organization__image}
                    src={logo}
                    alt="card"
                    width={75}
                    height={75}
                />
                <div className={styles.organization__info}>
                    <h6 className={styles.organization__title}>SmartTale</h6>
                    <p className={styles.organization__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cum deserunt dolorem ipsum mollitia nesciunt nulla odio pariatur temporibus! Blanditiis dolorum, ducimus et maxime minus obcaecati perspiciatis sint soluta.
                    </p>
                </div>
            </div>
            <div className={styles.organization__bottom}>
                {
                    item.isActive ? <span className={clsx(styles.organization__date, styles.organization__date_active)}>Активен</span>
                        : <span className={styles.organization__date}>Деактивен</span>
                }
                <p className={styles.organization__detail}>Посмотреть детали</p>
            </div>
        </Link>
    );
};

export default OrganizationItem;