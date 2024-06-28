export type ItemProps = {
   item: EmployeeOrderTypes;
   isCurrent?: boolean;
};

export type EmployeeOrderTypes = {
   type: string;
   status?: string;
   slug: string;
   title: string;
   description: string;
   created_at: string;
   booked_at?: string;
   deadline?: string;
   price: string;
   currency: string;
   image: string;
   author: {
      slug: string;
      first_name: string;
      last_name: string;
      profile_image: null | string;
      phone_number?: null | string;
   };
};
