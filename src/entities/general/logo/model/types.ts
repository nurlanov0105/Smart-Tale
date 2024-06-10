export type OrganizationDetailsTypes = {
    title: string
    description: string
    created_at: string
    logo: string | null
    slug: string
}

export type LogoProps = {
    type?: "navbar" | "organization"
    data?: OrganizationDetailsTypes
}