import {useFormContext} from "react-hook-form";
import { CurrencyType } from "@/shared/lib";
import {useUpdateVacancyQuery, useVacancyQuery} from "./useQueries";
import { VacancyDetailsTypes } from "./types";

export const useVacancyDetails = (id: string) => {
   const {handleSubmit} = useFormContext<VacancyDetailsTypes>()

   const { data, isLoading, isSuccess, isError } = useVacancyQuery(id)
   const { mutate, isPending } = useUpdateVacancyQuery()

   const onSubmit = (data: VacancyDetailsTypes) => {
      const adapter = {
         ...data,
         currency: data.currency.postValue as CurrencyType,
         schedule: data.schedule.postValue,
         location: data.location.postValue,
      };
      mutate({ data: adapter, slug: id });
   };

   return {
      handleSubmit: handleSubmit(onSubmit),
      vacancy: data,

      isLoading,
      isError,
      isSuccess,
      isSubmitting: isPending,
      id,
   };
};
