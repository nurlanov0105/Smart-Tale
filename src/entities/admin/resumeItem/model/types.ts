
export type ResumeCardType = {
    author: {
        last_name: string
        middle_name: string
        first_name: string
    }
    job_title: string;
    slug: string;
    // min_salary: string;
    // max_salary: string;
    // currency: CurrencyType;
    // organization: OrganizationType;
    // location: string;
    experience: string;
};

export type ResumeItemProps = {
    item: ResumeCardType;
};