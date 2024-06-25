export type DeletePositionProps = {
   slug: string;
};

export type DataType = {
   image?: string;
   is_applied?: boolean;
   slug?: string;
   title?: string;
   email?: string;
   first_name?: string;
   job_title?: string;
   last_name?: string;
   middle_name?: string;
   status?: string;
   user_slug?: string;
   order?: { title: string; slug: string }[];
};

export type ModalProps = {
   slug: string;
   componentName: string;
   type?: string;
   organizationSlug?: string;
   data?: { data: DataType[]; slug: string };
};
