import {NextPage} from "next";
import { SubscribeCommerce } from "@/features/user/subscribeCommerce";
import { ProfileForm } from "@/widgets/user/profile";
import styles from "./styles.module.scss";

const ProfilePage: NextPage = () => {
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
