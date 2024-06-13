export type AuthorType = {
   first_name: string;
   last_name: string;
   profile_image: string;
   slug?: string;
};

export type ChatType = {
   author: AuthorType;
};
