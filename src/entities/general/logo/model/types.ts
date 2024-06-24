export type OrganizationDetailsTypes = {
    title: string
    description: string
    created_at: string
    logo: string | null
    slug: string

    owner?: {
        slug: string,
        first_name: string,
        last_name: string,
        profile_image: null | string
    },
}

export type LogoProps = {
    type?: "navbar" | "organization"
    data?: OrganizationDetailsTypes
}

