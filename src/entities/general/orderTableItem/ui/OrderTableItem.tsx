import React, { FC } from "react";
import Link from "next/link";

import { ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";

const OrderTableItem: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   return (
      <li className={clsx(styles.item, styles[theme])}>
         <Link href={ROUTES.ORDER_DETAILS + "/OrderTableItem"}>Заказ №234</Link>
         <span>1000 сом</span>
         <span>10 апреля 2024</span>
         <span>В процессе</span>
      </li>
   );
};

export default OrderTableItem;
