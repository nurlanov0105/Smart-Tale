import { Button, Emojis } from "@/shared/ui";
import styles from "./styles.module.scss";

const LogoutModal = () => {
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
               <Button className="btn_bordered">Нет</Button>
               <Button>Да</Button>
            </div>
         </div>
      </div>
   );
};

export default LogoutModal;
