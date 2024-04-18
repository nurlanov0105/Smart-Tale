"use client"
import React from 'react';
import styles from "./styles.module.scss"
import {Button} from "@/shared/ui";
import {useRouter} from "next/navigation";
import {ADMIN_ROUTES} from "@/shared/lib";


const Position = () => {
    const router = useRouter()
    const handleRoute = () => {
        router.push(ADMIN_ROUTES.ADD_POSITION)
    }

    return (
        <div className={styles.position}>
            <h3>Какой-то список должностей</h3>
            <div>
                <Button onClick={handleRoute}>Добавить должность</Button>
            </div>
        </div>
    );
};

export default Position;