import { NextPage } from "next";
import { OrderDetail } from "@/widgets/user/orderDetail";

const CreateServicePage: NextPage = () => {
   return <OrderDetail btnType="order" isService={true} />;
};

export default CreateServicePage;
