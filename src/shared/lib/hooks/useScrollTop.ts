"use client"
import {useEffect, useState} from "react";

export const useScrollTop = () => {
    const [isShow, setIsShow] = useState(false);

    const ShowBtnHeight = 1500

    useEffect(() => {
        const elementWithMainDataId = document.querySelector('[data-id="main"]');

        const handleScroll = () => {
            if (elementWithMainDataId) {
                setIsShow(elementWithMainDataId.scrollTop > ShowBtnHeight);
            }
        };

        if (elementWithMainDataId) {
            elementWithMainDataId.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if (elementWithMainDataId) {
                elementWithMainDataId.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const handleScrollToTop = () => {
        const elementWithMainDataId = document.querySelector('[data-id="main"]');
        if (elementWithMainDataId) {
            elementWithMainDataId.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return {isShow, handleScrollToTop}

}