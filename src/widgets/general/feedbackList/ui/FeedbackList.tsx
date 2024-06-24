import { FC } from "react";
import { Button, GlobalLoading } from "@/shared/ui";
import { FeedbackListProps } from "../model/types";
import { useGetAppliedOrgs } from "../model/useQuieries";
import styles from "./styles.module.scss";
import { showModal } from "@/views/modal";
import { MODAL_KEYS, ROUTES } from "@/shared/lib";
import { useRouter } from "next/navigation";

const FeedbackList: FC<FeedbackListProps> = ({ slug, isBooked }) => {
   // const { data, totalPages, currentPage, fetchNextPage, fetchPreviousPage, setCurrentPage } =
   //    usePagination({
   //       fetchFunction: OrdersService.getAppliedOrganizations,
   //       queryKey: OrdersQueryKeys.APPLIED_OERGANIZATIONS,
   //       slug,
   //    });
   const { push } = useRouter();

   const { data, isError, isLoading, isSuccess } = useGetAppliedOrgs(slug);

   const handleBookOrder = (orgSlug: string) => {
      showModal(MODAL_KEYS.confirmationModal, {
         componentName: MODAL_KEYS.noChangeChoice,
         organizationSlug: orgSlug,
         slug,
      });
   };
   const handleRoute = (slug?: string) => push(ROUTES.ORGANIZATIONS_OTHER_DETAIL + `/${slug}`);

   if (isBooked) return null;

   if (isLoading)
      return (
         <div className={styles.feedback}>
            <GlobalLoading />
         </div>
      );

   if (isSuccess && data?.data.length === 0) {
      return <></>;
   }

   return (
      <div className={styles.feedback}>
         <h3 className="h4">Список заявок</h3>
         <ul className={styles.feedback__list}>
            {isSuccess &&
               data.data.map((item: any) => (
                  <li key={item.slug} className={styles.feedback__item}>
                     <button
                        onClick={() => handleRoute(item?.slug)}
                        className={styles.feedback__flex}>
                        <b>Организация:</b>
                        <span>{item.title}</span>
                     </button>
                     <Button onClick={() => handleBookOrder(item.slug)}>Выбрать</Button>
                  </li>
               ))}
         </ul>
         {/* {totalPages > 1 && (
            <Pagination
               totalPages={totalPages}
               currentPage={currentPage}
               fetchNextPage={fetchNextPage}
               fetchPreviousPage={fetchPreviousPage}
               setCurrentPage={setCurrentPage}
            />
         )} */}
      </div>
   );
};

export default FeedbackList;
