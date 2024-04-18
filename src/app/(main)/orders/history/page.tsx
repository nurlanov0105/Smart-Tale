import { FC } from "react";
import styles from "./styles.module.scss";
import { History } from "@/widgets/history";

const HistoryPage: FC = () => {
   return (
      <section className={styles.history}>
         <h3 className={styles.history__title}>История заказов</h3>
         <History />
      </section>
   );
};

export default HistoryPage;
