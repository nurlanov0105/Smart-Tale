"use client"
import {rightsActionsData} from "@/entities/admin/rightAction";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

export const useRightsActions = (type: string) => {
    // const data = useSubscribeStore(state => state.data);
    // const position = useSubscribeStore(state => state.position);
    // const positions = useSubscribeStore(state => state.data?.job_titles);
    // const isSubscribe = data?.is_subbed;
    // const subscription = data?.subscription;
    // const dataProfile = data?.profile
    //
    // if (type === "create_organization"){
    //     const MAX_ORGANIZATIONS_CREATING = 5;
    //     const MIN_ORGANIZATIONS_CREATING = 1;
    //
    //     if (isSubscribe && subscription && positions?.length === MIN_ORGANIZATIONS_CREATING){
    //         return
    //     }
    //     if (isSubscribe && !subscription &&
    //         positions?.length === MIN_ORGANIZATIONS_CREATING &&
    //         data?.profile.slug !== data?.org.founder)
    //     {
    //         return
    //     }
    //
    //     if (isSubscribe && !subscription && positions?.length === MAX_ORGANIZATIONS_CREATING){
    //         return
    //     }
    //     return true
    // }
    //
    // if (type === RIGHT_ACTIONS.ADD_EMPLOYEE){
    //
    // }
    //
    //
    // const rights = rightsActionsData
    // return true
};

// const rightAction = {
//     create_organization: useRightsActions("create_organization"),
//     [RIGHT_ACTIONS.UPDATE_ACCESS]: useRightsActions(RIGHT_ACTIONS.UPDATE_ACCESS),
//     [RIGHT_ACTIONS.ADD_EMPLOYEE]: useRightsActions(RIGHT_ACTIONS.UPDATE_ACCESS),
//     [RIGHT_ACTIONS.UPDATE_ORDER]: useRightsActions(RIGHT_ACTIONS.UPDATE_ORDER),
//     [RIGHT_ACTIONS.CREATE_POSITION]: useRightsActions(RIGHT_ACTIONS.CREATE_POSITION),
//     [RIGHT_ACTIONS.DELETE_ORDER]: useRightsActions(RIGHT_ACTIONS.DELETE_ORDER),
//     [RIGHT_ACTIONS.REMOVE_POSITION]: useRightsActions(RIGHT_ACTIONS.REMOVE_POSITION),
//     [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: useRightsActions(RIGHT_ACTIONS.REMOVE_EMPLOYEE),
//     [RIGHT_ACTIONS.CREATE_VACANCY]: useRightsActions(RIGHT_ACTIONS.CREATE_VACANCY),
//     [RIGHT_ACTIONS.WATCH_EMPLOYEE_SETTINGS]: useRightsActions(RIGHT_ACTIONS.WATCH_EMPLOYEE_SETTINGS),
//     [RIGHT_ACTIONS.CHANGE_EMPLOYEE_POSITION]: useRightsActions(RIGHT_ACTIONS.CHANGE_EMPLOYEE_POSITION),
// };