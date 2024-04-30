import { OrderTableItem } from "@/entities/general/orderTableItem";
import { OrderCategories } from "../model/values";
import styles from "./styles.module.scss";
import {CommonSkeleton} from "@/shared/ui";

const OrderTable = () => {
   return (
      <div className={styles.orders}>
         <div className={styles.orders__top}>
            {OrderCategories.map((item) => (
               <h4 key={item}>{item}</h4>
            ))}
         </div>
         <ul className={styles.orders__list}>
            {[...Array(11)].map((_, i) => (
               <OrderTableItem key={i} />
            ))}
         </ul>
      </div>
       // <CommonSkeleton type="orderTable"/>
   );
};

export default OrderTable;
