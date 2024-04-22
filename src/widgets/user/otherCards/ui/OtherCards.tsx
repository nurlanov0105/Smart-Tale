import { StandartCard } from "@/features/user/standartCard";
import styles from "./styles.module.scss";

const OtherCards = () => {
   return (
      <section className={styles.section}>
         <h3 className="h3">Другие товары</h3>
         <div className={styles.section__content}>
            {[...Array(8)].map((_, i: number) => (
               <StandartCard key={i} />
            ))}
         </div>
      </section>
   );
};

export default OtherCards;
