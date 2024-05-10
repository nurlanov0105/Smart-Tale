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
            <svg viewBox="0 0 48 11">
               <path d="M47.5004 6.01574C47.7542 5.7619 47.7542 5.35034 47.5004 5.0965L43.3638 0.959928C43.11 0.706087 42.6984 0.706087 42.4446 0.959928C42.1908 1.21377 42.1908 1.62533 42.4446 1.87917L46.1216 5.55612L42.4446 9.23308C42.1908 9.48692 42.1908 9.89848 42.4446 10.1523C42.6984 10.4062 43.11 10.4062 43.3638 10.1523L47.5004 6.01574ZM0.96936 6.20612H47.0408V4.90612H0.96936V6.20612Z" />
            </svg>
         </div>
         <Image src={boxImg} alt="box img" className={styles.box__bigImg} />
      </div>
   );
};

export default SubscribeBox;
