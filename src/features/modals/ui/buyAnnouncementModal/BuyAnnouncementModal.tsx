import { Button, Emojis } from "@/shared/ui";

const BuyAnnouncementModal = () => {
   return (
      <div>
         <Emojis type="holidaySmile" />
         <div className="modalFlex">
            <h3 className="h3">
               Поздравляем! <br />
               Вы купили оборудование!
            </h3>
            <p className="greyText textMaxWidth">Подробная информация отправлена вам на почту</p>
            <Button>Посмотреть</Button>
         </div>
      </div>
   );
};

export default BuyAnnouncementModal;
