import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import {ORGANIZATION_ROUTES} from "@/shared/lib";

export const dataMap = {
    [EMPTY_CONTENT_TYPES.organization]: {
        title: "Тут еще нет организаций",
        description: `Создайте свою организацию \n и добавьте своих сотрудников`,
        button: "Создать",
        route: ORGANIZATION_ROUTES.CREATE_ORGANIZATION
    },
    [EMPTY_CONTENT_TYPES.employees]: {
        title: "Тут еще нет сотрудников",
        description: `Создайте свою организацию \n и добавьте своих сотрудников`,
        button: "Пригласить",
        route: ORGANIZATION_ROUTES.INVITE_EMPLOYEES
    },
    [EMPTY_CONTENT_TYPES.positions]: {
        title: "Тут еще нет должностей",
        description: "Создайте новые должности \n и назначайте их сотрудникам",
        button: "Создать",
        route: ORGANIZATION_ROUTES.ADD_POSITION
    },

}