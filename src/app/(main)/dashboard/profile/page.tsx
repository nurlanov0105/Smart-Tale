import { FC } from "react";
import styles from "./styles.module.scss";
import { SubscribeCommerce } from "@/features/subscribeCommerce";
import { ProfileForm } from "@/widgets/profile";

const ProfilePage: FC = () => {
   return (
      <div className={styles.profile}>
         <div className={styles.profile__commerce}>
            <SubscribeCommerce isSubscribed={false} />
         </div>
         <ProfileForm />
      </div>
   );
};

export default ProfilePage;
