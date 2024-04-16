import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const OrderTableItem: FC = () => {
   return (
      <li className={styles.item}>
         <Link href="#">Заказ №234</Link>
         <span>1000 сом</span>
         <span>10 апреля 2024</span>
         <span></span>
      </li>
   );
};

export default OrderTableItem;
