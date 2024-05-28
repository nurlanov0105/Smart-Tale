import { ArrowUpIcon } from "lucide-react";
import styles from "./styles.module.scss";

const GoTopButton = () => {
   return (
      <button className={styles.btn}>
         <ArrowUpIcon />
      </button>
   );
};

export default GoTopButton;
