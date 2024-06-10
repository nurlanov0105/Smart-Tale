import { CurrencyType, OrganizationType } from "@/entities/user/vacancyItem";
import { Dispatch, SetStateAction } from "react";

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
   slug: string;
   title: string;
   description: string;
   status: string;
   currency: string;
   created_at: string;
   price: string;
   image: string;

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
