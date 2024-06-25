import { create } from "zustand";
import { RIGHT_ACTIONS } from "@/shared/lib/constants/consts";
import { ProfileRequestTypes, RightsTypes, UserPositionTypes } from "@/shared/lib";

interface SubscribeState {
   isSubscribe: boolean;
   isError: boolean;
   data: ProfileRequestTypes | null;
   position: UserPositionTypes
   setSubscribeState: (state: Partial<SubscribeState>) => void;
}

export const useSubscribeStore = create<SubscribeState>((set) => ({
   isSubscribe: false,
   data: null,
   isError: false,
   position: {
      organization: undefined ,
      active: undefined,
      job_title: undefined,
      slug: undefined,
      [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: "false",
      [RIGHT_ACTIONS.REMOVE_POSITION]: "false",
      [RIGHT_ACTIONS.DELETE_ORDER]: "false",
      [RIGHT_ACTIONS.UPDATE_ORDER]: "false",
      [RIGHT_ACTIONS.UPDATE_ACCESS]: "false",
      [RIGHT_ACTIONS.ADD_EMPLOYEE]: "false",
      [RIGHT_ACTIONS.CREATE_POSITION]: "false",
      [RIGHT_ACTIONS.CREATE_VACANCY]: "false",
      [RIGHT_ACTIONS.CHANGE_EMPLOYEE_POSITION]: "false",
      [RIGHT_ACTIONS.WATCH_EMPLOYEE_SETTINGS]: "false",
   },
   setSubscribeState: (state: Partial<SubscribeState>) => set(state),
}));
