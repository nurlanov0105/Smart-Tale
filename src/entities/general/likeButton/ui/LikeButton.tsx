import { FC } from "react";
import { Props } from "../model/types";

import likeIcon from "@@/imgs/btn/like.svg";
import dislikeIcon from "@@/imgs/btn/unlike.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useLikeEquipment, useLikeOrder, useLikeService } from "../model/useQueries";
import { AnnouncementTypes } from "@/shared/lib";

const LikeButton: FC<Props> = ({ isLiked, slug, type }) => {
   const { mutate: likeEquipment, isPending: likeEquipmentLoading } = useLikeEquipment(slug, type);
   const { mutate: likeOrder, isPending: likeOrderLoading } = useLikeOrder(slug, type);
   const { mutate: likeService, isPending: likeServiceLoading } = useLikeService(slug, type);

   const handleLikeClick = () => {
      if (type.toLowerCase() === AnnouncementTypes.equipment) {
         likeEquipment(slug);
      } else if (type.toLowerCase() === AnnouncementTypes.order) {
         likeOrder(slug);
      } else if (type.toLowerCase() === AnnouncementTypes.service) {
         likeService(slug);
      }
   };
   return (
      <button
         type="button"
         disabled={likeEquipmentLoading || likeOrderLoading || likeServiceLoading}
         className={styles.btn}
         onClick={handleLikeClick}>
         {isLiked ? (
            <Image src={likeIcon} width={18} height={18} alt="like" />
         ) : (
            <Image src={dislikeIcon} width={18} height={18} alt="like" />
         )}
      </button>
   );
};

export default LikeButton;
