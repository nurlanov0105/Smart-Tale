import {useForm} from "react-hook-form";
import {useAddVacancy} from "@/entities/user/vacancyItem";

export const useCreateVacancy = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
    });

    const createVacancy = useAddVacancy()

    const onSubmit = (data: any) => {
        const readyData = { ...data };
        // readyData.schedule = graphicSelected.postValue;
        // readyData.location = citySelect.postValue;
        //
        // if (readyData) {
        //     addVacancy(readyData);
        // }
    };

    return {
        handleSubmit: handleSubmit(onSubmit),
        register,
        errors,
        isValid
    }
}