import { useForm } from "react-hook-form";
import { useAddResumeQuery } from "@/entities/user/vacancyItem";
import { ResumeFormTypes } from "./types";
import {
   useResumeDetailsQuery,
   useUpdateResumeQuery,
} from "@/entities/user/vacancyItem/model/useQueries";
import { useParams } from "next/navigation";
import { CurrencyType } from "@/shared/lib";

export const useResumeDetails = () => {
   const {
      reset,
      register,
      handleSubmit,
      control,
      formState: { errors, isValid, isDirty },
   } = useForm<ResumeFormTypes>({
      mode: "onBlur",
   });

   const { slug } = useParams();

   const { data, isLoading, isError, isSuccess } = useResumeDetailsQuery(slug.toString());

   const { mutate, isPending } = useUpdateResumeQuery({ reset, slug: slug.toString() });

   const onSubmit = (data: ResumeFormTypes) => {
      const adapter = {
         ...data,
         currency: data.currency.postValue as CurrencyType,
         schedule: data.schedule.postValue,
         location: data.location.postValue,
      };
      mutate(adapter);
   };

   return {
      handleSubmit: handleSubmit(onSubmit),
      resume: data,
      isLoading,
      isSubmitting: isPending,
      isError,
      isSuccess,

      register,
      reset,
      isDirty,
      errors,
      isValid,
      control,
   };
};
