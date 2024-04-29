import {NextPage} from "next";
import { OrderDetail } from "@/widgets/user/orderDetail";
// import styles from "./styles.module.scss";

const OrderDetailPage: NextPage = () => {
   return <OrderDetail btnType="detail" />;
};

export default OrderDetailPage;
