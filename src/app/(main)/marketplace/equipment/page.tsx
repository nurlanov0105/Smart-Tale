import { SkeletonTypes } from "@/shared/lib";
import { CardsSection } from "@/widgets/user/cardsSection";
import { FC } from "react";

const EquipmentPage: FC = () => {
   return <CardsSection isLoading={false} isError={false} type={SkeletonTypes.standart} />;
};

export default EquipmentPage;
