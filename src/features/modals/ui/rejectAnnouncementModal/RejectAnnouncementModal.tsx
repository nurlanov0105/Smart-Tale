import { Button, Emojis } from "@/shared/ui";

const RejectAnnouncementModal = () => {
   return (
      <div>
         <Emojis type="sad" />
         <div className="modalFlex">
            <h3 className="h3">
               Ой,
               <br />
               Вы опоздали...
            </h3>
            <p className="greyText textMaxWidth">Подробная информация отправлена вам на почту</p>
            <Button>Посмотреть другие заказы</Button>
         </div>
      </div>
   );
};

export default RejectAnnouncementModal;
