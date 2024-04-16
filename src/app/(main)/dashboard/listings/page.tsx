import { FC, useState } from "react";
import styles from "./styles.module.scss";
import { Listings } from "@/widgets/listings";

const ListingsPage: FC = () => {
   return (
      <section className={styles.listings}>
         <h3 className={styles.listings__title}>Тип объявления</h3>
         <Listings />
      </section>
   );
};

export default ListingsPage;
