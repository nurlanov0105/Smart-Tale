import { IData } from "@/shared/lib/hooks/useInfiniteScroll";

export type ItemProps = {
   item: IData;
   isCurrent?: boolean;
};

export type ItemType = {
   type: string;
   slug: string;
   title: string;
   description: string;
   image: string;
};
