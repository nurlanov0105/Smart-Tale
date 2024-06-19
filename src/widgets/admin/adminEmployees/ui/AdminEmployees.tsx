"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { EmployeesList } from "@/features/general/employeesList";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { Button } from "@/shared/ui";
import {ORGANIZATION_ROUTES, useEmployees} from "@/shared/lib";
import {EMPTY_CONTENT_TYPES, RIGHT_ACTIONS} from "@/shared/lib/constants/consts";

import styles from "./styles.module.scss";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {showModal} from "@/views/modal";

const AdminEmployees = () => {
   const router = useRouter();
   const subscribeData = useSubscribeStore(state => state.position)

   const handleRoute = () => {
      // if (!subscribeData[RIGHT_ACTIONS.ADD_EMPLOYEE]){
      //    showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
      //    return
      // }
      router.push(ORGANIZATION_ROUTES.INVITE_EMPLOYEES);
   };

   const {
      data,
      isLoading,
      isError,
      isSuccess} = useEmployees()

   return (
      <>
         {isSuccess && !data?.length ? (
            <EmptyContent type={EMPTY_CONTENT_TYPES.employees} />
         ) : (
            <div className={styles.employees__wrapper}>
               <div>
                  <div className={styles.employees}>
                     <h4 className="h4">Список сотрудников</h4>
                     <div className={styles.employees__btns}>
                        <Button onClick={handleRoute}>Пригласите сотрудника</Button>
                     </div>
                  </div>
                  <EmployeesList data={data} isLoading={isLoading} />
               </div>
            </div>
         )}
      </>
   );
};

export default AdminEmployees;
