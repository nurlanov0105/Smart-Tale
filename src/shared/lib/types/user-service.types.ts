import {RightsTypes} from "@/shared/lib";

export interface ProfileRequestType {
   first_name: string;
   last_name: string;
   middle_name: string;
   phone_number: string;
   profile_image?: string;
}


export interface ProfileDataTypes{
   first_name: string,
   last_name: string,
   middle_name: string,
   phone_number: string,
   profile_image?: string | null | File | undefined,
   email: string,
   slug: string
}

export interface UserPositionTypes extends RightsTypes{
   organization: string | null,
   job_title: string | null,
}

export interface ProfileRequestTypes{
   profile: ProfileDataTypes,
   subscription: any,
   is_subbed: boolean,
   job_titles: UserPositionTypes[],
   org: {
      title: string
   }
}