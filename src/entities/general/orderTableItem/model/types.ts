export type OrderItemType = {
   booked_at: any;
   currency: string;
   description: string;
   image: string;
   is_booked: boolean;
   is_finished: boolean;
   is_liked: boolean;
   price: string;
   slug: string;
   title: string;
   type: string;
   author: {
      slug: string;
      first_name: string;
      last_name: string;
      profile_image: any;
   };
};

export type OrderTableItemProps = {
   item: OrderItemType;
};
