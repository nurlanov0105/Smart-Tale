import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import { AddEmployeeTypes, usePositions } from "@/shared/lib";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

interface IProps {
   reset: UseFormReset<AddEmployeeTypes>;
}

export const usePositionsEmployee = ({ reset }: IProps) => {
   const { data, isError, isSuccess, isLoading } = usePositions();
   const profileData = useSubscribeStore(state => state.data)

   useEffect(() => {
      if (isSuccess && data) {
         const positionsList = data.map((item, idx) => {
            return {
               value: item.title,
               postValue: item.slug,
               idx,
               ...item,
            };
         });
         const organization = profileData?.org
         const organizations = profileData?.job_titles.map(item => {
             if (item.organization === null) {
                 return
             }
             return {value: item.organization, postValue: item.organization}
         })

         reset({
             position: positionsList[0],
             positions: positionsList,
             organization: {value: organization?.title, postValue: organization?.slug},
             organizations: organizations
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess]);


    return {
        isLoadingPositions: isLoading,
        isErrorPositions: isError,
        data
    }
}
