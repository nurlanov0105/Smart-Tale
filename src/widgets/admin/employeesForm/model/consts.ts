import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";

export const ADD_EMPLOYEE_NAMES = {
    email: "email",
    updateRights: RIGHT_ACTIONS.UPDATE_ACCESS,
    addEmployee: RIGHT_ACTIONS.ADD_EMPLOYEE,
    updateOrderStatus: RIGHT_ACTIONS.UPDATE_ORDER,
    removePosition: RIGHT_ACTIONS.REMOVE_POSITION,
    createPosition: RIGHT_ACTIONS.CREATE_POSITION,
    deleteOrder: RIGHT_ACTIONS.DELETE_ORDER,
    deleteEmployee: RIGHT_ACTIONS.REMOVE_EMPLOYEE,
    position: "position",
    positions: "positions",
    organization: "organization",
    organizations: "organizations"
} as const

