export interface SlugStoreTypes {
    cardSlug: string | null
    vacancySlug: string | null
    resumeSlug: string | null
    organizationSlug: string | null
    employeeSlug: string | null
    positionSlug: string | null
    setSlugState: (state: Partial<SlugStoreTypes>) => void
}