export type VacancyItemProps = {
    item: {
        id: number
        title: string,
        description: string,
        salary: string,
        organization: string,
        city: string,
        experience: string,
        responses: number[]
    }
    typeView?: boolean
    isAdmin?: boolean
}