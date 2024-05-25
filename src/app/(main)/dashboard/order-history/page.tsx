import { OrderHistory } from "@/widgets/user/orderHistory";
import { NextPage } from "next";
import styles from "./styles.module.scss";
import { Pagination } from "@/features/general/pagination";

const OrderHistoryPage: NextPage = () => {
   return <OrderHistory />;
};

export default OrderHistoryPage;
