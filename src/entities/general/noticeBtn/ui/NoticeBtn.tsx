import Image from "next/image";
import styles from "./styles.module.scss";
import bellIcon from "@@/imgs/header/bell-sm.svg";

const NoticeBtn = () => {
   const handleClick = () => {
      alert("Notice");
   };

   return (
      <Image
         src={bellIcon}
         alt="bell icon"
         width={20}
         height={20}
         className={styles.bell}
         onClick={handleClick}
      />
   );
};

export default NoticeBtn;
