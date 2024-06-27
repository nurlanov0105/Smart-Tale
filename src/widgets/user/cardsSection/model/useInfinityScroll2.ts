"use client";
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import {
   EquipmentService,
   OrdersService,
   ResumeService,
   ServicesService,
   UserService,
   VacancyFilterStore,
   VacancyService,
} from "@/shared/lib";
import {
   EquipmentQueryKeys,
   OrdersQueryKeys,
   ResumeQueryKeys,
   ServiceQueryKeys,
   UserQueryKeys,
   VacancyQueryKeys,
} from "@/shared/api/queryKeys";

const options = {
   rootMargin: "5px",
   threshold: 0.5,
};

interface IProps {
   initialData: any;
   queryKey: string;
   dependencies?: {
      tab?: string;
      tabType?: string;
      param_tab?: string;
      slug?: string;
      schedule?: string[];
      incomeLevel?: string;
      location?: string[];
      job_title?: string[];
      experience?: string;
   };
}
interface QueryFunctionTypes {
   queryFn: Function;
   nestedData: any[];
}

const queryFunctionType = (initialData: any) => {
   const defaultValues = VacancyFilterStore((state) => state.defaultValues);

   return {
      [OrdersQueryKeys.ORDERS]: {
         queryFn: OrdersService.getOrders,
         nestedData: initialData?.data?.data,
      },
      [EquipmentQueryKeys.EQUIPMENTS]: {
         queryFn: EquipmentService.getEquipments,
         nestedData: initialData?.data,
      },
      [ServiceQueryKeys.SERVICES]: {
         queryFn: ServicesService.getServices,
         nestedData: initialData?.data,
      },
      [UserQueryKeys.ORDER_HISTORY]: {
         queryFn: OrdersService.getMyOrdersHistory,
         nestedData: initialData?.data || [],
      },
      [UserQueryKeys.FAVORITES]: {
         queryFn: UserService.getFavorites,
         nestedData: initialData?.data || [],
      },
      [UserQueryKeys.PURCHASES]: {
         queryFn: EquipmentService.MY_PURCHASES,
         nestedData: initialData?.data || [],
      },
      [ResumeQueryKeys.GET_RESUMES]: {
         queryFn: ResumeService.getResumes,
         nestedData: initialData?.data || [],
      },
      [VacancyQueryKeys.GET_VACANCIES]: {
         queryFn: VacancyService.getVacancies,
         nestedData: initialData?.data || [],
      },
      [UserQueryKeys.COMMON_USER]: {
         queryFn: UserService.getCommonUserAds,
         nestedData: initialData?.data || [],
      },
   };
};

//const getNestedData = (initialData: any, path: string) => {
//     return path.split('.').reduce((acc, key) => acc?.[key], initialData) || [];
// };

export const useInfinityScroll2 = ({ initialData, queryKey, dependencies }: IProps) => {
   const [isFirstRender, setIsFirstRender] = useState(true);

   const queryClient = useQueryClient();

   // useEffect(() => {
   //     if (isFirstRender){
   //         const clearCachedPages = () => {
   //             queryClient.setQueryData([queryKey], existingData => {
   //                 return existingData ? {
   //                     pageParams: [(existingData as any).pageParams[0]],
   //                     pages: [(existingData as any).pages[0]],
   //                 } : undefined
   //             });
   //             setIsFirstRender(true)
   //         };
   //         clearCachedPages()
   //     }
   //
   // }, [queryKey, queryClient, isFirstRender]);

   // useEffect(() => {
   //     if (isFirstRender) {
   //         queryClient.removeQueries({queryKey: [queryKey]});
   //         setIsFirstRender(false);
   //     }
   // }, [queryKey, queryClient, isFirstRender]);

   const queryFn = queryFunctionType(initialData)[queryKey] as QueryFunctionTypes;

   const { fetchNextPage, hasNextPage, isFetchingNextPage, data, isLoading, isError } =
      useInfiniteQuery({
         queryKey: [queryKey, dependencies],
         queryFn: ({ pageParam = 1 }) =>
            queryFn.queryFn({
               page: pageParam,
               ...dependencies,
            }),
         initialPageParam: 1,
         initialData: {
            pages: [
               {
                  data: queryFn.nestedData,
                  hasNextPage: initialData?.has_next_page || false,
                  nextPage: initialData?.next_page_number || 2,
               },
            ],
            pageParams: [1],
         },
         retry: 1,
         enabled: !!queryFn && !isFirstRender,
         getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.nextPage : undefined),
      });

   const observerTarget = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         if (
            entries[0].isIntersecting &&
            hasNextPage &&
            !isFetchingNextPage &&
            !!queryFn.nestedData
         ) {
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
   }, [
      observerTarget,
      hasNextPage,
      fetchNextPage,
      isLoading,
      queryFn.nestedData,
      isFetchingNextPage,
   ]); //isFetchingNextPage

   return {
      isFetchingNextPage,
      observerTarget,
      data: data ? data.pages.flatMap((page) => page.data) : [],
      isLoading,
      isError,
   };
};
