export type CardSceletonProps = {
   isLoading?: boolean;
   isError?: boolean;
   type: string;
   data?: any;
   fetchFunction: any;
   queryKey: string;
   tab?: string;
};
