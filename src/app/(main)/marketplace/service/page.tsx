import { FC } from "react";
import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
// import styles from "./styles.module.scss";

const ServiePage: FC = () => {

   return <CardsSection isLoading={false} isError={false} type={SkeletonTypes.standart} />
};

export default ServiePage;
