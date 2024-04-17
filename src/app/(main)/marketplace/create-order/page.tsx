import { FC } from "react";
import { OrderDetail } from "@/widgets/orderDetail";
import styles from "./styles.module.scss";

const CreateOrderPage: FC = () => {
   return <OrderDetail btnType="order" />;
};

export default CreateOrderPage;
