import {NextPage} from "next";
import { History } from "@/widgets/user/history";
import clsx from "clsx";
import styles from "./styles.module.scss";

const HistoryPage: NextPage = () => {
   return (
      <section className={styles.history}>
         <h4 className={clsx(styles.history__title, "h4")}>История заказов</h4>
         <History />
      </section>
   );
};

export default HistoryPage;
