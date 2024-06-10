export type ChangeImageProps = {
   image: File | string | null;
   name: string;
   isAdmin?: boolean;
   disabled?: boolean;
   isLoading?: boolean;
   slug?: string;
};
