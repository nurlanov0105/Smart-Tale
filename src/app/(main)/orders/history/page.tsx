import { FC } from "react";
import { History } from "@/widgets/user/history";
import styles from "./styles.module.scss";

const HistoryPage: FC = () => {
   return (
      <section className={styles.history}>
         <h3 className={styles.history__title}>История заказов</h3>
         <History />
      </section>
   );
};

export default HistoryPage;
