"use client"
import React from 'react';

interface IProps{
    type: string
    price: number
    variant?: "number" | "default"
}

const priceMap = {
    Som: {title: "ky-KG", currency: "KGS"},
    Ruble: {title: "ru-RU", currency: "Rub"},
    Euro: {title: "de-DE", currency: "EUR"},
    USD: {title: "en-US", currency: "USD"}
}

const PriceFormat = ({price, type, variant = "default"}: IProps) => {
    const priceData = priceMap[type as keyof typeof priceMap]

    const formattedPrice = new Intl.NumberFormat(priceData?.title ?? "ky-KG").format(price);

    const formattedPriceAndCurrency = new Intl.NumberFormat(priceData?.title ?? "ky-KG", {
        style: 'currency',
        currency: priceData?.currency ?? "KGS",
    }).format(price);

    if (variant === "number") {
        return <span>{formattedPrice}</span>;
    }

    return <span>{formattedPriceAndCurrency}</span>;
};

export default PriceFormat;