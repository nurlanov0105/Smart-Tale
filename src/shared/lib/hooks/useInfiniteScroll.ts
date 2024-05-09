"use client"

import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface IData{
    body: string
    id: number
    userId: number
    title: string
}
// const list = [
//     {body: "", title: "", userId: 1, id: 1},
//     {body: "", title: "", userId: 1, id: 2},
//     {body: "", title: "", userId: 1, id: 3},
//     {body: "", title: "", userId: 1, id: 4},
//     {body: "", title: "", userId: 1, id: 5},
//     {body: "", title: "", userId: 1, id: 6},
// ]
const options = {
    rootMargin: '5px',
    threshold: 0.5
}

export const useInfiniteScroll = () => {

    const observerTarget = useRef<HTMLDivElement>(null);

    const [data, setData] = useState<IData[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Infinity)

    useEffect(() => {
        const fetchData = () => {
            if (page >= totalPages) return;

            const API = `https://jsonplaceholder.typicode.com/posts?_limit=24&_page=${page}`
            axios
                .get(API)
                .then(res => {
                    setPage(prevPage => prevPage + 1);
                    setData(prevData => [...prevData, ...res.data]);
                    setTotalPages(Math.ceil(res.headers["x-total-count"] / 24))
                })
                .catch(error => console.error("Error fetching data:", error))
        }

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    fetchData();
                }
            },
            options
        );

        const observeTarget = observerTarget.current

        if (!observeTarget) return

        observer.observe(observeTarget);

        return () => {
            observer.disconnect()
        };
    }, [observerTarget, totalPages, page]);

    return {observerTarget, data}
}