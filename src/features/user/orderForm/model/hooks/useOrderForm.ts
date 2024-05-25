import { useForm } from "react-hook-form";
import { useCreateEquipment, useCreateOrder, useCreateService } from "../useQueries";
import type { OrderCreateFormType, UseOrderFormProps } from "../types";
import {format} from "date-fns";

export const useOrderForm = (type: string) => {

   const {
      reset,
      register,
      handleSubmit,
       watch,
       control,
      setValue,
      formState: { errors, isValid },
   } = useForm<OrderCreateFormType>(
       {
          mode: "onBlur",
          criteriaMode: "all",
          shouldFocusError: true,
       }
   );

   const createOrder = useCreateOrder(reset);
   const createEquipment = useCreateEquipment(reset);
   const createService = useCreateService(reset);

   const onSubmit = (data: OrderCreateFormType) => {
      const formData = new FormData();

      formData.append("title", data.title)
      formData.append("description", data.description)
      formData.append("price", data.price.toString())
      formData.append("currency", data.currency.postValue)
      formData.append("phone_number", data.tel)


      if (data.email) formData.append("email", data.email)
      data?.images.forEach(image => formData.append("uploaded_images", image))

      if (type === "order"){
         // formData.append("sizes", data.sizes)
         const newDate = new Date(data?.year.postValue, data?.month.postValue - 1, data?.day.postValue)
         const deadline = format(newDate, 'yyyy-MM-dd')

         formData.append("deadline", deadline)
         data?.sizes.forEach(size => formData.append("size", size.postValue))

         createOrder.mutate(formData)
      }

      if (type === "equipment") {
         console.log(data)
         createEquipment.mutate(formData)
      }
      if (type === "service") {
         console.log(data)
         createService.mutate(formData)
      }

   };

   const loading = type === "order" ? createOrder.isPending : type === "equipment" ? createEquipment.isPending : createService.isPending
   const error = type === "order" ? createOrder.isError : type === "equipment" ? createEquipment.isError : createService.isError

   return {
      handleSubmit: handleSubmit(onSubmit),
      isLoading: loading,
      isError: error,
      register,
      errors,
      isValid,
      watch,
      control,
      setValue
   };
};
