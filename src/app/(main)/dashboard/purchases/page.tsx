import { FC } from "react";
import { CardsSection } from "@/widgets/user/cardsSection";
// import styles from "./styles.module.scss";

const PurchasesPage: FC = () => {
   return <CardsSection isLoading={false} isError={false} />;
};

export default PurchasesPage;
