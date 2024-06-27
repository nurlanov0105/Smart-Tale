import React from 'react';
import {AdminResponseItem} from "@/entities/admin/adminResponseItem";
import {useGetVacancyResponses} from "../../model/useQueries";
import styles from "./styles.module.scss";


const ResponsesModal = () => {
    const list = [
        {name: "Михаил Юрьевич Лермонтов", date: "сегодня"},
        {name: "Пранов Адилет", date: "сегодня"},
        {name: "Нурсултан Нурланов", date: "вчера"},
        {name: "Маликов Азамат", date: "9 мая"},
        {name: "Александр Сергеевич Пушкин", date: "8 мая"},
        {name: "Лев Николаевич Толстой", date: "4 мая"},
    ]

    // const {data} = useGetVacancyResponses()
    // console.log(data)


    return (
        <div className={styles.modal}>
            <h3 className="h3">Список откликов</h3>
            <div className={styles.modal__list}>
                {
                    list.map((item, idx) =>
                        <AdminResponseItem item={item} key={idx}/>
                    )
                }
            </div>
        </div>
    );
};

export default ResponsesModal;