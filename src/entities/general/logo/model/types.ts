export type OrgnizationDetailsTypes = {
    title: string
    description: string
    created_at: string
    slug: string
}

export type LogoProps = {
    type?: "navbar" | "organization"
    data?: OrgnizationDetailsTypes
}