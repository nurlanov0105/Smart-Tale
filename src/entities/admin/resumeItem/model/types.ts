
export type ResumeCardType = {
    author: {
        last_name: string
        middle_name: string
        first_name: string
    }
    job_title: string;
    slug: string;
    min_salary: number;
    max_salary: number;
    currency: string;
    // organization: OrganizationType;
    // location: string;
    experience: string;
};

export type ResumeItemProps = {
    item: ResumeCardType;
};