"use client"

import React, { useEffect, useState } from "react";
import {ArrowUpIcon} from "lucide-react";
import {Button} from "@/shared/ui";
import styles from "./styles.module.scss";

const ShowBtnHeight = 1500
const ScrollTopButton = () => {

    const [isShow, setIsShow] = useState(false);

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

    if (!isShow) return null

    return (
        <Button className={styles.button} classType="btn_fixed" onClick={handleScrollToTop}>
            <ArrowUpIcon />
        </Button>
    )
};


export default ScrollTopButton