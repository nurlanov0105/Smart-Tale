import styles from "./styles.module.scss";

// import authImg from "@@/imgs/auth/auth-1.jpg";
const authImgUrl = "/imgs/auth/auth-1.jpg";
import logoImg from "@@/imgs/auth/logo.png";
import Image from "next/image";

const AuthCommon = () => {
   return (
      <section className={styles.section} style={{ backgroundImage: `url(${authImgUrl})` }}>
         <div className={styles.section_overlay} />
         <div className={styles.section__box}>
            <Image src={logoImg} alt="logo" width={116} height={116} />
            <h2 className={styles.section__title}>SmartTale</h2>
            <p className={styles.section__descr}>Мониторинг и управление швейным производством</p>
         </div>
      </section>
   );
};

export default AuthCommon;
