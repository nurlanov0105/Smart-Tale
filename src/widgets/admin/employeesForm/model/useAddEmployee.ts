import {useFormContext} from "react-hook-form";
import {
   AddEmployeeTypes,
   MODAL_KEYS,
   OWNER,
} from "@/shared/lib";
import { showModal } from "@/views/modal";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {useAddEmployeeQuery} from "./useQueries";

export const useAddEmployee = () => {
   const {handleSubmit, reset} = useFormContext<AddEmployeeTypes>()
   const subscribeData = useSubscribeStore(state => state.position)

   const {
      mutate: inviteEmployee,
      isPending,
      isError,
   } = useAddEmployeeQuery(reset)

   const onsSubmit = (data: AddEmployeeTypes) => {
      if (!subscribeData[RIGHT_ACTIONS.ADD_EMPLOYEE]){
         showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
         return
      }
      if (data.position.value === OWNER) {
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.noInviteOwner });
         return;
      }
      const adapter = {
         email: data.email,
         org_slug: "neobisteam20", //data.organization.postValue
         jt_slug: data.position.postValue,
      };

      inviteEmployee(adapter);
   };

   return {
      handleSubmit: handleSubmit(onsSubmit),
      isLoading: isPending,
      isError
   };
};
