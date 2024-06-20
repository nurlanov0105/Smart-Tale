import { FC } from "react";
import { Button } from "@/shared/ui";
import { FeedbackListProps } from "../model/types";
import { useBookOrder, useGetAppliedOrgs } from "../model/useQuieries";
import styles from "./styles.module.scss";

const FeedbackList: FC<FeedbackListProps> = ({ slug }) => {
   // const { data, totalPages, currentPage, fetchNextPage, fetchPreviousPage, setCurrentPage } =
   //    usePagination({
   //       fetchFunction: OrdersService.getAppliedOrganizations,
   //       queryKey: OrdersQueryKeys.APPLIED_OERGANIZATIONS,
   //       slug,
   //    });

   const { data, isError, isLoading, isSuccess } = useGetAppliedOrgs(slug);

   const { mutate, isPending } = useBookOrder();

   const handleBookOrder = (orgSlug: string) => {
      mutate({ orderSlug: slug, organizationSlug: orgSlug });
   };

   if (!isLoading) {
      console.log(data);
   }

   return (
      <div className={styles.feedback}>
         <h3 className="h3">Список заявок</h3>
         <ul className={styles.feedback__list}>
            {isSuccess &&
               data.data.map((item: any) => (
                  <li key={item.slug} className={styles.feedback__item}>
                     <div className={styles.feedback__flex}>
                        <b>Организация:</b>
                        <span>{item.title}</span>
                     </div>
                     <Button onClick={() => handleBookOrder(item.slug)}>
                        {isPending ? "Загрузка..." : "Выбрать"}
                     </Button>
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
