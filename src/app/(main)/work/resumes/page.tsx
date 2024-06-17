import React from 'react';
import {NextPage} from "next";
import {Resumes} from "@/widgets/admin/resumes";
import {BASE_URL, EquipmentQueryKeys, EquipmentsEndpoints, ResumeEndpoints, ResumeQueryKeys} from "@/shared/api";
import {ErrorMessage} from "@/entities/general/errorMessage";
import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";


export default async function ResumesPage(){
    const data = await fetchResumes()

    if (!data) return <ErrorMessage/>

    return (
        <Resumes initialData={data} queryKey={ResumeQueryKeys.GET_RESUMES}/>
    );
};

const fetchResumes = async () => {
    try {
        const res = await fetch(BASE_URL + ResumeEndpoints.GET_RESUMES, {next: {revalidate: 3600}});

        if (!res.ok){
            throw new Error("Произошла ошибка при запросе")
        }

        return res.json();

    } catch (err){
        console.error('Ошибка при обработке запроса:', err);
    }

};

