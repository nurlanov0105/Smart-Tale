import React, {FC, useState} from 'react';
import {X} from "lucide-react";
import type {PositionItemProps} from "../model/types";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";

import clsx from "clsx";
import styles from "./styles.module.scss";

const PositionItem:FC<PositionItemProps> = ({item, idx}) => {
    const handleDelete = () => {
        showModal(MODAL_KEYS.deleteAccount)
    }
    const [edit, setEdit] = useState("")
    const [title, setTitle] = useState("")

    const handleEdit = () => {

    }

    return (
        <tr key={idx} className={clsx(styles.item)}>
            <td>
                <button>{idx + 1}</button>
            </td>
            <td>
                {
                    edit === "title" &&
                    <div>
                        <input value={title} type="text"/>
                    </div>
                }
                <button>{item.title}</button>
            </td>
            <td>
                <button>{item.description}</button>
            </td>
            <td className={styles.item__icon}>
                <button onClick={handleDelete}><X className={styles.item__icon}/></button>
            </td>
        </tr>
    );
};

export default PositionItem;