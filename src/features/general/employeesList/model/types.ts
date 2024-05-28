export interface EmployeesResponseTypes{
    email: string
    first_name: string
    job_title: string
    last_name: string
    middle_name: string
    status: string
    user_slug: string
    order: {title: string, slug: string}[]
}

export interface EmployeesListProps{
    data: EmployeesResponseTypes[] | undefined
    isLoading: boolean
}