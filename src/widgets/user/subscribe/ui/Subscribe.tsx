import { SubscribeCard } from "@/features/user/subscribeCard";
import styles from "./styles.module.scss";

const Subscribe = () => {
   return (
      <section className={styles.section}>
         <SubscribeCard type="test" />
         <SubscribeCard type="premium" />
         <SubscribeCard type="base" />
      </section>
   );
};

export default Subscribe;
