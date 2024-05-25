import { TypeRightActions } from "./types";

export const rightsActionsData: TypeRightActions[] = [
   {
      title: "Изменение прав доступа у ролей",
      isRight: false,
      name: "change-roles"
   },
   {
      title: "Добавление работника",
      isRight: true,
      name: "add-employee"
   },
   {
      title: "Изменение статуса заказа",
      isRight: false,
      name: "change-status"
   },
   {
      title: "Отмена заказа",
      isRight: false,
      name: "cancel-order"
   },
   {
      title: "Создание и выдача Роли",
      isRight: true,
      name: "give-role"
   },
   {
      title: "Удаление роли",
      isRight: false,
      name: "delete-role"
   },
];
