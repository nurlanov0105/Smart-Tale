export type CreateOrderTypes = {
    title: string,
    description: string,
    uploaded_images: File[],
    deadline: string,
    price: number,
    //category_slug: "T-shorts",
    phone_number: string,
    email: string,
    size: string
}

export type CreateEquipmentTypes = {
    title: string,
    description: string,
    uploaded_images: File[],
    price: number,
    //category_slug: "T-shorts",
    phone_number: string,
    email: string,
}