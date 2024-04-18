import { Button, Emojis } from "@/shared/ui";

const RequireAnnouncementModal = () => {
   return (
      <div>
         <Emojis type="unknown" />
         <div className="modalFlex">
            <h3 className="h3">
               Заполните
               <br />
               обязательные поля
            </h3>
            <p className="greyText textMaxWidth">Они отмечены красной звездочкой</p>
            <Button>Заполнить</Button>
         </div>
      </div>
   );
};

export default RequireAnnouncementModal;
