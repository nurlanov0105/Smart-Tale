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
    price: string
    currency: string
    image: string
};