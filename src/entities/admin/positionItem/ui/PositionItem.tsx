import React, {FC, useState} from 'react';
import {X} from "lucide-react";
import type {PositionItemProps} from "../model/types";
import {showModal} from "@/views/modal";
import {MODAL_KEYS, ORGANIZATION_ROUTES} from "@/shared/lib";

import clsx from "clsx";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import Link from "next/link";

const PositionItem:FC<PositionItemProps> = ({item, idx}) => {
    const theme = useThemeStore((state) => state.theme);
    const handleDelete = () => {
        showModal(MODAL_KEYS.deleteAccount)
    }
    const [edit, setEdit] = useState("")
    const [title, setTitle] = useState("")

    const handleEdit = () => {

    }

    return (
        <tr key={idx} className={clsx(styles.item, styles[theme])}>
            <td>
                <p>{idx + 1}</p>
            </td>
            <td>
                {
                    edit === "title" &&
                    <div>
                        <input value={title} type="text"/>
                    </div>
                }
                <Link href={ORGANIZATION_ROUTES.POSITION_DETAILS + `/${item.title}`}>{item.title}</Link>
            </td>
            <td>
                <p className={styles.item__description}>{item.description}</p>
            </td>
            {/*<td className={styles.item__icon}>*/}
            {/*    <button onClick={handleDelete}><X className={styles.item__icon}/></button>*/}
            {/*</td>*/}
        </tr>
    );
};

export default PositionItem;