import { Button, InputField } from "@/shared/ui";
import styles from "./styles.module.scss";

const InviteEmployeeModal = () => {
   return (
      <form className="modalFlex">
         <h3 className="h3">Пригласить сотрудника</h3>
         <InputField classname={styles.input} title="Введите электронную почту" />
         <InputField classname={styles.input} title="Должность сотрудника" />
         <Button>Отправить пришлашение</Button>
      </form>
   );
};

export default InviteEmployeeModal;
