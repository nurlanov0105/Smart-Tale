"use strict";

import { useEffect, useRef, useState } from "react";

const options = {
   rootMargin: "5px",
   threshold: 0.5,
};

interface IData {
   body: string;
   id: number;
   userId: number;
   title: string;
}
function useDetectFirstRender() {
   const [firstRender, setFirstRender] = useState(true);

   useEffect(() => {
      setFirstRender(false);
   }, []);

   return firstRender;
}

export const useInfiniteScroll = (fetchFunction: any) => {
   const observerTarget = useRef(null);
   const firstRender = useDetectFirstRender();

   const [data, setData] = useState<IData[]>([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(Infinity);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [isInitialLoading, setIsInitialLoading] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         if (firstRender) {
            setIsInitialLoading(true);
         } else {
            setIsLoading(true);
         }

         try {
            const response = await fetchFunction(page);

            if (!response.data) {
               throw new Error("Ошибка при получении данных");
            }

            //console.log(response);

            setPage((prevPage) => prevPage + 1);
            setData((prevData) => [...prevData, ...response.data.data]);
            setTotalPages(Math.ceil(response.data.totalPages / 12));
            // setData((prevData) => [...prevData, ...response.data]);
            // setTotalPages(Math.ceil(response.headers["x-total-count"] / 12));
            setIsError(false);
         } catch (error) {
            console.error("Ошибка при получении данных:", error);
            setIsError(true);
         } finally {
            if (firstRender) {
               setIsInitialLoading(false);
            } else {
               setIsLoading(false);
            }
         }
      };

      const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting && page < totalPages && !isLoading && !isError) {
            fetchData();
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fetchFunction, isError, isLoading, page, totalPages]);

   return { observerTarget, data, isLoading, isError, isInitialLoading };
};

// import {useEffect, useRef, useState} from "react";
// import axios from "axios";
// import {baseApiInstance} from "@/shared/api/instance";
// import {EquipmentsEndpoints} from "@/shared/api";
//
// function useDetectFirstRender() {
//     const [firstRender, setFirstRender] = useState(true);
//
//     useEffect(() => {
//         setFirstRender(false);
//     }, []);
//
//     return firstRender;
// }

// const useScrollData = (page: number, setData: any, setTotalPages: any) => {
//
//     const {isLoading, isError, isSuccess, error, data} = useQuery({
//         queryKey: ["data", page],
//         queryFn: async () => {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`)
//             return response
//         },
//         select: (data) => {
//             //setData((prevData) => [...prevData, ...data])
//
//             //setTotalPages(Math.ceil(data.headers["x-total-count"] / 12));
//             return {
//                 data: data.data,
//                 totalPages: Math.ceil(Number(data.headers['x-total-count']) / 12),
//             };
//         },
//         retry: 2
//     })
//
//     useEffect(() => {
//         if (isSuccess && data) {
//             setData((prevData) => [...prevData, ...data.data]);
//             setTotalPages((prevTotalPages) => {
//                 if (prevTotalPages !== data.totalPages) {
//                     return data.totalPages;
//                 }
//                 return prevTotalPages;
//             });
//         }
//     }, [isSuccess, data, setData, setTotalPages]);
//
//     return {
//          isLoading, isError, isSuccess
//     }
// }
//
// export const useInfiniteScroll2 = (fetchFunction: any) => {
//     const observerTarget = useRef(null);
//
//     const [data, setData] = useState<IData[]>([]);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(Infinity);
//
//     const {isLoading, isError, isSuccess} = useScrollData(page, setData, setTotalPages)
//
//     const isFirstLoading = useDetectFirstRender()
//
//
//     useEffect(() => {
//
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting && page < totalPages) {
//                 setPage((prevPage) => prevPage + 1);
//             }
//         }, options);
//
//         const observeTarget = observerTarget.current;
//
//         if (observeTarget) {
//             observer.observe(observeTarget);
//         }
//
//         return () => {
//             if (observeTarget) {
//                 observer.unobserve(observeTarget);
//             }
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
//
//     return { observerTarget, data, isLoading, isError, isFirstLoading };
// };
