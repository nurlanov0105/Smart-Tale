"use client";
import React, {useEffect, useState} from "react";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import { employeesHistory, historyValues } from "../model/historyValues";
import {IDateProps} from "@/entities/general/selectDate";
import {OrganizationService, SELECT_TYPES, SkeletonTypes, useEmployees} from "@/shared/lib";
import SelectDate2 from "@/entities/general/selectDate/ui/SelectDate2";
import Select2 from "@/shared/ui/select/Select2";
import {useHistoryOrders} from "../model/useHistoryOrders";
import styles from "./styles.module.scss";
import {OrganizationQueryKeys} from "@/shared/api";

const AdminHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);
   const [selected, setSelected] = useState(employeesHistory[0]);
   const [employees, setEmployees] = useState([employeesHistory[0]]);


    const {data} = useHistoryOrders()
    const {data: dataEmployees, isSuccess} = useEmployees()

    useEffect(() => {
        if (isSuccess && dataEmployees){
            const employeesList = dataEmployees.map(employee => {
                return {value: `${employee.last_name} ${employee.first_name} ${employee.middle_name}`, postValue: employee.user_slug}
            })

            setEmployees(prevState => {
                return [...prevState, ...employeesList]
            })
        }
        // eslint-disable-next-line
    }, [isSuccess]);

    const [day, setDay] = useState<IDateProps>({value: 0, postValue: 0})
    const [month, setMonth] = useState<IDateProps>({value: "", postValue: 0})
    const [year, setYear] = useState<IDateProps>({value: 0, postValue: 0})

    console.log(type)
   return (
      <section className={styles.section}>
         <div className={styles.section__margin}>
            <h4 className="h4">Пользователь</h4>
         </div>
         <Select2
             selected={selected}
            setSelected={setSelected}
            title="Сотрудник"
            data={employees}
            type={SELECT_TYPES.default}
         />
         <div className={styles.section__row}>
            <Tabs type={type} setType={setType} values={historyValues}/>
            <div className={styles.section__date}>
               <h5>Фильтр по дате принятия заказа</h5>
               <SelectDate2
                  day={day}
                  setDay={setDay}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  type="admin"
               />

            </div>
         </div>

         {/*<OrderList*/}
         {/*   data={data?.data?.data}*/}
         {/*   isLoading={false}*/}
         {/*   isError={false}*/}
         {/*   isCurrent={type === "current"}*/}
         {/*   fetchFunction={EquipmentService.getMyAds}*/}
         {/*   queryKey={EquipmentQueryKeys.GET_MY_ADS}*/}
         {/*   type={SkeletonTypes.listItem}*/}
         {/*   tab={type}*/}
         {/*/>*/}
          <OrderList
              fetchFunction={OrganizationService.getHistoryOrders}
              queryKey={OrganizationQueryKeys.HISTORY_ORDERS}
              type={SkeletonTypes.listItem}
              tab={type}
              isCurrent={type === "current"}
          />
      </section>
   );
};

export default AdminHistory;
