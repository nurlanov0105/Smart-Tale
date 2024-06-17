
import { NextPage } from "next";
import { UserQueryKeys } from "@/shared/api";
// import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";
import dynamic from "next/dynamic";
import {GlobalLoading} from "@/shared/ui";

const CardSection2 = dynamic(() => import("@/widgets/user/cardsSection/ui/CardSection2"),
    {ssr: false, loading: () => <GlobalLoading/>})

const PurchasesPage: NextPage = () => {
    const initialData = {
        data: [],
        has_next_page: true,
        next_page_number: 1
    }
   return (
       <CardSection2
           initialData={initialData}
           queryKey={UserQueryKeys.PURCHASES}
       />
   );
};

export default PurchasesPage;
