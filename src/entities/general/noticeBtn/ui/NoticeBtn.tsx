import Image from "next/image";
import styles from "./styles.module.scss";
import bellIcon from "@@/imgs/header/bell-sm.svg";
import { ROUTES } from "@/shared/lib";
import Link from "next/link";
import { useThemeStore } from "@/shared/store/themeStore";

const NoticeBtn = () => {
   const theme = useThemeStore((state) => state.theme);

   return (
      <Link href={ROUTES.NOTICES} className={styles[theme]}>
         <svg className={styles.bell} viewBox="0 0 31 30" fill="none">
            <path
               d="M23.6799 9.46657C23.6799 7.3537 22.8126 5.32737 21.2688 3.83335C19.725 2.33933 17.6311 1.5 15.4478 1.5C13.2645 1.5 11.1706 2.33933 9.6268 3.83335C8.08298 5.32737 7.21567 7.3537 7.21567 9.46657C7.21567 18.7609 3.09961 21.4164 3.09961 21.4164H27.796C27.796 21.4164 23.6799 18.7609 23.6799 9.46657Z"
               strokeWidth="1.3"
               strokeLinejoin="round"
            />
            <path
               d="M17.8214 26.7275C17.5802 27.1299 17.234 27.4639 16.8174 27.6961C16.4008 27.9283 15.9285 28.0505 15.4478 28.0505C14.9671 28.0505 14.4948 27.9283 14.0782 27.6961C13.6617 27.4639 13.3154 27.1299 13.0742 26.7275"
               strokeWidth="1.3"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </Link>
   );
};

export default NoticeBtn;
