import {SelectPostTypes} from "@/shared/lib/types/types";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";



export interface RightsTypes{
    [RIGHT_ACTIONS.CREATE_POSITION]: string,
    [RIGHT_ACTIONS.ADD_EMPLOYEE]: string,
    [RIGHT_ACTIONS.DELETE_ORDER]: string,
    [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: string,
    [RIGHT_ACTIONS.UPDATE_ACCESS]: string,
    [RIGHT_ACTIONS.REMOVE_POSITION]: string,
    [RIGHT_ACTIONS.UPDATE_ORDER]: string,
}

export interface GetPositionTypes extends RightsTypes{
    title: string
    description: string
}

export interface AddPositionTypes extends RightsTypes{
    title: string
    description: string
    organization: SelectPostTypes
}

export interface AddPositionRequestTypes extends RightsTypes{
    title: string
    description: string
    organization: string
}

export interface IRight {
    name: string
    title: string
    value: string
}

export interface AddEmployeeTypes{
    email: string
    position: {value: string, postValue: string, idx: number}
    organization: SelectPostTypes
    positions: SelectPostTypes[]
    actions: IRight[]
}
export interface AddEmployeeRequestTypes{
    email: string
    jt_slug: string
    org_slug: string
}

interface IPosition extends RightsTypes{
    value: string
    postValue: string
    idx: number
}

export interface EmployeeDetailsTypes extends RightsTypes{
    name: string
    lastName: string
    patronymic: string
    email: string
    tel: string
    position: IPosition
    positions: SelectPostTypes[]
}

export interface EmployeeDetailsResponseTypes extends RightsTypes{
    first_name: string
    last_name: string
    middle_name: string
    email: string
    phone_number: string
    job_title: string
}


export interface ChangePositionQueryTypes{
    slug: string
    params: AddPositionTypes
}