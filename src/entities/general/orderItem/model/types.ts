export type ItemProps = {
   item: ItemType;
   isCurrent?: boolean;
};

export type ItemType = {
   type: string;
   slug: string;
   title: string;
   description: string;
   // image: string;
   status: string
};
