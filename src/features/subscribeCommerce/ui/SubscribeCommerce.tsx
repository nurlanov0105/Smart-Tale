import Image from "next/image";
import styles from "./styles.module.scss";

import commerceBox from "@@/imgs/commerce/01.png";
import { Button } from "@/shared/ui";

const SubscribeCommerce = () => {
   return (
      <div className={styles.commerce}>
         <div className={styles.commerce__box}>
            <Image src={commerceBox} alt="commercial box" />
            <div className={styles.commerce__text}>
               <p>Оформите подписку, чтобы получить больше возможностей</p>
               <p>С вами свяжется наш администратор 😉</p>
            </div>
         </div>

         <Button className="btn_white">Отправить запрос на подписку</Button>
      </div>
   );
};

export default SubscribeCommerce;
