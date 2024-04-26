import { FC } from "react";
import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
// import styles from "./styles.module.scss";

const PurchasesPage: FC = () => {
   return (
      <div>
         <CardsSection isLoading={false} isError={false} type={SkeletonTypes.standart} />
      </div>
   );
};

export default PurchasesPage;
