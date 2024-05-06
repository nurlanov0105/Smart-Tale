import React, { FC } from "react";
import Link from "next/link";

import {ROUTES} from "@/shared/lib";
import {useThemeStore} from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";

const OrderTableItem: FC = () => {
    const theme = useThemeStore((state) => state.theme);

    return (
       <tr className={clsx(styles.item, styles[theme])}>
           <td>
               <Link href={ROUTES.ORDER_DETAILS + "/OrderTableItem"}>
                   Заказ №234
               </Link>
           </td>
           <td>1000 сом</td>
           <td>10 апреля 2024</td>
       </tr>
    );
};

export default OrderTableItem;
