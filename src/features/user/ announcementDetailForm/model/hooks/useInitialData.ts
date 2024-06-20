import {useEffect} from "react";
import {monthsList} from "@/entities/general/selectDate/model/helper";
import {cloudImageToFile} from "@/shared/lib/utils/imageToFile";
import type {InitialDataProps, ImageTypes} from "../types";
import {currenciesMap, useGetDates} from "@/shared/lib";

export const useInitialData = ({reset, data, isSuccess}: InitialDataProps) => {

    const {day, year , month} = useGetDates(data?.deadline)

    useEffect(() => {
        const initializeData = async () => {
            if (data && isSuccess) {
                const monthValue = monthsList()[month];

                const images = await Promise.all(data?.images.map(async (item: ImageTypes) => {
                    const file = await cloudImageToFile(item.images, Date.now().toString());
                    return {id: item.id, image: file};
                }));

                reset({
                    title: data.title,
                    tel: data["phone_number"],
                    price: data.price,
                    email: data.email,
                    description: data.description,
                    day: { value: day, postValue: day },
                    month: { value: monthValue.value, postValue: month + 1 },
                    year: { value: year, postValue: year },
                    currency: currenciesMap[data.currency as keyof typeof currenciesMap],
                    images: images,
                    initialImages: images,
                    sizes: [{ value: "Xl", postValue: "Xl" }, { value: "42", postValue: "42" }]
                });
            }
        };

        initializeData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, data])
}