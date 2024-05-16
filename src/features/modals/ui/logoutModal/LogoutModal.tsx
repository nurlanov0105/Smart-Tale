import { Button, Emojis } from "@/shared/ui";
import { useLogout } from "@/features/auth";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";
import { CookiesServices, EnumTokens, useRememberMe } from "@/shared/lib";
import { closeModal } from "@/views/modal";

const LogoutModal = () => {
   const { mutate: logout, isPending } = useLogout();
   const { isRemember } = useRememberMe();

   const handleLogout = () => {
      let refreshToken;
      if (isRemember) {
         refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN) || "";
      } else {
         refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN) || "";
      }

      logout({ refresh: refreshToken });
   };

   const handleClose = () => {
      closeModal();
   };

   return (
      <div className={styles.modal}>
         <Emojis type="unknown" />
         <div className="modalFlex">
            <h3 className="h3">
               Вы действительно
               <br />
               хотите выйти?
            </h3>
            <p className="greyText">Все данные будут сохранены!</p>
            <div className={styles.modal__btns}>
               <Button className="btn_bordered" onClick={handleClose}>
                  Нет
               </Button>
               <Button disabled={isPending} onClick={handleLogout}>
                  {isPending ? "Загрузка..." : "Да"}
               </Button>
            </div>
         </div>
      </div>
   );
};

export default LogoutModal;
