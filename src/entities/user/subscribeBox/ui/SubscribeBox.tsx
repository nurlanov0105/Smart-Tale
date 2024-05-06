import boxImg from "@@/imgs/commerce/01-big.png";
import arrowRightIcon from "@@/imgs/commerce/arrow-right.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import { showModal } from "@/views/modal";
import { MODAL_KEYS, ROUTES } from "@/shared/lib";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";

const SubscribeBox = () => {
   const router = useRouter();
   const theme = useThemeStore((state) => state.theme);

   const handleSubscribeClick = () => {
      router.push(ROUTES.SUBSCRIBE);
   };

   return (
      <div className={clsx(styles.box, styles[theme])} onClick={handleSubscribeClick}>
         <div className={styles.box__inner}>
            <p>Оформи подписку!</p>
            <Image src={arrowRightIcon} alt="arrow right icon" />
         </div>
         <Image src={boxImg} alt="box img" className={styles.box__bigImg} />
      </div>
   );
};

export default SubscribeBox;
