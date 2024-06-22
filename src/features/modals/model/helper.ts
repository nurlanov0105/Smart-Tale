import { AnnouncementTypes, MODAL_KEYS } from "@/shared/lib";
import {
   useActiveOrganization,
   useDeleteEmployee,
   useDeleteEquipment,
   useDeleteOrder,
   useDeleteResume,
   useDeleteService,
   useHideEquipment,
   useHideOrder,
   useHideResume,
   useHideService,
   useHideVacancy,
   useDeleteVacancy,
   useDeletePosition,
   useDeleteOrganization,
} from "../model/useQueries";
import { useDeleteAccount, useLogout } from "@/features/auth";
import {useBookOrder} from "@/widgets/general/feedbackList/model/useQuieries";

type RequestFunction = () => any;
type RequestFunctionWithParam = (type?: string) => any;

interface ModalAction {
   title: string;
   description: string;
   buttonText: string;
   emoji: string;
   request: RequestFunction | RequestFunctionWithParam ;
}
export const ModalActionsMap: { [key: string]: ModalAction } = {
   [MODAL_KEYS.deleteResume]: {
      title: "Вы действительно хотите \n удалить резюме?",
      description: "Все данные будут удалены!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useDeleteResume,
   },
   [MODAL_KEYS.deleteOrganization]: {
      title: "Вы действительно хотите \n удалить организацию?",
      description: "Все данные будут удалены!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useDeleteOrganization,
   },
   [MODAL_KEYS.noChangeChoice]: {
      title: "Вы действительно хотите \n выбрать данную организацию?",
      description: "Изменить выбор уже будет нельзя",
      buttonText: "Выбрать",
      emoji: "unknown",
      request: () => useBookOrder,
   },
   [MODAL_KEYS.deleteAnnouncement]: {
      title: "Удалить объявление?",
      description: "Объявление удалится навсегда!",
      buttonText: "Удалить",
      emoji: "unknown",
      request: (type: string | undefined) => {
         if (type === AnnouncementTypes.order) return useDeleteOrder;
         if (type === AnnouncementTypes.equipment) return useDeleteEquipment;

         return useDeleteService;
      },
   },
   [MODAL_KEYS.hideAnnouncement]: {
      title: "Скрыть объявление?",
      description: "Объявление больше не будет доступно \n для просмотра в маркетплейсе",
      buttonText: "Скрыть",
      emoji: "reverse",
      request: (type: string | undefined) => {
         if (type === AnnouncementTypes.order) return useHideOrder;
         if (type === AnnouncementTypes.equipment) return useHideEquipment;

         return useHideService;
      },
   },
   [MODAL_KEYS.unHideAnnouncement]: {
      title: "Показать объявление?",
      description: "Объявление будет доступно \n для просмотра в маркетплейсе",
      buttonText: "Показать",
      emoji: "reverse",
      request: (type: string | undefined) => {
         if (type === AnnouncementTypes.order) return useHideOrder;
         if (type === AnnouncementTypes.equipment) return useHideEquipment;

         return useHideService;
      },
   },
   [MODAL_KEYS.deleteEmployee]: {
      title: "Вы действительно хотите \n удалить сотрудника?",
      description: "Сотрудник будет удалён!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useDeleteEmployee,
   },
   [MODAL_KEYS.deleteAccount]: {
      title: "Вы действительно \n хотите удалить?",
      description: "Все данные будут удалены!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useDeleteAccount,
   },
   [MODAL_KEYS.deletePosition]: {
      title: "Вы действительно хотите \n  удалить должность?",
      description: "Все данные будут удалены!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useDeletePosition,
   },
   [MODAL_KEYS.hideResume]: {
      title: "Вы действительно \n хотите скрыть?",
      description: "Резюме больше не будет доступно \n для просмотра ",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useHideResume,
   },
   [MODAL_KEYS.hideVacancy]: {
      title: "Вы действительно \n хотите скрыть?",
      description: "Вакансия больше не будет доступна \n для просмотра ",
      buttonText: "Скрыть",
      emoji: "unknown",
      request: () => useHideVacancy,
   },
   [MODAL_KEYS.unHideVacancy]: {
      title: "Вы действительно \n хотите показать вакансию?",
      description: "Вакансия снова будет \n  доступна для просмотра",
      buttonText: "Показать",
      emoji: "unknown",
      request: () => useHideVacancy,
   },
   [MODAL_KEYS.deleteVacancy]: {
      title: "Вы действительно \n хотите удалить?",
      description: "Все данные будут удалены!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useDeleteVacancy,
   },
   [MODAL_KEYS.activateOrganization]: {
      title: "Вы действительно хотите \n активировать данную организацию?",
      description: "Старая организация станет деактивной,\n но продолжит функционировать",
      buttonText: "Активировать",
      emoji: "unknown",
      request: () => useActiveOrganization,
   },
   [MODAL_KEYS.logout]: {
      title: "Вы действительно \n хотите выйти?",
      description: "Все данные будут сохранены!",
      buttonText: "Да",
      emoji: "unknown",
      request: () => useLogout,
   },
};

export const modalInfoMap = {
   [MODAL_KEYS.acceptAnnouncement]: {
      title: "Вы отправили заявку!",
      description: "Ваш заказ находится на рассмотрении",
      buttonText: "Понятно",
      emoji: "holidaySmile",
   },
   [MODAL_KEYS.noOrganizationOrders]: {
      title: "Тут пока нет заказов",
      description: "Добавьте новые заказы \n и они появятся тут",
      buttonText: "Понятно",
      emoji: "holidaySmile",
   },
   [MODAL_KEYS.buyAnnouncement]: {
      title: " Поздравляем!\n Вы купили оборудование!",
      description: "Подробная информация отправлена вам на почту",
      buttonText: "Посмотреть",
      emoji: "holidaySmile",
   },
   [MODAL_KEYS.rejectAnnouncement]: {
      title: " Ой,\n Вы опоздали...",
      description: "Подробная информация отправлена вам на почту",
      buttonText: "Посмотреть другие заказы",
      emoji: "sad",
   },
   [MODAL_KEYS.requireAnnouncement]: {
      title: "Заполните \n обязательные поля",
      description: "Они отмечены красной звездочкой",
      buttonText: "Заполнить",
      emoji: "unknown",
   },
   [MODAL_KEYS.subscribe]: {
      title: "Ура! \n Подписка уже в пути!",
      description: "С вами свяжется наш администратор",
      buttonText: "Понятно",
      emoji: "holidayStuff",
   },
   [MODAL_KEYS.noRights]: {
      title: "У вас недостаточно прав \n для этого действия!",
      description: "Пожалуйста, свяжитесь с владельцем для получения прав.",
      buttonText: "Понятно",
      emoji: "unknown",
   },
   [MODAL_KEYS.error]: {
      title: "Произошла ошибка \n при получении данных!",
      description: "Пожалуйста, попробуйте еще раз через некоторое время.",
      buttonText: "Понятно",
      emoji: "unknown",
   },
   [MODAL_KEYS.noChangeOwner]: {
      title: "Должность основателя \n нельзя поменять!",
      description: "Вы можете только передать \n её другому сотруднику",
      buttonText: "Понятно",
      emoji: "unknown",
   },
   [MODAL_KEYS.noChangeDeleteOwner]: {
      title: "Должность основателя \n нельзя удалить!",
      description: "Вы можете только передать \n её другому сотруднику",
      buttonText: "Понятно",
      emoji: "unknown",
   },
   [MODAL_KEYS.noInviteOwner]: {
      title: "Вы не можете пригласить \n сотрудника на должность \n основателя!",
      description: "Пожалуйста, выберите  другую роль для сотрудника!",
      buttonText: "Понятно",
      emoji: "unknown",
   },
   [MODAL_KEYS.authNotice]: {
      title: "Вам нужно авторизоваться!",
      description: "Если у вас есть аккаунт то войдите, если нет то пройдите регистрацию",
      buttonText: "Понятно",
      emoji: "unknown",
      login: "Войти/Регистрация",
   },
};
