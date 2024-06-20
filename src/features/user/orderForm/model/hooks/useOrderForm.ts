import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { AnnouncementValues } from "@/shared/lib";
import { useCreateEquipment, useCreateOrder, useCreateService } from "./useQueries";
import type { AnnouncementCreateFormType } from "../types";
import { CREATE_ANNOUNCEMENT_POST_NAMES } from "../consts";

export const useOrderForm = (type: string) => {
   const {
      reset,
      register,
      handleSubmit,
      watch,
      control,
      setValue,
      formState: { errors, isValid },
   } = useForm<AnnouncementCreateFormType>({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
   });

   const createOrder = useCreateOrder(reset);
   const createEquipment = useCreateEquipment(reset);
   const createService = useCreateService(reset);

   const createAnnouncementByType = {
      order: createOrder,
      equipment: createEquipment,
      service: createService,
   };
   const createAnnouncement =
      createAnnouncementByType[type as keyof typeof createAnnouncementByType];

   const onSubmit = (data: AnnouncementCreateFormType) => {
      const formData = new FormData();

      formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.title, data.title);
      formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.description, data.description);
      formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.price, data.price.toString());
      formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.currency, data.currency.postValue);
      formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.tel, data.tel);
      // formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.amount, data.amount.toString())
      if (data.email) formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.email, data.email);

      data?.images.forEach((image) =>
         formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.images, image.image)
      );

      if (type === AnnouncementValues.EQUIPMENT) createEquipment.mutate(formData);
      if (type === AnnouncementValues.SERVICE) createService.mutate(formData);
      if (type === AnnouncementValues.ORDER) {
         const newDate = new Date(
            data?.year.postValue,
            data?.month.postValue - 1,
            data?.day.postValue
         );
         const deadline = format(newDate, "yyyy-MM-dd");

         formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.deadline, deadline);
         data?.sizes.forEach((size) =>
            formData.append(CREATE_ANNOUNCEMENT_POST_NAMES.size, size.postValue)
         );

         createOrder.mutate(formData);
      }
   };

   return {
      handleSubmit: handleSubmit(onSubmit),
      isLoading: createAnnouncement?.isPending,
      isError: createAnnouncement?.isError,
      register,
      errors,
      isValid,
      watch,
      control,
      setValue,
   };
};
