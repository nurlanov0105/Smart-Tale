import Image from "next/image";
import styles from "./styles.module.scss";
import bellIcon from "@@/imgs/header/bell-sm.svg";
import {ROUTES} from "@/shared/lib";
import Link from "next/link";

const NoticeBtn = () => {


   return (
       <Link href={ROUTES.NOTICE}>
          <Image
              src={bellIcon}
              alt="bell icon"
              width={20}
              height={20}
              className={styles.bell}
          />
       </Link>
   );
};

export default NoticeBtn;
