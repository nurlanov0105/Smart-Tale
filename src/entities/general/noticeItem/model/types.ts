export type NoticesDataType = {
   imageUrl: string;
   author: string;
   title: string;
   date: string;
   id: number;
};

export type NoticeItemProps = {
   item: NoticesDataType;
};
