import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
import {NextPage} from "next";
// import styles from "./styles.module.scss";

const PurchasesPage: NextPage = () => {
   return (
      <div>
         <CardsSection isLoading={false} isError={false} type={SkeletonTypes.standart} />
      </div>
   );
};

export default PurchasesPage;
