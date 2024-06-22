import { Dispatch, SetStateAction } from "react";
import { CurrencyType } from "@/shared/lib";

export interface UsePaginationOptions {
   fetchFunction: ({
      page,
      param_tab,
      ads,
      title,
      slug,
   }: {
      page: number;
      param_tab?: string;
      ads?: string;
      title?: string;
      slug?: string;
   }) => Promise<any>;
   queryKey: string;
   param_tab?: string;
   tab?: string;
   ads?: string;
   title?: string;
   slug?: string;
}

export interface UsePaginationResult {
   data: ItemType[];
   totalPages: number;
   currentPage: number;
   isLoading: boolean;
   isError: boolean;
   hasNextPage: boolean;
   fetchNextPage: () => void;
   fetchPreviousPage: () => void;
   setCurrentPage: Dispatch<SetStateAction<number>>;
}

type OwnerType = {
   slug: string;
   first_name: string;
   last_name: string;
   profile_image: string;
};

export type ItemType = {
   type: string;
   status?: string;
   slug: string;
   title: string;
   description: string;
   created_at: string;
   price: string
   currency: string
   image: string
   author: {
      slug: string,
      first_name: string,
      last_name: string,
      profile_image: null | string
   },


   owner?: OwnerType;
   phone_number?: string;

   // job_title?: string;
   // min_salary?: string;
   // max_salary?: string;
   // organization?: OrganizationType;
   // location?: string;
   // experience?: string;
   // schedule?: string;
   // response_count?: string;
};
