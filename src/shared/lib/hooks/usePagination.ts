"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ItemType, UsePaginationOptions, UsePaginationResult } from "../types/usePaginationTypes";

const usePagination = ({
   fetchFunction,
   queryKey,
   param_tab,
   tab,
   ads,
   title,
   slug,
}: UsePaginationOptions): UsePaginationResult => {
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [data, setData] = useState<ItemType[]>([]);

   const {
      data: queryData,
      isError,
      isLoading,
   } = useQuery({
      queryKey: [queryKey, currentPage, param_tab, tab, ads, title],

      queryFn: () =>
         fetchFunction({
            page: currentPage,
            param_tab: param_tab ? param_tab : "",
            ads: ads ? ads : "",
            title: title ? title : "",
            slug: slug ? slug : "",
         }),
   });

   useEffect(() => {
      if (queryData) {
         console.log(queryData);
         const fetchedTotalPages =
            param_tab || tab ? queryData?.total_pages : queryData?.data?.total_pages || 1;
         if (fetchedTotalPages !== totalPages) {
            setTotalPages(fetchedTotalPages);
         }

         const fetchedData = param_tab || tab ? queryData?.data : queryData?.data?.data || [];
         setData(fetchedData);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [queryData, param_tab, tab]);

   useEffect(() => {
      setCurrentPage(1);
   }, [param_tab, tab, ads, title]);

   const hasNextPage = currentPage < totalPages;

   const fetchNextPage = () => {
      if (hasNextPage) {
         setCurrentPage((prev) => prev + 1);
      }
   };

   const fetchPreviousPage = () => {
      if (currentPage > 1) {
         setCurrentPage((prev) => prev - 1);
      }
   };

   if (!isLoading) {
      console.log("feedback pag data - ", queryData);
   }

   return {
      data,
      totalPages,
      currentPage,
      isLoading,
      isError,
      hasNextPage,
      fetchNextPage,
      fetchPreviousPage,
      setCurrentPage,
   };
};

export default usePagination;
