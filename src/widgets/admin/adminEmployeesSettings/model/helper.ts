import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";

export const defaultValuesEmployeeDetails = {
    email: "Загрузка...",
    name: "Загрузка...",
    lastName: "Загрузка...",
    patronymic: "Загрузка...",
    tel: "Загрузка...",
    position: { value: "", postValue: "" },
    [RIGHT_ACTIONS.CREATE_POSITION]: "false",
    [RIGHT_ACTIONS.REMOVE_POSITION]: "false",
    [RIGHT_ACTIONS.UPDATE_ACCESS]: "false",
    [RIGHT_ACTIONS.ADD_EMPLOYEE]: "false",
    [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: "false",
    [RIGHT_ACTIONS.UPDATE_ORDER]: "false",
    [RIGHT_ACTIONS.DELETE_ORDER]: "false",
}

export const rightsActionsMap = {
    [RIGHT_ACTIONS.UPDATE_ACCESS]: "Изменение прав доступа у ролей",
    [RIGHT_ACTIONS.ADD_EMPLOYEE]: "Добавление работника",
    [RIGHT_ACTIONS.UPDATE_ORDER]: "Изменение статуса заказа",
    [RIGHT_ACTIONS.CREATE_POSITION]: "Создание и выдача Роли",
    [RIGHT_ACTIONS.DELETE_ORDER]: "Отмена заказа",
    [RIGHT_ACTIONS.REMOVE_POSITION]: "Удаление роли",
    [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: "Удаление сотрудника",
}