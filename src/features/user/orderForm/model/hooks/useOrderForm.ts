import { useFormContext } from "react-hook-form";
import { useCreateAnnouncement } from "./useQueries";
import { buildAnnouncementFormData } from "../helper";
import { AnnouncementValues } from "@/shared/lib";
import type { AnnouncementCreateFormType } from "../types";

export const useOrderForm = (type: string) => {
   const { reset, handleSubmit } = useFormContext<AnnouncementCreateFormType>();

   const createAnnouncement = useCreateAnnouncement(type, reset);

   const onSubmit = (data: AnnouncementCreateFormType) => {
      const formData = buildAnnouncementFormData(data, type);

      switch (type) {
         case AnnouncementValues.EQUIPMENT:
            createAnnouncement.mutate(formData);
            break;
         case AnnouncementValues.SERVICE:
            createAnnouncement.mutate(formData);
            break;
         case AnnouncementValues.ORDER:
            createAnnouncement.mutate(formData);
            break;
         default:
            break;
      }
   };

   return {
      handleSubmit: handleSubmit(onSubmit),
      isLoading: createAnnouncement?.isPending,
      isError: createAnnouncement?.isError,
   };
};
