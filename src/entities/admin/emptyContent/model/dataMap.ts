import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {WORK} from "@/shared/lib/routes.config";

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
    [EMPTY_CONTENT_TYPES.resume]: {
        title: "Тут еще нет резюме",
        description: "Создайте своё резюме и разместите \n его, чтобы другие видели",
        button: "Создать",
        route: WORK.RESUME
    },
    [EMPTY_CONTENT_TYPES.vacancy]: {
        title: "Тут еще нет вакансий",
        description: "Добавьте новую вакансию и разместите \n её, чтобы другие видели",
        button: "Добавить",
        route: ORGANIZATION_ROUTES.CREATE_VACANCY
    },

}