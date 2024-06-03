import React, {FC} from 'react';
import clsx from "clsx";
import Link from "next/link";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {useThemeStore} from "@/shared/store/themeStore";
import type {PositionItemProps} from "../model/types";
import styles from "./styles.module.scss";

const PositionItem:FC<PositionItemProps> = ({item, idx}) => {
    const theme = useThemeStore((state) => state.theme);

    return (
        <tr key={idx} className={clsx(styles.item, styles[theme])}>
            <td>
                <p>{idx + 1}</p>
            </td>
            <td>
                <Link href={ORGANIZATION_ROUTES.POSITION_DETAILS + `/${item.slug}`}>{item.title}</Link>
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