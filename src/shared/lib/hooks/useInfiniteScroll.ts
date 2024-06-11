"use client";

import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { EquipmentQueryKeys, UserQueryKeys } from "@/shared/api";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";

interface Props {
   fetchFunction: ({
      page,
      tab,
      tabType,
      param_tab,
      slug,
   }: {
      page: number;
      tab?: string;
      tabType?: string;
      param_tab?: string;
      slug?: string;
   }) => Promise<any>;

   queryKey: string;
   tab?: string;
   tabType?: string;
   param_tab?: string;
   slug?: string;
}

export interface IData {
   id: number;
   type: string;
   status?: string;
   slug: string;
   title: string;
   description: string;
   created_at: string;
   image?: string;
   service: string;
}

const options = {
   rootMargin: "5px",
   threshold: 0.5,
};

export const useInfiniteScroll = ({
   fetchFunction,
   queryKey,
   param_tab,
   tab,
   tabType,
   slug,
}: Props) => {
   const observerTarget = useRef<HTMLDivElement>(null);
   // const scrollTarget = useRef<HTMLDivElement>(null);
   // const [showBtn, setShowbtn] = useState(false);

   const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isError, isLoading } =
      useInfiniteQuery({
         queryKey: [queryKey, param_tab, tab, tabType, slug],
         queryFn: ({ pageParam }) => fetchData({ pageParam }),
         initialPageParam: 1,
         getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.nextPage : undefined),
      });

   if (!isFetching) {
      console.log(data);
      // console.log(data ? data.pages.flatMap((page) => page.data) : []);
   }

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
         }
      }, options);

      const observeTarget = observerTarget.current;

      if (observeTarget) {
         observer.observe(observeTarget);
      }

      return () => {
         if (observeTarget) {
            observer.unobserve(observeTarget);
         }
      };
   }, [observerTarget, hasNextPage, isFetchingNextPage, fetchNextPage]);

   const fetchData = async ({ pageParam = 1 }) => {
      const res = await fetchFunction({
         page: pageParam,
         param_tab: param_tab ? param_tab : "",
         slug: slug ? slug : "",
      });
      if (!res) {
         throw new Error("Ошибка при получении данных");
      }
      console.log(res);

      const data =
         queryKey === UserQueryKeys.ORDER_HISTORY
            ? res.data.data
            : param_tab
            ? res.data
            : res.data.data;
      const hasNextPage =
         queryKey === UserQueryKeys.ORDER_HISTORY || queryKey === OrdersQueryKeys.ORDERS
            ? res.has_next_page
            : param_tab
            ? res.has_next_page
            : res.data.has_next_page;

      return {
         data: data,
         nextPage: pageParam + 1,
         hasNextPage: hasNextPage,
      };
   };

   // useEffect(() => {
   //    const totalData = data ? data.pages.flatMap((page) => page.data) : [];
   //    if (scrollTarget && totalData.length > 10) {
   //       setShowbtn(true);
   //    }
   // }, [data]);

   // const goTop = () => {
   //    scrollTarget.current?.scrollTo(0, 0);
   //    console.log("scorlll");
   // };

   return {
      observerTarget,
      data: data ? data.pages.flatMap((page) => page.data) : [],
      isError,
      isLoading,
      isFetchingNextPage,
      // scrollTarget,
      // showBtn,
      // goTop,
   };
};
