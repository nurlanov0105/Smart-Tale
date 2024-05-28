import { TypeRightActions } from "./types";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";

export const rightsActionsData: TypeRightActions[] = [
   {
      title: "Изменение прав доступа у ролей",
      name: RIGHT_ACTIONS.UPDATE_ACCESS
   },
   {
      title: "Добавление работника",
      name: RIGHT_ACTIONS.ADD_EMPLOYEE
   },
   {
      title: "Изменение статуса заказа",
      name: RIGHT_ACTIONS.UPDATE_ORDER
   },
   {
      title: "Отмена заказа",
      name: RIGHT_ACTIONS.DELETE_ORDER
   },
   {
      title: "Создание и выдача Роли",
      name: RIGHT_ACTIONS.CREATE_POSITION
   },
   {
      title: "Удаление роли",
      name: RIGHT_ACTIONS.REMOVE_POSITION
   },
];



