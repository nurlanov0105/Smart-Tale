import { StandartCard } from "@/features/user/standartCard";
import styles from "./styles.module.scss";

const CardsSection = () => {
   return (
      <section className={styles.section}>
         {[...Array(24)].map((item, i) => (
            <StandartCard key={i} />
         ))}
      </section>
   );
};

export default CardsSection;
