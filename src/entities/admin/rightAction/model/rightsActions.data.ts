import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import { TypeRightActions } from "./types";

export const rightsActionsData: TypeRightActions[] = [
   {
      title: "Создание и выдача Роли",
      name: RIGHT_ACTIONS.CREATE_POSITION,
      value: ""
   },
   {
      title: "Удаление роли",
      name: RIGHT_ACTIONS.REMOVE_POSITION,
      value: ""
   },
   {
      title: "Изменение прав доступа у ролей",
      name: RIGHT_ACTIONS.UPDATE_ACCESS,
      value: ""
   },
   {
      title: "Добавление работника",
      name: RIGHT_ACTIONS.ADD_EMPLOYEE,
      value: ""
   },
   {
      title: "Просмотр личной информации сотрудников",
      name: RIGHT_ACTIONS.WATCH_EMPLOYEE_SETTINGS,
      value: ""
   },
   {
      title: "Изменение должностей у сотрудников",
      name: RIGHT_ACTIONS.CHANGE_EMPLOYEE_POSITION,
      value: ""
   },
   {
      title: "Удаление сотрудника",
      name: RIGHT_ACTIONS.REMOVE_EMPLOYEE,
      value: ""
   },
   {
      title: "Изменение статуса заказа",
      name: RIGHT_ACTIONS.UPDATE_ORDER,
      value: ""
   },
   {
      title: "Отмена заказа",
      name: RIGHT_ACTIONS.DELETE_ORDER,
      value: ""
   },
   {
      title: "Создание вакансии",
      name: RIGHT_ACTIONS.CREATE_VACANCY,
      value: ""
   }
];



