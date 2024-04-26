import { FC } from "react";
import { SkeletonTypes } from "@/shared/lib";
import { CardsSection } from "@/widgets/user/cardsSection";

const EquipmentPage: FC = () => {
   return <CardsSection isLoading={false} isError={false} type={SkeletonTypes.standart} />;
};

export default EquipmentPage;
