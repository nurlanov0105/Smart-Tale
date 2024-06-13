import { useForm } from "react-hook-form";
import { useAddResumeQuery } from "@/entities/user/vacancyItem";
import { ResumeFormTypes } from "./types";
import { CurrencyType } from "@/shared/lib";

export const useAddResume = () => {
   const {
      reset,
      register,
      handleSubmit,
      control,
      formState: { errors, isValid },
   } = useForm<ResumeFormTypes>({
      mode: "onBlur",
   });

   const { mutate, isPending, isError } = useAddResumeQuery(reset);

   const onSubmit = (data: ResumeFormTypes) => {
      console.log(data);
      const adapter = {
         ...data,
         currency: data.currency.postValue as CurrencyType,
         graphic: data.schedule.postValue,
         experience: data.experience,
         location: data.location.postValue,
         schedule: data.schedule.postValue,
      };
      mutate(adapter);
   };

   return {
      handleSubmit: handleSubmit(onSubmit),
      isLoading: isPending,
      isError,
      register,
      errors,
      isValid,
      control,
   };
};
