import {NextPage} from "next";
import { OrderDetail } from "@/widgets/user/orderDetail";

const CreateOrderPage: NextPage = () => {
   return <OrderDetail btnType="order" />;
};

export default CreateOrderPage;
