"use client"

import React from "react";
import {ArrowUpIcon} from "lucide-react";
import {Button} from "@/shared/ui";
import {useScrollTop} from "@/shared/lib";
import styles from "./styles.module.scss";

const ScrollTopButton = () => {

    const {isShow, handleScrollToTop} = useScrollTop()

    if (!isShow) return null

    return (
        <Button className={styles.button} classType="btn_fixed" onClick={handleScrollToTop}>
            <ArrowUpIcon />
        </Button>
    )
};


export default ScrollTopButton