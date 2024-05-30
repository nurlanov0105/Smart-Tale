import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {RightsTypes} from "@/shared/lib";
import {rightsActionsData} from "@/entities/admin/rightAction";

export const defaultValuesEmployeeDetails = {
    email: "Загрузка...",
    name: "Загрузка...",
    lastName: "Загрузка...",
    patronymic: "Загрузка...",
    tel: "Загрузка...",
    position: { value: "", postValue: "" },
    // [RIGHT_ACTIONS.CREATE_POSITION]: "false",
    // [RIGHT_ACTIONS.REMOVE_POSITION]: "false",
    // [RIGHT_ACTIONS.UPDATE_ACCESS]: "false",
    // [RIGHT_ACTIONS.ADD_EMPLOYEE]: "false",
    // [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: "false",
    // [RIGHT_ACTIONS.UPDATE_ORDER]: "false",
    // [RIGHT_ACTIONS.DELETE_ORDER]: "false",
    // positions: rightsActionsData
}

export const EMPLOYEE_SETTINGS_NAMES = {
    email: "email",
    name: "name",
    lastName: "lastName",
    patronymic: "patronymic",
    tel: "tel",
    position: "position",
    positions: "positions",
    [RIGHT_ACTIONS.CREATE_POSITION]: [RIGHT_ACTIONS.CREATE_POSITION],
    [RIGHT_ACTIONS.REMOVE_POSITION]: [RIGHT_ACTIONS.REMOVE_POSITION],
    [RIGHT_ACTIONS.UPDATE_ACCESS]: [RIGHT_ACTIONS.UPDATE_ACCESS],
    [RIGHT_ACTIONS.ADD_EMPLOYEE]: [RIGHT_ACTIONS.ADD_EMPLOYEE],
    [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: [RIGHT_ACTIONS.REMOVE_EMPLOYEE],
    [RIGHT_ACTIONS.UPDATE_ORDER]: [RIGHT_ACTIONS.UPDATE_ORDER],
    [RIGHT_ACTIONS.DELETE_ORDER]: [RIGHT_ACTIONS.DELETE_ORDER],
} as const