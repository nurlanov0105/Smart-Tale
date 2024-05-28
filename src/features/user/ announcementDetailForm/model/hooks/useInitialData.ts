import {useEffect} from "react";
import {getDate, getMonth, getYear, parseISO} from "date-fns";
import {currenciesMap} from "@/widgets/user/createVacancy/model/values.data";
import {monthsList} from "@/entities/general/selectDate/model/helper";
import { processImage} from "@/shared/lib/utils/imageToFile";
import type {InitialDataProps, ImageTypes} from "../types";

export const useInitialData = ({reset, data, isSuccess}: InitialDataProps) => {

    useEffect(() => {
        const initializeData = async () => {
            if (data && isSuccess) {

                const parsedDateSimple = parseISO(data?.deadline ?? "2024");

                const yearSimple = getYear(parsedDateSimple);
                const monthSimple = getMonth(parsedDateSimple);
                const daySimple = getDate(parsedDateSimple);

                const monthValue = monthsList()[monthSimple];

                // const images = await Promise.all(data?.images.map(async (item: IImage) => {
                //     const file = await cloudImageToFile(item.images, Date.now().toString());
                //     return file;
                // }));

                const images = await Promise.all(data?.images.map(async (item: ImageTypes) => {
                    const file = await processImage(item.images, Date.now().toString());
                    return file;
                }));


                reset({
                    title: data.title,
                    tel: data["phone_number"],
                    price: data.price,
                    email: data.email,
                    description: data.description,
                    day: { value: daySimple, postValue: daySimple },
                    month: { value: monthValue.value, postValue: monthSimple + 1 },
                    year: { value: yearSimple, postValue: yearSimple },
                    currency: currenciesMap[data.currency as keyof typeof currenciesMap] as any,
                    images: images,
                    sizes: [{ value: "Xl", postValue: "Xl" }, { value: "42", postValue: "42" }]
                });
            }
        };

        initializeData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess])
}