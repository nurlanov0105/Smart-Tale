import boxImg from "@@/imgs/commerce/01-big.png";
import arrowRightIcon from "@@/imgs/commerce/arrow-right.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import { showModal } from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";

const SubscribeBox = () => {
   const handleSubscribeClick = () => {
      showModal(MODAL_KEYS.subscribe);
   };

   return (
      <div className={styles.box} onClick={handleSubscribeClick}>
         <div className={styles.box__inner}>
            <p>Оформи подписку!</p>
            <Image src={arrowRightIcon} alt="arrow right icon" />
         </div>
         <Image src={boxImg} alt="box img" className={styles.box__bigImg} />
      </div>
   );
};

export default SubscribeBox;
