import { useFormContext} from "react-hook-form";
import {AnnouncementValues} from "@/shared/lib";
import {
    useAnnouncementAction,
    useAnnouncementDetailsType,
} from "../useQueries";
import type {AnnouncementDetailFormType, AnnouncementDetailProps} from "../types";
import {buildAnnouncementFormData} from "../helper";

export const useAnnouncementDetail = ({type, slug}: AnnouncementDetailProps) => {

    const {handleSubmit} = useFormContext<AnnouncementDetailFormType>()

    const responseData = useAnnouncementDetailsType(slug, type)
    const updateData = useAnnouncementAction(type)

    console.log(responseData?.data)
    const onSubmit = (data: AnnouncementDetailFormType) => {
        const formData = buildAnnouncementFormData(data, type);

        switch (type) {
            case AnnouncementValues.EQUIPMENT:
                updateData.mutate({data: formData, slug});
                break;
            case AnnouncementValues.SERVICE:
                updateData.mutate({data: formData, slug});
                break;
            case AnnouncementValues.ORDER:
                updateData.mutate({data: formData, slug});
                break;
            default:
                break;
        }
    };

    return {
        data: responseData?.data?.data,
        handleSubmit: handleSubmit(onSubmit),

        isSuccess: responseData?.isSuccess,
        isLoading: responseData?.isPending,
        isError: responseData?.isError,
    }
}