export type OrganizationsTypes = {
    "my-orgs": OrganizationItem[]
    "other-orgs": OrganizationItem[]
}

export type OrganizationItem = {
    active: boolean
    description: string
    logo: string | null
    slug: string
    title: string
}