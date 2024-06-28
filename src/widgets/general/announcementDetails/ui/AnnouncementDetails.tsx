"use client";

import { MODAL_KEYS, ORGANIZATION_ROUTES, ROUTES, useEmployees, useGetDates } from "@/shared/lib";
import { useThemeStore } from "@/shared/lib";
import { Button, GlobalLoading, PriceFormat } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import avatar from "@@/imgs/auth/auth-1.jpg";
import { usePathname } from "next/navigation";
import { useGetOrderEmployees } from "@/features/admin/adminEmployeesItem";
import {
   useAddEmployeeOrder,
   useGetOrderDetail,
   useRemoveEmployeeOrder,
} from "@/features/admin/adminEmployeesItem/model/useQueries";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { monthsForDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";
import { showModal } from "@/views/modal";
import { useState } from "react";
import { CircleX, X } from "lucide-react";

const AnnouncementDetails = () => {
   const pathname = usePathname();
   const orderSlug = pathname.substring(pathname.lastIndexOf("/") + 1);
   const [showMinus, setShowMinus] = useState(false);

   const {
      data: orderData,
      isLoading: orderisLoading,
      isError: orderisError,
   } = useGetOrderDetail(orderSlug);
   const {
      data: employeesData,
      isLoading: employeesisLoading,
      isError: employeesisError,
   } = useGetOrderEmployees(orderSlug);

   const { mutate: removeEmployee, isPending: removeIsLoading } = useRemoveEmployeeOrder();
   const {
      data: usersData,
      isLoading: usersIsLoading,
      isError: usersIsError,
      isSuccess: usersIsSuccess,
   } = useEmployees();

   const handleAddClick = () => {
      showModal(MODAL_KEYS.infoListModal, {
         componentName: MODAL_KEYS.usersListModal,
         data: {
            data: usersData ? usersData : [],
            slug: orderSlug,
         },
         type: "users",
      });
   };

   const handleShowMinus = () => {
      setShowMinus((prev) => !prev);
   };

   const handleRemoveEmployee = (userSlug: string) => {
      removeEmployee({ employeeSlug: userSlug, orderSlug: orderSlug });
   };

   if (!usersIsLoading) {
      console.log("usersData", usersData);
   }

   const theme = useThemeStore((state) => state.theme);

   const { day, month, year } = useGetDates(
      orderData?.data?.deadline ? orderData?.data?.deadline : ""
   );
   const monthFormat = monthsForDate()[month]?.value;

   if (!employeesisLoading) {
      console.log("employeesData", employeesData);
   }

   if (orderisLoading) {
      return <GlobalLoading />;
   }

   if (orderisError) {
      return <ErrorMessage />;
   }

   return (
      <div className={clsx(styles.item, styles[theme])}>
         <div className={styles.item__info}>
            <div>
               <h5 className={styles.item__subtitle}>Заказ </h5>
               <p className={styles.item__title}>{orderData?.data?.title}</p>
               <p className={styles.item__text}>{orderData?.data?.description}</p>
               <p className={styles.item__price}>
                  <PriceFormat type={orderData?.data?.currency} price={+orderData?.data?.price} />
               </p>
            </div>
            <div className={styles.item__shrink}>
               <p className={styles.item__date}>Срок {`${day} ${monthFormat} ${year}`}</p>
            </div>
         </div>
         <div className={styles.item__border}>
            <h4 className="h4">Сотрудники</h4>
            <div className={styles.item__employees}>
               {employeesisLoading ? (
                  <GlobalLoading />
               ) : employeesisError ? (
                  <ErrorMessage />
               ) : (
                  employeesData?.map((item: any) => (
                     <div
                        key={item?.user_profile}
                        className={clsx(styles.item__user, showMinus && styles.item__userPadding)}>
                        <Link
                           href={ORGANIZATION_ROUTES.EMPLOYEES_DETAILS + "/" + item?.user_slug}
                           className={styles.item__employee}>
                           <Image
                              className={styles.item__image}
                              src={item?.image ? item?.image : avatar}
                              alt="avatar"
                              width={48}
                              height={48}
                           />
                           <div>
                              <h4 className="h4">{item?.first_name + " " + item?.last_name}</h4>
                              <p className={styles.item__salary}>
                                 {item.job_title}
                                 {/* <PriceFormat type={item?.currency} price={+item?.price} /> */}
                              </p>
                           </div>
                        </Link>

                        {showMinus && (
                           <button
                              className={styles.item__btnMinus}
                              type="button"
                              onClick={() => handleRemoveEmployee(item?.user_slug)}>
                              <CircleX />
                           </button>
                        )}
                     </div>
                  ))
               )}
            </div>
         </div>
         <div className={styles.item__border}>
            <h4 className="h4">Заказчик</h4>
            <div className={styles.item__employees}>
               <Link
                  href={ROUTES.USERS + "/" + orderData?.data?.author?.slug}
                  className={styles.item__employee}>
                  <Image
                     className={styles.item__image}
                     src={orderData?.data?.author?.profile_image || avatar}
                     alt="avatar"
                     width={48}
                     height={48}
                  />
                  <div>
                     <h4 className="h4">
                        {orderData?.data?.author?.last_name} {orderData?.data?.author?.first_name}
                     </h4>
                     <p className={styles.item__salary}>{orderData?.data?.author?.phone_number}</p>
                  </div>
               </Link>
            </div>
         </div>
         <div className={styles.item__button}>
            <Button onClick={handleAddClick}>Добавить сотрудника</Button>
            <Button onClick={handleShowMinus}>
               {showMinus ? "Отменить" : "Снять заказ с сотрудника"}{" "}
            </Button>
            {/*<Button>Завершить Заказ</Button>*/}
         </div>
      </div>
   );
};

export default AnnouncementDetails;
