import React from 'react';
import {NextPage} from "next";
import {CardsSection} from "@/widgets/user/cardsSection";

const ServicesPage: NextPage = () => {
    return (
        <CardsSection isLoading={false} isError={false} type="standart"/>
    );
};

export default ServicesPage;