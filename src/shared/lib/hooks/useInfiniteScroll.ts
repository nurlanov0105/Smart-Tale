"use strict";

import { useEffect, useRef } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";

interface Props {
   fetchFunction: (page: number, tab?: string, param_tab?: string) => Promise<any>;

   tab?: string;
   param_tab?: string;
   queryKey: string;
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
   service?: string;
}

const options = {
   rootMargin: "5px",
   threshold: 0.5,
};

export const useInfiniteScroll = ({ fetchFunction, queryKey, param_tab, tab }: Props) => {
   const observerTarget = useRef<HTMLDivElement>(null);

   const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isError, isLoading } =
      useInfiniteQuery({
         queryKey: [queryKey, param_tab, tab],
         queryFn: ({ pageParam }) => fetchData({ pageParam }),
         initialPageParam: 1,
         getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.nextPage : undefined),
      });

   if (!isFetching) {
      console.log(data, hasNextPage);
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
      const res = await fetchFunction(pageParam, param_tab ? param_tab : "");
      if (!res) {
         throw new Error("Ошибка при получении данных");
      }
      console.log(res);
      return {
         data: param_tab || tab || queryKey === OrdersQueryKeys.ORDERS ? res.data : res.data.data,
         nextPage: pageParam + 1,
         hasNextPage: tab ? res.has_next_page : res.data.has_next_page,
      };
   };

   return {
      observerTarget,
      data: data ? data.pages.flatMap((page) => page.data) : [],
      isError,
      isLoading,
      isFetchingNextPage,
   };
};

// ------------------------

// "use strict";

// import { useEffect, useRef, useState } from "react";

// interface Props {
//    fetchFunction: any;
//    isList?: boolean;
//    stage?: string;
//    selectedTab?: string;
// }

// export interface IData {
//    id: number;
//    type: string;
//    status?: string;
//    slug: string;
//    title: string;
//    description: string;
//    created_at: string;
//    image?: string;
//    service?: string;
// }

// const options = {
//    rootMargin: "5px",
//    threshold: 0.5,
// };

// function useDetectFirstRender() {
//    const [firstRender, setFirstRender] = useState(true);

//    useEffect(() => {
//       setFirstRender(false);
//    }, []);

//    return firstRender;
// }

// export const useInfiniteScroll = ({ fetchFunction, isList, stage }: Props) => {
//    const observerTarget = useRef<HTMLDivElement>(null);
//    const firstRender = useDetectFirstRender();

//    const [data, setData] = useState<IData[]>([]);
//    const [page, setPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(Infinity);
//    const [hasNextPage, setHasNextPage] = useState(true);
//    const [isLoading, setIsLoading] = useState(false);
//    const [isError, setIsError] = useState(false);
//    const [isInitialLoading, setIsInitialLoading] = useState(false);

//    useEffect(() => {
//       const fetchData = async () => {
//          if (firstRender) {
//             setIsInitialLoading(true);
//          } else {
//             setIsLoading(true);
//          }
//          try {
//             const res = await fetchFunction(page, stage ? stage : "");
//             console.log(res);
//             if (!res) {
//                throw new Error("Ошибка при получении данных");
//             }

//             setPage((prevPage) => prevPage + 1);
//             if (!isList) {
//                setData((prevData) => [...prevData, ...res.data.data]);
//                setHasNextPage(res.data.has_next_page);
//             } else {
//                setData((prevData) => [...prevData, ...res["my-ads"]]);
//                setHasNextPage(res.has_next_page);
//             }

//             setIsError(false);
//          } catch (error) {
//             console.error("Ошибка при получении данных:", error);
//             setIsError(true);
//          } finally {
//             if (firstRender) {
//                setIsInitialLoading(false);
//             } else {
//                setIsLoading(false);
//             }
//          }
//       };

//       const observer = new IntersectionObserver((entries) => {
//          if (entries[0].isIntersecting && !isInitialLoading && !isLoading && hasNextPage) {
//             fetchData();
//          }
//       }, options);

//       const observeTarget = observerTarget.current;

//       if (!observeTarget) return;

//       observer.observe(observeTarget);

//       return () => {
//          observer.disconnect();
//       };
//       // eslint-disable-next-line
//    }, [observerTarget, totalPages, page, fetchFunction, stage]);

//    const resetData = () => {
//       setData([]);
//       setPage(1);
//       setTotalPages(Infinity);
//       setHasNextPage(true);
//    };

//    return { observerTarget, isError, isInitialLoading, isLoading, data, resetData };
// };

// -----------------------------------------

// import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

// interface IData {
//    body: string;
//    id: number;
//    userId: number;
//    title: string;
// }

// function useDetectFirstRender() {
//    const [firstRender, setFirstRender] = useState(true);

//    useEffect(() => {
//       setFirstRender(false);
//    }, []);

//    return firstRender;
// }

// const useScrollData = (
//    page: number,
//    setData: Dispatch<SetStateAction<IData[]>>,
//    setTotalPages: Dispatch<SetStateAction<number>>,
//    setHasNextPage: Dispatch<SetStateAction<boolean>>,
//    fetchFunction: (page: number) => Promise<any>
// ) => {
//    const { isLoading, isError, isSuccess, data } = useQuery({
//       queryKey: ["data", page],
//       queryFn: async () => {
//          const response = await fetchFunction(page);
//          return response;
//       },
//       retry: 2,
//    });

//    useEffect(() => {
//       if (isSuccess && data) {
//          console.log(data);
//          setData((prevData) => [...prevData, ...data.data.data]);
//          // setTotalPages(data.totalPages);
//          setHasNextPage(data.data.has_next_page);
//       }
//    }, [data, isSuccess]);

//    return {
//       isLoading,
//       isError,
//       isSuccess,
//    };
// };

// const options = {
//    rootMargin: "5px",
//    threshold: 0.5,
// };

// export const useInfiniteScroll = ({ fetchFunction, isList, stage }: Props) => {
//    const observerTarget = useRef<HTMLDivElement | null>(null);

//    const [data, setData] = useState<IData[]>([]);
//    const [page, setPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(Infinity);
//    const [hasNextPage, setHasNextPage] = useState(true);

//    const { isLoading, isError, isSuccess } = useScrollData(
//       page,
//       setData,
//       setTotalPages,
//       setHasNextPage,
//       fetchFunction
//    );

//    const isFirstLoading = useDetectFirstRender();

//    useEffect(() => {
//       const observer = new IntersectionObserver((entries) => {
//          if (entries[0].isIntersecting && hasNextPage && !isLoading && !isFirstLoading) {
//             setPage((prevPage) => prevPage + 1);
//          }
//       }, options);

//       const observeTarget = observerTarget.current;

//       if (observeTarget) {
//          observer.observe(observeTarget);
//       }

//       return () => {
//          if (observeTarget) {
//             observer.unobserve(observeTarget);
//          }
//       };
//    }, [page, totalPages, isLoading]);

//    const resetData = () => {
//       setData([]);
//       setPage(1);
//       setTotalPages(Infinity);
//       setHasNextPage(true);
//    };

//    return { observerTarget, data, isLoading, isError, isFirstLoading, resetData };
// };
