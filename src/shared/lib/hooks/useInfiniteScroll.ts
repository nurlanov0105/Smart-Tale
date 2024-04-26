"use client"
import {useEffect, useState} from "react";
import axios from "axios";

export const useInfiniteScroll = () => {

    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState<string[]>([""])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)

    const scrollHandler = (e: any) => {
        console.log(e)
        const scrollHeight = e.target.documentElement.scrollHeight
        const scrollTop = e.target.documentElement.scrollTop
        const innerHeight = window.innerHeight
        if (scrollHeight - (scrollTop + innerHeight) < 100){
            setFetching(true)
            console.log(scrollHeight - (scrollTop + innerHeight))
        }
        console.log(scrollHeight)

    }
    useEffect(() => {
        if (fetching){
            axios(`api?page=${currentPage}`)
                .then(res => {
                    setData([...data, ...res.data])
                    setCurrentPage(page => page + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)

        return () => {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [totalCount]);
}