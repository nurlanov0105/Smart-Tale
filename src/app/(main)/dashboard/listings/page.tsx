import { FC } from "react";
import { Listings } from "@/widgets/user/listings";
import styles from "./styles.module.scss";

const ListingsPage: FC = () => {
   return (
      <section className={styles.listings}>
         <h3 className={styles.listings__title}>Тип объявления</h3>
         <Listings />
      </section>
   );
};

export default ListingsPage;
