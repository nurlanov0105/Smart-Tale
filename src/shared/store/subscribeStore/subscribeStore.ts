import { create } from "zustand";
import { RIGHT_ACTIONS } from "@/shared/lib/constants/consts";
import { ProfileRequestTypes, RightsTypes, UserPositionTypes } from "@/shared/lib";

interface PositionsTypes extends RightsTypes {
   organization: string | null;
   job_title: string | null;
}

interface SubscribeState {
   isSubscribe: boolean;
   isError: boolean;
   data: ProfileRequestTypes | null;
   position: UserPositionTypes;
   setSubscribeState: (state: Partial<SubscribeState>) => void;
}

export const useSubscribeStore = create<SubscribeState>((set) => ({
   isSubscribe: false,
   data: null,
   isError: false,
   position: {
      organization: null,
      job_title: null,
      [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: "false",
      [RIGHT_ACTIONS.REMOVE_POSITION]: "false",
      [RIGHT_ACTIONS.DELETE_ORDER]: "false",
      [RIGHT_ACTIONS.UPDATE_ORDER]: "false",
      [RIGHT_ACTIONS.UPDATE_ACCESS]: "false",
      [RIGHT_ACTIONS.ADD_EMPLOYEE]: "false",
      [RIGHT_ACTIONS.CREATE_POSITION]: "false",
   },
   setSubscribeState: (state: Partial<SubscribeState>) => set(state),
}));
