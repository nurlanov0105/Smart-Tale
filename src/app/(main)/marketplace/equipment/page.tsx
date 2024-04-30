import {NextPage} from "next";
import { SkeletonTypes } from "@/shared/lib";
import { CardsSection } from "@/widgets/user/cardsSection";

const EquipmentPage: NextPage = () => {
   return <CardsSection isLoading={true} isError={false} type={SkeletonTypes.standart} />;
};

export default EquipmentPage;
