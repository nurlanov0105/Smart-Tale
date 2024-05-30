export type ItemProps = {
   item: ItemType;
   isCurrent?: boolean;
   isOrganization?: boolean;
};

export type ItemType = {
   type: string;
   slug: string;
   title: string;
   description: string;
   // image: string;
   status: string;
};
