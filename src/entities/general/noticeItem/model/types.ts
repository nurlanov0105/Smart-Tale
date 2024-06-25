export type NoticesDataType = {
   description: string;
   id: 1;
   read: false;
   recipient: { slug: string };
   timestamp: string;
   title: string;
   type?: string;
   image?: string;
   imageUrl?: string;
   author?: string;
   org_slug?: string;
   org?: string;
};

export type NoticeItemProps = {
   item: NoticesDataType;
};
