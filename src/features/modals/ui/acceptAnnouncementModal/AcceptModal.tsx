import { Button, Emojis } from "@/shared/ui";

const AcceptAnnouncementModal = () => {
   return (
      <div>
         <Emojis type="holidaySmile" />
         <div className="modalFlex">
            <h3 className="h3">
               Поздравляем! <br />
               Вы приняли заказ!
            </h3>
            <p className="greyText textMaxWidth">Ваш заказ отображается в вашем личном кабинете</p>
            <Button>Посмотреть</Button>
         </div>
      </div>
   );
};

export default AcceptAnnouncementModal;
